import Home from "./pages/Home";
import Directors from "./pages/Directors";
import Actors from "./pages/Actors";
import Movie from "./pages/Movie";
import ErrorPage from "./pages/ErrorPage";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";

const routes = [
    {
        element: (
            <div>
                <NavBar />
                <Outlet />
            </div>
        ),
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/directors",
                element: <Directors />,
            },
            {
                path: "/actors",
                element: <Actors />,
            },
            {
                path: "/movie/:id",
                element: <Movie />,
            }
        ]
    }
];

export default routes;