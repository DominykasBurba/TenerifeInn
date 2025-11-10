import 'bootstrap/dist/css/bootstrap.min.css'; 
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Main from './pages/MainPage.tsx'
import './styles/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Main />
  </StrictMode>,
)
