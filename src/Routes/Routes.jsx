import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Home/Login/Login";
import Register from "../Pages/Home/Register/Register";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import CreateAssignment from "../Pages/Home/CreateAssignment/CreateAssignment";
import Assignment from "../Pages/Home/Assignment/Assignment";
import AssignmentDetails from "../Pages/Home/AssignmentDetails/AssignmentDetails";
import UpdateAssignment from "../Pages/Home/UpdateAssignment/UpdateAssignment";
import PendingAssignment from "../Pages/Home/PendingAssignment/PendingAssignment";
import GiveMarkContainer from "../Pages/Home/GiveMarkContainer/GiveMarkContainer";
import PrivetRoute from "../route/PrivetRoute";
import MySubmission from "../Pages/Home/MySubmission/MySubmission";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,

      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/assignment',
        element: <Assignment></Assignment>,
        loader: () => fetch('https://study-mate-server-plum.vercel.app/assignment')
      },
      {
        path: '/assignmentDetails/:id',
        element: <PrivetRoute><AssignmentDetails></AssignmentDetails></PrivetRoute>,
        loader: ({ params }) => fetch(`https://study-mate-server-plum.vercel.app/assignment/${params.id}`)
      },
      {
        path: '/updateAssignment/:id',
        element: <PrivetRoute><UpdateAssignment></UpdateAssignment></PrivetRoute>,
        loader: ({ params }) => fetch(`https://study-mate-server-plum.vercel.app/assignment/${params.id}`)
      },
      {
        path: '/create',
        element: <PrivetRoute><CreateAssignment></CreateAssignment></PrivetRoute>,
      },
      {
        path: '/pending',
        element: <PrivetRoute><PendingAssignment></PendingAssignment></PrivetRoute>,
        loader: () => fetch('https://study-mate-server-plum.vercel.app/submitted',{credentials:"include"})
      },
      {
        path: '/giveMark/:id',
        element:<GiveMarkContainer></GiveMarkContainer>,
        loader: ({ params }) => fetch(`https://study-mate-server-plum.vercel.app/submitted/${params.id}`)
      },
      {
        path: '/mySubmission',
        element: <PrivetRoute><MySubmission></MySubmission></PrivetRoute>,
        loader:()=>fetch('https://study-mate-server-plum.vercel.app/submitted')
      },
    ]
  },
]);

export default router;