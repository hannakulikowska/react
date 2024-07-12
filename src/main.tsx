import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import ErrorBoundary from './components/error/ErrorBoundary';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary
      fallback={<p style={{ textAlign: 'center' }}>Something went wrong. Reload the page.</p>}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
);
