import 'bootstrap/dist/css/bootstrap.min.css'; 
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './pages/MainPage.tsx'
import FormPage from './pages/FormPage.tsx'
import './styles/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/form" element={<FormPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
