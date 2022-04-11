import { Outlet } from "react-router"
import { Route, Routes } from "react-router-dom";
import "./styles/index.scss"

import Layout from "./pages/Layout";

import Resume from "./pages/resume/Resume";
import Markdown from "./pages/resume/Markdown";
import Pdf from "./pages/resume/Pdf";
import ResumeTemplate from "./pages/resume/Template";
import Dashboard from "./pages/Dashboard";

export default function App () {
    return (
        <div className="App">
            <Routes>
                <Route index element={<Dashboard />} />
                <Route path='/' element={<Layout />} >
                    <Route path='resume' element={<Resume />}>
                        <Route path='md' element={<Markdown />} />
                        <Route path="pdf" element={<Pdf />} />
                        <Route path="template" element={<ResumeTemplate />} />
                    </Route>
                </Route>
            </Routes>
            <Outlet />
        </div>
    )
}
