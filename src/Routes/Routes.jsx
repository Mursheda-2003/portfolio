
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Project from "../Pages/Project/Project";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children: [
            {
                path:"/",
                element:<Home></Home>,
            },
            {
                path:"/",
                element:<Project></Project>,
            },
            
        ]

    }
])

export default router;