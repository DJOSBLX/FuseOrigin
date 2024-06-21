import Home from "./pages/home/Home"
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Users from "./pages/users/Users";
import Products from "./pages/products/Products";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Menu from "./components/menu/Menu";
import Login from "./pages/login/Login";
import "./styles/global.scss";
import TrxHistory from "./pages/trxHistory/TrxHistory";
import AffiliateListing from "./pages/affiliate/AffiliateListing";
import RefferalLink from "./pages/refferalLink/RefferalLink";
import Wallet from "./pages/wallet/Wallet";
import AffiliateSubscriptions from "./pages/affiliate/AffiliateSubscriptions";
import ComingSoon from "./pages/comingSoon/ComingSoon";

function App() {

  const Layout = () => {
    return (
      <div className="main">
      <Navbar/>
      <div className="container">
        <div className="menuContainer">
          <Menu/>
        </div>
        <div className="contentContainer">
          <Outlet/>
        </div>
      </div>
      <Footer/>
      </div>
    )

  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path:"/",
          element: <Home/>
        },
        {
          path:"/users",
          element: <Users/>
        },
        {
          path:"/products",
          element: <Products/>
        },
        {
          path:"/trxHistory",
          element: <TrxHistory/>
        },
        {
          path:"/affiliateListing",
          element: <AffiliateListing/>
        },
        {
          path:"/refferalLink",
          element: <RefferalLink/>
        },
        {
          path:"/wallet",
          element: <Wallet/>
        },
        {
          path:"/affiliateSubscriptions",
          element: <AffiliateSubscriptions/>
        },
        {
          path:"/comingSoon",
          element: <ComingSoon/>
        }

      ]
    },
    {
      path: "/login",
      element: <Login/>,
    }
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
