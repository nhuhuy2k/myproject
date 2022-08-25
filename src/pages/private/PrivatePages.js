import { DefaultLayout } from "../../components/layout/DefaultLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { privateRoutes } from "../../config/router";

function PrivatePages() {
  return (
    <Routes>
      {privateRoutes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            element={
              <DefaultLayout>
                <route.component />
              </DefaultLayout>
            }
          ></Route>
        );
      })}
    </Routes>
  );
}

export default PrivatePages;
