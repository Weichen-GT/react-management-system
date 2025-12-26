import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../pages/home/Home";
import MainPage from "../pages/MainPage";
import Mall from "../pages/mall/Mall";
import PageOne from "../pages/other/Pageone";
import PageTwo from "../pages/other/Pagetwo";
import User from "../pages/user/User";



const routes = [
    {
        path: '/',
        Component: MainPage,
        children: [
            {
                path: '/',
                element: <Navigate to="home" replace />
            }, {
                path: 'home',
                Component: Home
            },
            {
                path: 'mall',
                Component: Mall
            },
            {
                path: 'user',
                Component: User
            },
            {
                path: 'other',
                children: [
                    {
                        path: 'pageone',
                        Component: PageOne
                    },
                    {
                        path: 'pagetwo',
                        Component: PageTwo
                    }
                ]
            }]
    }
]

export default createBrowserRouter(routes)