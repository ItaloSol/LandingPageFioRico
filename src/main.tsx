import { StrictMode, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

// Lazy load the main App component
const App = lazy(() => import('./App'));

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-teal-50 to-rose-50">
        <div className="animate-pulse text-teal-600 text-xl font-medium">
          Carregando...
        </div>
      </div>
    }>
      <App />
    </Suspense>
  </StrictMode>
);