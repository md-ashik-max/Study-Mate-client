import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Home/Login/Login";
import Register from "../Pages/Home/Register/Register";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import CreateAssignment from "../Pages/Home/CreateAssignment/CreateAssignment";
import Assignment from "../Pages/Home/Assignment/Assignment";




const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>,

        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/assignment',
            element:<Assignment></Assignment>,
            loader:()=>fetch('http://localhost:5000/assignment')
        },
        {
          path:'/create',
          element:<CreateAssignment></CreateAssignment>
        }
      ]
    },
  ]);

  export default router;