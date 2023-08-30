import { createBrowserRouter } from "react-router-dom";
import AdminHome from "./page/Admin/AdminHome";
import AdminReport from "./page/Admin/AdminReport";
import BrandAdmin from "./page/Admin/Brand";
import CustomerAdmin from "./page/Admin/Customer";
import LoginAdmin from "./page/Admin/Login";
import OrderAdmin from "./page/Admin/Order";
import OrderDetal from "./page/Admin/Order/OrderDetail";
import ProductAdmin from "./page/Admin/Product";
import Home from "./page/User/Home";
import Login from "./page/User/Login";
import Registration from "./page/User/Registration/Registration";
import RegistrationConfirm from "./page/User/Registration/RegistrationConfirm";
import DetailProduct from "./page/User/DetailProduct";
import SearchPage from "./page/User/Search/SearchPage";
import CartPage from "./page/User/Cart/CartPage";
import MyAccount from "./page/User/MyAccount";

const admin = [
  {
    path: "/admin",
    element: <AdminHome />
  },
  {
    path: "/admin/brands",
    element: <BrandAdmin />
  },
  {
    path: "/admin/customer",
    element: <CustomerAdmin />
  },
  {
    path: "/admin/order",
    element: <OrderAdmin />
  },
  {
    path: "/admin/product",
    element: <ProductAdmin />
  },
  {
    path: "/admin/login",
    element: <LoginAdmin />
  },
  {
    path: "/admin/order/detail",
    element: <OrderDetal />
  }
]

const user = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/registration",
    element: <Registration />
  },
  {
    path: "/registrationConfirm",
    element: <RegistrationConfirm />
  },
  {
    path: "/product",
    element: <DetailProduct />
  },
  {
    path: "/search",
    element: <SearchPage />
  },
  {
    path: "about",
    element: <div>About</div>,
  },
  {
    path: "/cart",
    element: <CartPage />
  },
  {
    path: "/admin",
    element: <AdminHome />
  },
  {
    path: "/admin/report",
    element: <AdminReport />
  },
  {
    path: "/my-account",
    element: <MyAccount />
  }
]

export const router = createBrowserRouter([
  ...user,
  ...admin
]);