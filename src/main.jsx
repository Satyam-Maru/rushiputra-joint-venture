import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Always start at the top — prevents browser scroll restoration
// and clears any leftover #hash that would jump to a section.
window.history.scrollRestoration = 'manual';
window.scrollTo(0, 0);
if (window.location.hash) {
  window.history.replaceState(null, '', window.location.pathname);
}

createRoot(document.getElementById('root')).render(
    <App />
)
