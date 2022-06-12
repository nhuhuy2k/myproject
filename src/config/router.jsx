import { Routes, Route } from "react-router-dom";
import DashBoard from "../pages/dashboard/Dashboard"
import AddProduct from "../pages/add_product/AddProduct";
import EditProduct from "../pages/edit_product/EditProduct";

const publicRoutes = [
  { path: "/", compoment: DashBoard },
  { path: "/addproduct", compoment: AddProduct },
  { path: "/editproduct", compoment: EditProduct },
];

const RoutesConfig = () => {
  return (
    <Routes>
      {publicRoutes.map((route, index) => {
        return (
          <Route key={index} path={route.path} element={<route.compoment />} />
        );
      })}
    </Routes>
  );
};
export default RoutesConfig;