import { Outlet } from "react-router"
import { Route, Routes } from "react-router-dom";
import "./styles/index.scss"
import { resumeState } from "./store/store";
import { useRecoilState } from "recoil";

import Dashboard from "./pages/Dashboard";
import Resume from "./pages/resume/Resume";

export default function App () {
    const [content, setContent] = useRecoilState(resumeState)

    const md = localStorage.getItem('content')

    if (md) { setContent(md) }

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
