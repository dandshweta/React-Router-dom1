import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import "./index.css";
// import { Syntax } from "./Syntax";
// import { State1 } from "./State1";
// import StatePractice from "./StatePractice";
// import WithoutUseState from "./useState/WithoutUseState";
// import UsingUseState from "./useState/UsingUseState";
// import UseEffect from "./useEffect/UseEffect";
// import UseEffect1 from "./useEffect/UseEffect1";
// import UseEffect2 from "./useEffect/useEffect2";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import AboutUs from "./AboutUs";
// import ContactUs from "./ContactUs";
// import HomePage from "./route/HomePage";
// import MyProducts from "./productid/MyProducts";
// import ProductDetails from "./productid/ProductDetails";
// import ProductInfo from "./productidFind/ProductInfo";
// import ProductList from "./productidFind/ProductList";
// import Product from "./queryParameters/Product";
// import ProductInfoDetail from "./queryParameters/ProductInfoDetail";
// import QueryParams from "./queryparam1/QueryParam";

// import { ProductFetch } from "./PreventUnnessaryApi/ProductFetch";
// import WithoutUseRef from "./useref/WithoutUseRef";
// import WithUseRef from "./useref/WithUseRef";
// import WithUserefLoginForm from "./loginForm/WithUserefLoginForm";
// import OtpCreate from "./create/OtpCreate";
// import OTPdisplay from "./create/OTPdisplay";
import Otp from "./otp-task/Otp";
// const router = createBrowserRouter([
// {
//   path: "/aboutus",
//   element: <AboutUs />,
// },
// {
//   path: "/contactus",
//   element: <ContactUs />,
// },
// {
//   path: "/homepage",
//   element: <HomePage />,
// },
// {
//   path: "/",
//   element: <MyProducts />,
// },
// {
//   path: "/product/:id",
//   element: <ProductDetails />,
// },
// {
//   path: "/",
//   element: <ProductInfo />,
// },
// {
//   path: "/product/:id",
//   element: <ProductList />,
// },
// {
//   path: "/",
//   element: <ProductInfoDetail />,
// },
// {
//   path: "/product/:itemid",
//   element: <Product />,
// },
// {
//   path: "/",
//   element: <QueryParams />,
// },
// {
//   path: "/",
//   element: <ProductFetch />,
// },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    {/* <App /> */}
    {/* <Syntax /> */}
    {/* <State1 /> */}
    {/* <StatePractice />
    <WithoutUseState />
    <UsingUseState />
    <UseEffect />
    <UseEffect1 />

    <UseEffect2 /> */}
    {/* <WithUseRef />
    <WithoutUseRef /> */}
    {/* <WithUserefLoginForm /> */}
    {/* <OtpCreate /> */}
    {/* <OTPdisplay /> */}
    <Otp />

    {/* <RouterProvider router={router} /> */}
  </>
);
