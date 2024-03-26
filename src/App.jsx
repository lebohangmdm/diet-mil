import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import AppLayout from "./Components/AppLayout";
import Recipes from "./Components/Recipes";
import About from "./Components/About";
import Bookmarks from "./Components/Bookmarks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Recipes />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "bookmarks",
        element: <Bookmarks />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
