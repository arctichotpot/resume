import {Outlet} from "react-router"
import {Route, Routes} from "react-router-dom";
import "./styles/normalize.scss"

import Resume from "./pages/Resume";
import Markdown from "./pages/Markdown";
import Pdf from "./pages/Pdf";
import Dashboard from "./pages/Dashboard";

export default function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Dashboard/>}/>
                <Route path='/resume' element={<Resume/>}>
                    <Route path='md' element={<Markdown/>}/>
                    <Route path="pdf" element={<Pdf/>}/>
                </Route>
            </Routes>
            <Outlet/>
        </div>
    )
}
