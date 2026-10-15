import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

// Styles are intentionally ordered: mobile fixes must be the final layer.
import './styles.css'
import './premium-motion.css'
import './smooth-polish.css'
import './interaction-fixes.css'
import './waik-7.css'
import './waik-9.css'
import './community.css'
import './motion-16.css'
import './waik-17.css'
import './waik-18.css'
import './mobile-performance.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode><App /></React.StrictMode>
)
