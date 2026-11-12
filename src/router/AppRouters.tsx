import { Route, Routes } from "react-router";
import MainPage from "../pages/MainPage";
import { RecruitmentPage } from "../pages/RecruitmentPage";


function AppRouters() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/recruitment-section" element={<RecruitmentPage />} />
        </Routes>


    )
}

export default AppRouters