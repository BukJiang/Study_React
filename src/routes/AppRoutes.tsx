import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

const AppRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
        errorElement: <NotFound/>,
        children: [
            {
                path: "/home",
                element: <Home/>,
            }
        ]
    },
]);

export default AppRoutes;