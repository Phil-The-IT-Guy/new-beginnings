import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

/*
Entry point for the React application.
- We import the App component (the single-page site) and the main stylesheet.
- createRoot is the modern React 18+ API for rendering.
*/

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
