import { Outlet } from "react-router"
import { Route, Routes } from "react-router-dom";
import "./styles/index.scss"

import Dashboard from "./pages/Dashboard";
import Resume from "./pages/resume/Resume";

export default function App () {
    return (
        <div className="App">
            <Routes>
                <Route index element={<Dashboard />} />
                <Route path='/resume' element={<Resume />} />
            </Routes>
            <Outlet />
        </div>
    )
}
