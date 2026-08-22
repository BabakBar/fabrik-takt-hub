import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from '@/App';
import '@/index.css';
import { RouterProvider } from '@/router';

const initializeUmami = () => {
  const websiteId = import.meta.env.VITE_UMAMI_WEBSITE_ID;

  if (!websiteId) return;

  // Served first-party by this app's own nginx (see the /s/ proxy in
  // nginx.conf). EasyPrivacy — on by default in uBlock Origin, AdGuard and
  // Brave — blocks the upstream's own /script.js URL, so a blocked visitor
  // produces no pageview at all. The path is hardcoded rather than
  // configurable because it has to match the nginx location that serves it.
  const script = document.createElement('script');
  script.defer = true;
  script.src = '/s/t.js';
  script.dataset.websiteId = websiteId;
  script.dataset.domains = 'fabriktakt.com,www.fabriktakt.com';
  script.dataset.performance = 'true';
  document.head.appendChild(script);
};

initializeUmami();

const root = document.getElementById('root');

if (!root) {
  throw new Error('Application root element was not found');
}

createRoot(root).render(
  <StrictMode>
    <RouterProvider>
      <App />
    </RouterProvider>
  </StrictMode>,
);
