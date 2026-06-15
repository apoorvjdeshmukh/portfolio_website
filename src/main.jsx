import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import ReactGA from 'react-ga4'
import App from './App.jsx'
import './index.css'

ReactGA.initialize('G-XXXXXXXXXX') // Replace with your GA4 Measurement ID

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
