import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// styles
import './index.css'

import { AppProvider } from './contexts/AppContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppProvider>
    <App />
  </AppProvider>
)
