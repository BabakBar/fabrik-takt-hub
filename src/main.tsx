import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from '@/App';
import '@/index.css';
import { RouterProvider } from '@/router';

const initializeUmami = () => {
  const source = import.meta.env.VITE_UMAMI_URL;
  const websiteId = import.meta.env.VITE_UMAMI_WEBSITE_ID;

  if (!source || !websiteId) return;

  const script = document.createElement('script');
  script.defer = true;
  script.src = source;
  script.dataset.websiteId = websiteId;
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
