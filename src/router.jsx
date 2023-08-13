import { createBrowserRouter } from "react-router-dom";

import MainLayout from "./layouts/MainLayout.jsx";
import NotFound from "./pages/NotFound.jsx";
import Home from "./pages/Home.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "*",
                element: <NotFound />,
            },
            {
                path: "/",
                element: <Home />,
            },
        ],
    },
]);

export default router;
