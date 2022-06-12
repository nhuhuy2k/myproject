import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBorderAll, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
const cx = classNames.bind();


const listPage = [
  {
    icon: faBorderAll,
    title: "Dashboard",
    path: '/'
  },
  {
    icon: faPlus,
    title: "Add product",
    path: '/addproduct'
  },
  
];
function SideBar() {
  const location = useLocation()

  return (
    <div className={cx("w-[240px] pt-5")}>
      <div className={cx('fixed z-40 w-[240px]')}>
        {listPage.map((item, Index) => {
          return (
            <Link
              key={Index}
              to={item.path}
              className={cx(
                "py-2 px-3 w-[200px] flex items-center mx-auto mb-1 cursor-pointer rounded hover:bg-blue", `${location.pathname === item.path ? 'bg-blue' : ''}`
              )}
            >
              <FontAwesomeIcon
                icon={item.icon}
                className={cx("mr-3 text-xl")}
              />
              <h2>{item.title}</h2>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default SideBar;
