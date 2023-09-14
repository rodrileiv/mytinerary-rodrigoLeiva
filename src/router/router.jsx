import {createBrowserRouter} from 'react-router-dom'
import Home from '../pages/Home.jsx'
import MainLayout from "../layouts/MainLayout";
import Cities from '../pages/Cities.jsx'
import CityDetail from '../pages/CityDetail.jsx'
import SignIn from '../pages/SignIn.jsx';
import SignUp from '../pages/SignUp.jsx';
import ProtectedRoute from './ProtectedRoute.jsx';


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/cities',
                element: <Cities/>
            },
            {
                path: '/signin',
                element: (<ProtectedRoute path='/'>
                            <SignIn />
                        </ProtectedRoute>)
            },
            {
                path: '/signup',
                element: (<ProtectedRoute path='/'>
                            <SignUp />
                        </ProtectedRoute>)
            },
            {
                path: '/cities/:_id',
                element: <CityDetail/>
            },
            {
                path: '*',
                element: <h1 className="text-3xl">Not Found Page</h1>
            },
        ],
    },
]);

export default router;