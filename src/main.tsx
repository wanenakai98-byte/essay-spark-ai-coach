import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ThemeProvider } from '@/hooks/useTheme';
import ErrorBoundary from '@/components/ErrorBoundary';

createRoot(document.getElementById("root")!).render(
  <ErrorBoundary>
    <ThemeProvider defaultTheme="system" storageKey="essay-spark-theme">
      <App />
    </ThemeProvider>
  </ErrorBoundary>
);
