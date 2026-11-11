import { Box, Container, Toolbar } from "@mui/material"
import NavigationBar from "./components/NavigationBar"
import RecruitmentSection from "./components/RecruitmentSection"
function App() {

  return (
    <>
      <Container sx={{
        maxWidth: "100%",
        minHeight: "100dvh",
      }}>
        <Box>
          <NavigationBar />
          <Toolbar sx={{ minHeight: { xs: 64, md: 80 } }} />
        </Box>
        <div className="body">
          <RecruitmentSection />

        </div>
      </Container>
    </>
  )
}

export default App
