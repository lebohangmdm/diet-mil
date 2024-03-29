import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppLayout from "./Components/AppLayout";
import Recipes, { loader as recipesLoader } from "./Components/Recipes";

import About from "./Components/About";
import Bookmarks from "./Components/Bookmarks";
import RecipeDetails, {
  loader as detailsLoader,
} from "./Components/RecipeDetails";
import Error from "./Components/Error";
import Cuisine, { loader as cuisineLoader } from "./Components/Cuisine";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Recipes />,
        loader: recipesLoader,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "bookmarks",
        element: <Bookmarks />,
        errorElement: <Error />,
      },
      {
        path: "recipes/:id",
        element: <RecipeDetails />,
        loader: detailsLoader,
        errorElement: <Error />,
      },
      {
        path: "cuisine/:cuisine",
        element: <Cuisine />,
        loader: cuisineLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
