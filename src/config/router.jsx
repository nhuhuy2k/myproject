// import { Routes, Route } from "react-router-dom";
import DashBoard from "../pages/dashboard/Dashboard"
import AddProduct from "../pages/add_product/AddProduct";
import Accounts from "../pages/accounts/Accounts"

export const publicRoutes = [
  
];

export const privateRoutes = [
  { path: "/", component: DashBoard },
  { path: "/addproduct", component: AddProduct },
  { path: "/accounts", component: Accounts },
]

