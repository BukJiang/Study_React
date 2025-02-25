import "./App.less";
import {RouterProvider} from "react-router-dom";
import AppRoutes from "./routes/AppRoutes.tsx";

function App() {

    return (
        <RouterProvider router={AppRoutes}/>
    )
}

export default App
