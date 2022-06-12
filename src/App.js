import Header from "./components/header/Header";
import SideBar from "./components/sideBar/SideBar";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesConfig from "./config/router";
import classNames from "classnames/bind";
// import Login from "./pages/login/Login";

const cx = classNames.bind();

function App() {
  return (
    // <Login />
    <Router>
      <Header />
      <div className={cx("flex mt-16")}>
        <SideBar />
        <div className={cx("flex-1 bg-[#F5F7FF] pt-5 min-h-[100vh]")}>
          <RoutesConfig />
        </div>
      </div>
    </Router>
  );
}

export default App;
