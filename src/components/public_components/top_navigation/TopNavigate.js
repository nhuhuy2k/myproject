
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../../App";
import classNames from "classnames/bind";

const cx = classNames.bind()

function TopNavigation() {
    const {isLoggedIn} = useContext(Context)
    const navigate = useNavigate();
    const listTopNavigation = [
        {title: "Bản mobile"},
        {title: "Giới thiệu"},
        {title: "Sản phẩm đã xem"},
        {title: "Trung tâm bảo hành"},
        {title: "Hệ thống 102 siêu thị"},
        {title: "Tuyển dụng"},
        {title: "Dashboard",
        to: () => isLoggedIn ? navigate('/dashboard') : navigate('/login')},
        {title: `${isLoggedIn ? "Đăng xuất" : "Đăng nhập"}`,
        to: () => navigate('/login')},
      ]

    return (
        <>
            <div className={cx('bg-dark_green h-9')}>
        <div className={cx('h-full w-[1200px] text-white flex justify-end mx-auto items-center space-x-4')}>
          {listTopNavigation.map((item, index) => {
            return <button onClick={item.to} className={cx('hover:text-[#7fd6cb]')} key={index}>{item.title}</button>
          })}
        </div>
      </div>
        </>
    )
}

export default TopNavigation