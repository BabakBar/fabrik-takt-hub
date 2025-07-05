import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'

// Initialize Umami Analytics if configured
const initializeUmami = () => {
  const umamiUrl = import.meta.env.VITE_UMAMI_URL;
  const umamiWebsiteId = import.meta.env.VITE_UMAMI_WEBSITE_ID;
  
  if (umamiUrl && umamiWebsiteId) {
    const script = document.createElement('script');
    script.defer = true;
    script.src = umamiUrl;
    script.setAttribute('data-website-id', umamiWebsiteId);
    
    // Add load event listeners for verification
    script.onload = () => {
      console.log('✅ Umami analytics script loaded successfully');
      console.log('📊 Website ID:', umamiWebsiteId);
      console.log('🔗 Script URL:', umamiUrl);
    };
    
    script.onerror = () => {
      console.error('❌ Failed to load Umami analytics script');
    };
    
    document.head.appendChild(script);
    console.log('🔍 Umami analytics initialized');
  } else {
    console.log('📊 Umami analytics not configured (missing environment variables)');
    console.log('- VITE_UMAMI_URL:', umamiUrl ? '✅ Set' : '❌ Missing');
    console.log('- VITE_UMAMI_WEBSITE_ID:', umamiWebsiteId ? '✅ Set' : '❌ Missing');
  }
};

// Initialize analytics
initializeUmami();

console.log('Application starting...');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
