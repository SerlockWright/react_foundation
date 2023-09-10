import React from 'react'
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// styles
import './index.css'

// context
import { AppProvider } from './contexts/AppContext';

// store
import { store } from './store/index.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <AppProvider>
      <App />
    </AppProvider>
  </Provider>
)

/*
 - create action creator
 - create reducer
 - embed conbime reducer
*/
