import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppLayout from "./Components/AppLayout";
import Recipes, { loader as recipesLoader } from "./Components/Recipes";

import About from "./Components/About";
import Bookmarks from "./Components/Bookmarks";
import RecipeDetails, {
  loader as detailsLoader,
} from "./Components/RecipeDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
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
      },
      {
        path: "recipes/:id",
        element: <RecipeDetails />,
        loader: detailsLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
