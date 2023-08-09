import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home'
import MainLayout from "../layouts/MainLayout";
import Cities from "../pages/Cities";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '*',
                element: <h1 className="text-3xl">Not Found Page</h1>
            },
            {
                path: '/',
                element: <Cities />
            }
        ]
    }
]);

export default router;