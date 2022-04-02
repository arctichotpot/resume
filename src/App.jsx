import { Outlet, useRoutes } from "react-router"
import { routes } from "./router"

export default function App () {
    const element = useRoutes(routes)
    return (
        <div className="App">
            {element}
            <Outlet />
        </div>
    )
}
