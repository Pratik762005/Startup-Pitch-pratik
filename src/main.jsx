import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { FirebaseProvider } from './context/firebase.jsx'

createRoot(document.getElementById('root')).render(
  
  <FirebaseProvider>
  <BrowserRouter>
    <App />
</BrowserRouter>
  </FirebaseProvider>

)