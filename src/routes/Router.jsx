
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import LoginLayout from "../layout/LoginLayout";
import RecipeLayout from "../layout/RecipeLayout";
import ChefRecipes from "../pages/ChefRecipes/Recipes/ChefRecipes";
import Login from "../pages/Login/Login";
import SingUp from "../pages/Singup/SingUp";
import PrivateRoute from "./PrivateRoute";
import Error from "../sheart/Error/Error";
import Blogs from "../pages/Blogs/Blogs";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://indian-chef-apurbomondal85.vercel.app/chefRecipe')
            },
            {
                path: 'blogs',
                element: <Blogs></Blogs>
            }
        ]
    },
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'singup',
                element: <SingUp></SingUp>
            }
        ]
    },
    {
        path: '/',
        element: <RecipeLayout></RecipeLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: 'chef-recipe/:id',
                element: <PrivateRoute><ChefRecipes></ChefRecipes></PrivateRoute>,
                loader: ({params}) => fetch(`https://indian-chef-apurbomondal85.vercel.app/chefRecipe/${params.id}`)
            }
        ]
    }
]);