import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TodoPage from './TodoPage'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import './index.css'
// import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TodoPage />
  </StrictMode>,
)
