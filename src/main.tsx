import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import  { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material'
const theme = createTheme({
  typography:{
    fontFamily: "Extenda, sans-serif, ID-Grotesk, sans-serif, Inter, sans-serif",

  }
})
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </StrictMode>,
)
