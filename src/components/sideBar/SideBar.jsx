import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBorderAll, faPlus, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
const cx = classNames.bind();


const listPage = [
  {
    icon: faBorderAll,
    title: "Dashboard",
    path: '/dashboard'
  },
  {
    icon: faPlus,
    title: "Add product",
    path: '/dashboard/addproduct'
  },
  {
    icon: faUser,
    title: "Accounts",
    path: '/dashboard/accounts'
  }
  
];
function SideBar(props) {
  const location = useLocation()
  const {classes, onClick } = props
  return (
      <div className={cx('  mobile:min-w-[240px] pt-7 mobile:block', classes)}>
        {listPage.map((item, Index) => {
          return (
            <Link
              onClick={onClick}
              key={Index}
              to={item.path}
              className={cx(
                "py-2 px-3 w-3/4 flex items-center mx-auto mb-1 cursor-pointer rounded hover:bg-blue", `${location.pathname === item.path ? 'bg-blue' : ''}`
              )}
            >
              <FontAwesomeIcon
                icon={item.icon}
                className={cx("mr-3 p-b-0 text-xl text-black")}
              />
              <h2 className={cx('mb-0 text-lg font-semibold')}>{item.title}</h2>
            </Link>
          );
        })}
      </div>
  );
}

export default SideBar;
