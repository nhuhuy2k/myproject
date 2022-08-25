import Header from "../../header/Header";
import SideBar from "../../sideBar/SideBar";
import classNames from "classnames/bind";

const cx = classNames.bind()
export function DefaultLayout({ children }){
    return (
        <>
            <Header />
        <div className={cx("flex mt-16")}>
          <SideBar classes="hidden" />
          <div className={cx("flex-1 bg-[#F5F7FF] pt-7 min-h-[100vh]")}>
            {children}
          </div>
        </div>
        </>
    )
}