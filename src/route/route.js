import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/layout";
import Home from "../pages/home/home";
import CurrentPrice from "../pages/currentPrice/currentPrice";

const router = createBrowserRouter([
    {
        path:"/",
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Home/>,
            },
            {
                path:"/currentPrice",
                element: <CurrentPrice/>,
            },
        ]
    }
])

export default router;