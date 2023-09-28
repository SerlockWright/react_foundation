import React from 'react'
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx'

// styles
import './index.css'

// context
import { AppProvider } from './contexts/AppContext';

// store
import { store } from './store/index.js';

import ErrorBoundaryWrapper from './components/ErrorBoundary.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router> 
    <Provider store={store}>
      <AppProvider>
        <ErrorBoundaryWrapper>
          <App />
        </ErrorBoundaryWrapper>
      </AppProvider>
    </Provider>
  </Router>
 
)

/*
 - create action creator
 - create reducer
 - embed conbime reducer
*/
