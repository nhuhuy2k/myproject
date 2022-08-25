import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCircleExclamation,
  faGear,
  faUser,
  faArrowRightFromBracket,
  faAlignJustify,
  faPenSquare,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import images from "../../asset/images/images";
import SideBar from "../sideBar/SideBar";
import { useRef, useState } from "react";
import Button from "../button/Button";
import { Drawer, message, Modal } from "antd";
import { Link, useNavigate } from "react-router-dom";
import FormProduct from "../../pages/formproduct/FormProduct";
import { deleteProduct } from "../../api/product";
import "./header_style.css";
import { useContext } from "react";
import { Context } from "../../App";
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
  const searchInput = useRef();
  const [visible, setVisible] = useState(false);
  const [resultSearch, setResultSearch] = useState([]);
  const [showResultSeacrh, setShowResultSeacrh] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showModalResult, setShowModalResult] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState(
    "Are you sure you want to delete the product?"
  );
  const {updateData, setUpdateData, data, logOut} = useContext(Context)
  const navigate = useNavigate()
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  const showModal = () => {
    setShowModalResult(!showModalResult);
  };
  const handleOk = () => {
    setModalText("Deleting...");
    setConfirmLoading(true);
    setTimeout(() => {
      deleteProduct(resultSearch[0]._id);
      setShowModalResult(!showModalResult);
      setConfirmLoading(false);
      setUpdateData(!updateData)
    }, 1000);
  };

  const handleSearchClick = () => {
    if (searchInput.current.value !== "") {
      const result = data.filter((item) => {
        return item.nameP === searchInput.current.value;
      });
      if (result.length >= 1) {
        setResultSearch(result);
      } else {
        message.config({ top: 50, maxCount: 1, duration: 1 });
        message.error("Not found product!!!");
        setResultSearch(result);
      }
    }
  };
  const handleSearch = (event) => {
    if (event.key === "Enter") {
      if (searchInput.current.value !== "") {
        const result = data.filter((item) => {
          return item.nameP === searchInput.current.value;
        });

        if (result.length >= 1) {
          setShowResultSeacrh(true);
          setResultSearch(result);
        } else {
          message.config({ top: 50, maxCount: 1, duration: 1 });
          message.error("Not found product!!!");
          setShowResultSeacrh(false);
        }
      }
    }
  };

  const handleLogOut = () =>{
    navigate('/login')
    logOut()
  }

  return (
    <header
      className={cx(
        "flex fixed top-0 right-0 left-0 z-50 bg-white h-16 shadow-xl items-center justify-between px-4 sm:px-8  min-w-[375px] "
      )}
    >
      <Link to="/dashboard">
        <img
          className={cx("w-36 cursor-pointer")}
          src="https://bootstrapdash.com/demo/skydash-free/template/images/logo.svg"
          alt="Logo"
        />
      </Link>

      <div className={cx("hidden items-center sm:flex ")}>
        <FontAwesomeIcon
          onClick={() => handleSearchClick()}
          className={cx("text-xl opacity-40 mr-2 cursor-pointer")}
          icon={faMagnifyingGlass}
        ></FontAwesomeIcon>
        <input
          ref={searchInput}
          onKeyUp={(e) => handleSearch(e)}
          placeholder="Search..."
          className={cx("outline-none border-0 pl-2 py-2")}
        ></input>
      </div>
      <div className={cx("flex items-center ")}>
        <div className="relative" onClick={() => setModalBell(!modalBell)}>
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
            onClick={() => setModalAvatar(!modalAvatar)}
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
                    onClick={() => Index === 1 ? handleLogOut() : ""}
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
          icon={faAlignJustify}
          onClick={() => {
            showDrawer();
          }}
          className={cx(
            "text-2xl mr-4 opacity-70 cursor-pointer mobile:hidden"
          )}
        />
      </div>
      <Drawer
        title="Menu"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
        width="260"
      >
        <SideBar onClick={() => onClose()} />
      </Drawer>
      {showResultSeacrh && (
        <div
          className={cx(
            "bg-[#6699FF] font-bold w-52 top-[73px] right-1/2 translate-x-[65%] py-2 pr-2 pl-3 rounded-md fixed"
          )}
        >
          <button
            onClick={() => setShowResultSeacrh(false)}
            className={cx(
              "absolute top-[-6px] right-[-6px] px-[10px] py-[4px] bg-[#FF6633] text-white rounded-full font-bold"
            )}
          >
            X
          </button>
          <div className={cx("border-b-2 border-b-black pb-2")}>
            <span className={cx("mr-2")}>Name:</span> {resultSearch[0].nameP}
          </div>
          <div className={cx("border-b-2 border-b-black py-2")}>
            <span className={cx("mr-2")}>Price:</span> {resultSearch[0].price}$
          </div>
          <div className={cx("border-b-2 border-b-black py-2")}>
            <span className={cx("mr-2")}>Quantity:</span>{" "}
            {resultSearch[0].quantity}
          </div>
          <div className={cx("border-b-2 border-b-black py-2")}>
            <span className={cx("mr-2")}>Description:</span>{" "}
            {resultSearch[0].description}
          </div>
          <div className={cx("border-b-2 border-b-black py-2 mb-2")}>
            <span className={cx("mr-2")}>Date:</span>
            {resultSearch[0].entryDate}
          </div>
          <div className={cx(" flex justify-around py-1")}>
            <FontAwesomeIcon
              onClick={() => {
                setShowEdit(!showEdit);
              }}
              className={cx("cursor-pointer text-2xl text-[#FFCC00]")}
              icon={faPenSquare}
            />
            <FontAwesomeIcon
              onClick={() => {
                showModal();
              }}
              className={cx("cursor-pointer text-2xl text-red")}
              icon={faTrashCan}
            />
          </div>
        </div>
      )}
      {showEdit && (
        <FormProduct
          item={resultSearch[0]}
          reload={updateData}
          setReload={setUpdateData}
          setShowEdit={setShowEdit}
          showEdit={showEdit}
          setShowResultSeacrh={setShowResultSeacrh}
        />
      )}
      <Modal
        title="Delete product!"
        visible={showModalResult}
        onOk={handleOk}
        okText="Confirm"
        confirmLoading={confirmLoading}
        onCancel={showModal}
      >
        <p>{modalText}</p>
      </Modal>
    </header>
  );
}

export default Header;
