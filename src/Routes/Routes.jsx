import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Home from "../Pages/Home.jsx";
import Login from "../Pages/Login.jsx";
import Register from "../Pages/Register.jsx";
import AllFoodsPage from "../Pages/AllFoodsPage.jsx";
import SingleFoodPage from "../Pages/SingleFoodPage.jsx";
import axios from "axios";

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
      },
      {
        path: "/allFoods/:id",
        element: <SingleFoodPage></SingleFoodPage>,
        loader: async ({ params }) => {
          const response = await axios.get(`http://localhost:5000/allFoods/${params.id}`);
          return response.data; 
        },
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
