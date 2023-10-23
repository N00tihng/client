import { createBrowserRouter } from "react-router-dom";
import Auth from "../pages/Auth";
import Categories, {
    categoriesActions,
    categoryLoader,
} from "../pages/Categories";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Layout from "../pages/Layout";
import Transactions from "../pages/Transactions";
import ProtectedRoute from "../components/ProtectedRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "transactions",
                element: (
                    <ProtectedRoute>
                        <Transactions />
                    </ProtectedRoute>
                ),
            },
            {
                path: "categories",
                action: categoriesActions,
                loader: categoryLoader,
                element: (
                    <ProtectedRoute>
                        <Categories />
                    </ProtectedRoute>
                ),
            },
            {
                path: "auth",
                element: <Auth />,
            },
        ],
    },
]);
