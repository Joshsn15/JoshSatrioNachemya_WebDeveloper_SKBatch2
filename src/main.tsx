import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
import { ThemeProvider } from '@emotion/react'
import { Box, Container, createTheme, Toolbar } from '@mui/material'
import AppRouters from './router/AppRouters.tsx'
import NavigationBar from './components/NavigationBar.tsx'
import { BrowserRouter } from 'react-router'
const theme = createTheme({
  typography: {
    // fontFamily: "Extenda, sans-serif, ID-Grotesk, sans-serif, Inter, sans-serif",

  }
})
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Container sx={{ maxWidth: "100%", minHeight: "100dvh", }}>
          <Box>
            <NavigationBar />
            <Toolbar sx={{ minHeight: { xs: 64, md: 80 } }} />
          </Box>
          
          <AppRouters />

        </Container>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)
