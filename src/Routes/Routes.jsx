import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Home from "../Pages/Home.jsx";
import Login from "../Pages/Login.jsx";
import Register from "../Pages/Register.jsx";
import AllFoodsPage from "../Pages/AllFoodsPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/allFoods",
        element: <AllFoodsPage></AllFoodsPage>,
        loader: ()=> fetch(`http://localhost:5000/allFoods`)
      },
      {
        path: "/gallery",
        element: <h1>Gallery</h1>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;