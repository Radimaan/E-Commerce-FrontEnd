import { createBrowserRouter, Outlet } from "react-router-dom";
import Header from "../components/utils/Header";
import Footer from "../components/utils/Footer";
import Home from "../pages/home/Home";
import { LoginPage } from "../pages/auth/Login";

const Router =()=>{
  return(

  <div>
    <div>
      {" "}
      <Header/>{" "}</div>
    <Outlet />
    <div><Footer/></div>
  </div>
  )
}
export default Router;

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Router />,
    children: [
      { index: true,
        element: <Home />
      },
      {
        path: "/login",
        element: <LoginPage />
      }
      
      
    ]
  }
])