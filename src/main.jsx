import React from 'react'
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, HashRouter } from 'react-router-dom';
import App from './App.jsx'

// styles
import './index.css'

// context
import { AppProvider } from './contexts/AppContext';

// store
import { store } from './store/index.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router> 
    <Provider store={store}>
      <AppProvider>
        <App />
      </AppProvider>
    </Provider>
  </Router>
 
)

/*
 - create action creator
 - create reducer
 - embed conbime reducer
*/
