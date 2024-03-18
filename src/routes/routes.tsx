import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Control from "../pages/control/Control"
import Dashboard from "../pages/Dashboard/Dashboard"

export const routes = createBrowserRouter([
    {
        path: "/", element: <App />, children: [
            { path: "/", element: <Dashboard /> },
            { path: "/control", element: <Control /> }
        ]
    }
])