import { Outlet } from "react-router"
import { Route, Routes } from "react-router-dom";
import "./styles/index.scss"

import Layout from "./pages/Layout";
import Dashboard from "./pages/Dashboard";
import Resume from "./pages/resume/Resume";
import FormatConversion from "./pages/format/FormatConversion";

export default function App () {
    return (
        <div className="App">
            <Routes>
                <Route index element={<Dashboard />} />
                <Route path='/' element={<Layout />} >
                    <Route path='/resume' element={<Resume />} />
                    <Route path='/format' element={<FormatConversion />} />
                </Route>
            </Routes>
            <Outlet />
        </div>
    )
}
