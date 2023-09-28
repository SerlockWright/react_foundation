/* eslint-disable react/prop-types */
import React from 'react'
import { ErrorBoundary } from "react-error-boundary";

function ErrorBoundaryWrapper({ children }) {
  const [boundaryKey, setBoundaryKey] = React.useState(0);

  const memorizedSyncLog = React.useCallback(async (message, componentStack) => {
    const params = {
      level: 'ERROR',
      datetime: new Date().toUTCString(),
      os: 'Window',
      description: 'platform.description',
      userId: 1,
      error: JSON.stringify(message),
      componentStack: JSON.stringify(componentStack),
      location: window.location.href,
      version: '1.0.0',
    };
    // call api
    localStorage.setItem('errorLog', JSON.stringify(params));
  }, []);

  React.useEffect(() => {
    async function sendLogWhenOnline() {
      const getLogFromStorage = localStorage.getItem('errorLog');
      if (getLogFromStorage) {
        memorizedSyncLog();
      }
    }
    if(navigator.onLine) {
      sendLogWhenOnline();
    }
  }, [memorizedSyncLog])

  React.useEffect(() => {
    window.onerror = async (message, _, __, ___, errorObj) => {
      memorizedSyncLog(message, errorObj?.stack);
    };

    return () => {
      window.onerror = null;
    };
  }, [memorizedSyncLog]);

  function ErrorFallbackUI() {
    return (
      <div>Something went wrong ...</div>
    );
  }

  return (
    <ErrorBoundary
      resetKeys={[boundaryKey]}
      FallbackComponent={ErrorFallbackUI}
      onReset={() => setBoundaryKey((prev) => prev + 1)}
    >
      {children}
    </ErrorBoundary>
  )
}

export default ErrorBoundaryWrapper