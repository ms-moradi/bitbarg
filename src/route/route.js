import { createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter([
    {
        path:"/",
        element: "",
        children: [
            {
                index: true,
                element: '',
            },
            {
                path:"",
                element:"",
            },
        ]
    }
])

export default router;