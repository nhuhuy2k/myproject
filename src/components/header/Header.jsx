import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsis,
  faMagnifyingGlass,
  faCircleExclamation,
  faGear,
  faUser,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import images from "../../asset/images/images";
import { useRef, useState } from "react";
import Button from "../button/Button";
import { Link } from "react-router-dom";
// import Modal from "../modal/Modal";

const cx = classNames.bind();

const listPage = [
  [
    {
      icon: faCircleExclamation,
      title: "Application Error",
      note: "just now",
      colorIcon: "text-green",
    },
    {
      icon: faGear,
      title: "Settings",
      note: "private message",
      colorIcon: "text-yellow",
    },
    {
      icon: faUser,
      title: "New user registration",
      note: "2 days ago",
      colorIcon: "text-blue",
    },
  ],
  [
    {
      icon: faGear,
      title: "Settings",
    },
    {
      icon: faArrowRightFromBracket,
      title: "Logout",
    },
  ],
];

function Header() {
  const [modalBell, setModalBell] = useState(false);
  const [modalAvatar, setModalAvatar] = useState(false);

  const searhFocus = useRef();
  const handleInput = () => {
    searhFocus.current.focus();
  };
  const handleNotifications = () => {
    setModalBell(!modalBell);
  };
  const handleAvatar = () => {
    setModalAvatar(!modalAvatar);
  };
  return (
    <header
      className={cx(
        "flex fixed top-0 right-0 left-0 z-50 bg-white h-16 shadow-xl items-center justify-between px-4 sm:px-8  min-w-[375px] "
      )}
    >
      <Link to="/">
        <img
          className={cx("w-36 cursor-pointer")}
          src="https://bootstrapdash.com/demo/skydash-free/template/images/logo.svg"
          alt="Logo"
        />
      </Link>
      <div onClick={handleInput} className={cx("hidden items-center sm:flex ")}>
        <FontAwesomeIcon
          className={cx("text-xl opacity-40 mr-2 cursor-pointer")}
          icon={faMagnifyingGlass}
        ></FontAwesomeIcon>
        <input
          ref={searhFocus}
          placeholder="Search..."
          className={cx("outline-none border-0 pl-2 py-2")}
        ></input>
      </div>
      <div className={cx("flex items-center ")}>
        <div className="relative" onClick={handleNotifications}>
          <FontAwesomeIcon
            className={cx("text-2xl opacity-80 cursor-pointer")}
            icon={faBell}
          />
          <span
            className={cx(
              "bg-[#4B49AC] w-[11px] h-[11px] absolute top-[-4px] right-[-1px] rounded-full"
            )}
          ></span>
          {modalBell && (
            <div
              className={cx(
                "absolute w-[250px] py-2 rounded shadow-3xl bg-white right-0 top-14"
              )}
            >
              <h3 className={cx("mb-2 pl-3 border-b-2 border-gray")}>
                Notifications
              </h3>
              {listPage[0].map((item, Index) => {
                return (
                  <div
                    key={Index}
                    className="flex items-center py-2 pl-3 cursor-pointer  hover:bg-gray "
                  >
                    <FontAwesomeIcon
                      icon={item.icon}
                      className={cx("text-3xl mr-2", item.colorIcon)}
                    />
                    <div className={cx("")}>
                      <h2 className={cx("")}>{item.title}</h2>
                      <h3 className={cx("opacity-60 text-sm")}>{item.note}</h3>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <Button classes="relative">
          <img
            onClick={handleAvatar}
            src={images.avatar}
            alt="Avatar"
            className={cx("rounded-full w-10 h-10 mx-3 cursor-pointer")}
          />
          {modalAvatar && (
            <div
              className={cx(
                "absolute w-[160px] rounded shadow-3xl py-2 bg-white right-[10px] top-14"
              )}
            >
              {listPage[1].map((item, Index) => {
                return (
                  <div
                    key={Index}
                    className={cx(
                      "flex items-center py-3 pl-7 cursor-pointer hover:bg-gray"
                    )}
                  >
                    <FontAwesomeIcon
                      icon={item.icon}
                      className={cx("text-xl mr-2 text-[#4B49AC]")}
                    />
                    <h2>{item.title}</h2>
                  </div>
                );
              })}
            </div>
          )}
        </Button>
        <FontAwesomeIcon
          className={cx("text-xl opacity-80 mr-2 cursor-pointer")}
          icon={faEllipsis}
        />
      </div>
    </header>
  );
}

export default Header;
