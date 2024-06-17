import { createBrowserRouter } from "react-router-dom";
import Root from "./root";
import SignUp from "./signUp";
import Login from "./login";
import Home from "./home";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path:"/",
        element:<Home/>
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
    errorElement: <error />,
  },
]);

export default Route;
