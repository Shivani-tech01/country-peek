import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// React Router
import { BrowserRouter } from 'react-router-dom'

// Context Providers
import { ThemeProvider } from './context/ThemeContext'
import { FavouritesProvider } from './context/FavouritesContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <FavouritesProvider>
          <App />
        </FavouritesProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
)