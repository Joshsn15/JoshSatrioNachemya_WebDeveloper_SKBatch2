import NavigationBar from "./components/NavigationBar"
import RecruitmentSection from "./components/RecruitmentSection"
function App() {

  return (
    <>
      <div className="Landing-Page-Wrapper">
        <div className="Content">
          <div className="Header">
            <NavigationBar />
          </div>
          <div className="Body"></div>
          
          <div className="body">
            <RecruitmentSection />
          </div>
          <div className="Next-Steps" id="next-steps">
            <div id="docs">
              <h2>Docs</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
