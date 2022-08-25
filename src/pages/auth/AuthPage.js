import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../App";
import classNames from "classnames/bind";
import TopNavigation from "../../components/public_components/top_navigation/TopNavigate";
import "./home_style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faTruck,
  faCartShopping,
  faCaretLeft,
  faMobileScreen,
  faClock,
  faLaptop,
  faTv,
  faTabletScreenButton,
  faHeadphonesSimple,
  faHouseSignal,
  faKeyboard,
  faGamepad,
  faScrewdriverWrench,
  faSimCard,
  faRadio,
  faBolt,
} from "@fortawesome/free-solid-svg-icons";
import { Popover } from "antd";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { addImage } from "../../api/testImage";

const cx = classNames.bind();
const listManufacturer = [
  { title: "Apple" },
  { title: "OPPO" },
  { title: "Vivo" },
  { title: "SAMSUNG" },
  { title: "Xiaomi" },
  { title: "Nokia" },
  { title: "Realme" },
  { title: "Energizer" },
  { title: "Masstel" },
  { title: "XOR" },
  { title: "Blackberry" },
  { title: "Philips" },
  { title: "Itel" },
  { title: "TECNO" },
  { title: "BPhone" },
];
const listWatch = [
  { title: "Apple" },
  { title: "SAMSUNG" },
  { title: "Xiaomi" },
  { title: "Đồng hồ trẻ em" },
  { title: "Tic Watch" },
  { title: "Amazfit" },
  { title: "Huawei" },
  { title: "XOR" },
  { title: "Blackberry" },
  { title: "Philips" },
  { title: "Itel" },
  { title: "TECNO" },
  { title: "BPhone" },
];
const listPrice = [
  { price: "Trên 100 triệu" },
  { price: "Dưới 1 triệu" },
  { price: "Từ 2 đến 3 triệu" },
  { price: "Từ 3 đến 6 triệu" },
  { price: "Từ 6 đến 8 triệu" },
  { price: "Từ 8 đến 15 triệu" },
  { price: "Từ 15 đến 100 triệu" },
];
const listManufacturerLaptop = [
  { title: "Apple" },
  { title: "Acer" },
  { title: "ASUS" },
  { title: "DELL" },
  { title: "GIGABITE" },
  { title: "HP" },
  { title: "Huawei" },
  { title: "Lenovo" },
  { title: "Microsoft" },
  { title: "MSI" },
  { title: "Xiaomi" },
];
const listCategoryLaptop = [
  { category: "Cao cấp - Sang trọng" },
  { category: "Đồ họa - Kỹ thuật" },
  { category: "Học tập - Văn Phòng" },
  { category: "Laptop Gaming" },
];
const listPriceLaptop = [
  { price: "Trên 20 triệu" },
  { price: "Từ 12 đến 15 triệu" },
  { price: "Từ 15 đến 20 triệu" },
];

function AuthPage() {
  // const { isLoggedIn, logOut } = useContext(Context);
  const [index, setIndex] = useState();

  const listOptionDevice = [
    {
      icon: faMobileScreen,
      title: "ĐIỆN THOẠI",
    },
    {
      icon: faClock,
      title: "ĐỒNG HỒ",
    },
    {
      icon: faLaptop,
      title: "LAPTOP",
    },
    {
      icon: faTv,
      title: "SMART TV",
    },
    {
      icon: faTabletScreenButton,
      title: "TABLET",
    },
    {
      icon: faHeadphonesSimple,
      title: "ÂM THANH",
    },
    {
      icon: faHouseSignal,
      title: "SMART HOME",
    },
    {
      icon: faKeyboard,
      title: "PHỤ KIỆN",
    },
    {
      icon: faGamepad,
      title: "ĐỒ CHƠI CÔNG NGHỆ",
    },
    {
      icon: faScrewdriverWrench,
      title: "SỬA CHỮA",
    },
    {
      icon: faSimCard,
      title: "SIM THẺ",
    },
    {
      icon: faRadio,
      title: "TIN TỨC",
    },
    {
      icon: faBolt,
      title: "ƯU ĐÃI HOT",
    },
  ];
  // const navigate = useNavigate();
  const content = (
    <>
      {index === 0 && (
        <div className="flex pl-8">
          <div className={cx("w-[400px]")}>
            <p className={cx("font-bold")}>Hãng Sản Xuất</p>
            <ul className="flex flex-wrap justify-start ">
              {listManufacturer.map((item, index) => {
                return (
                  <li
                    key={index}
                    className={cx(
                      "w-1/3 mb-3 font-normal cursor-pointer hover:text-[#009981] hover:font-bold"
                    )}
                  >
                    {item.title}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={cx("w-[150px]")}>
            <p className={cx("font-bold")}>Mức Giá</p>
            <ul className="">
              {listPrice.map((item, index) => {
                return (
                  <li
                    key={index}
                    className={cx(
                      "w-full mb-3 font-normal cursor-pointer hover:text-[#009981] hover:font-bold"
                    )}
                  >
                    {item.price}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
      {index === 1 && (
        <div className="flex pl-8">
          <div className={cx("w-[400px]")}>
            <p className={cx("font-bold")}>Đồng Hồ</p>
            <ul className="flex flex-wrap justify-start ">
              {listWatch.map((item, index) => {
                return (
                  <li
                    key={index}
                    className={cx(
                      "w-1/3 mb-3 font-normal cursor-pointer hover:text-[#009981] hover:font-bold"
                    )}
                  >
                    {item.title}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
      {index === 2 && (
        <div className="flex pl-8">
          <div className={cx("w-[400px]")}>
            <p className={cx("font-bold")}>Hãng Sản Xuất</p>
            <ul className="flex flex-wrap justify-start ">
              {listManufacturerLaptop.map((item, index) => {
                return (
                  <li
                    key={index}
                    className={cx(
                      "w-1/3 mb-3 font-normal cursor-pointer hover:text-[#009981] hover:font-bold"
                    )}
                  >
                    {item.title}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={cx("w-[150px] mr-8")}>
            <p className={cx("font-bold")}>Loại sản phẩm</p>
            <ul className="">
              {listCategoryLaptop.map((item, index) => {
                return (
                  <li
                    key={index}
                    className={cx(
                      "w-full mb-3 font-normal cursor-pointer hover:text-[#009981] hover:font-bold"
                    )}
                  >
                    {item.category}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={cx("w-[150px]")}>
            <p className={cx("font-bold")}>Mức giá</p>
            <ul className="">
              {listPriceLaptop.map((item, index) => {
                return (
                  <li
                    key={index}
                    className={cx(
                      "w-full mb-3 font-normal cursor-pointer hover:text-[#009981] hover:font-bold"
                    )}
                  >
                    {item.price}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </>
  );
  const slideImages = [
    {
      url: "https://cdn.hoanghamobile.com/i/home/Uploads/2022/07/01/reno-series-01_637922935629198539.jpg",
      caption: "Slide 1",
    },
    {
      url: "https://cdn.hoanghamobile.com/i/home/Uploads/2022/07/05/tuan-le-hotsale-ipad-wweb.png",
      caption: "Slide 2",
    },
    {
      url: "https://cdn.hoanghamobile.com/i/home/Uploads/2022/06/25/laptop-msi-1200x382.jpg",
      caption: "Slide 3",
    },
  ];

  const listPages = [
    {
      name: "Name1",
      price: "1",
      guarantee:
        "https://hoanghamobile.com/Content/web/sticker/bao-hanh-12t.png",
      src: "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2022/04/10/image-removebg-preview.png",
    },
    {
      name: "Name2",
      price: "2",
      guarantee:
        "https://hoanghamobile.com/Content/web/sticker/bao-hanh-18t.png",
      src: "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2022/04/10/image-removebg-preview.png",
    },
    {
      name: "Name3",
      price: "3",
      hot: "https://hoanghamobile.com/Content/web/sticker/hot.png",
      guarantee:
        "https://hoanghamobile.com/Content/web/sticker/bao-hanh-12t.png",
      src: "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2022/04/10/image-removebg-preview.png",
    },
    {
      name: "Name4",
      price: "4",
      src: "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2022/04/10/image-removebg-preview.png",
    },
    {
      name: "Name5",
      price: "5",
      hot: "https://hoanghamobile.com/Content/web/sticker/hot.png",
      src: "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2022/04/10/image-removebg-preview.png",
    },
    {
      name: "Name6",
      price: "6",
      hot: "https://hoanghamobile.com/Content/web/sticker/hot.png",
      src: "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2022/04/10/image-removebg-preview.png",
    },
  ];

  const [src, setSrc] = useState();
  const inputFile = useRef();

  const handleAddImage = () => {
    console.log(inputFile.current.value);
    const item = {
      src: inputFile.current.value,
      path: "image2",
    };
    setSrc(item.src);
    addImage(item);
  };

  return (
    <div className={cx("bg-gray min-h-[100vh] pb-36")}>
      <TopNavigation />
      <div className={cx("h-24")}>
        <div
          className={cx(
            "flex max-w-[1200px] mx-auto justify-between items-center h-full"
          )}
        >
          <img
            className={cx("w-64 cursor-pointer")}
            src="https://hoanghamobile.com/Content/web/img/logo-text.png"
            alt=""
          />
          <div className={cx("w-[670px] relative")}>
            <input
              type="text"
              placeholder="Bạn hôm nay muốn gì?"
              className={cx(
                "h-10 outline-none shadow-sd_search rounded-2xl w-full pl-4"
              )}
            />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className={cx(
                "absolute text-white bg-gradient-to-b from-[#00917a] to-[#00483d] text-xl p-[10px] cursor-pointer rounded-xl right-1 top-[-7px] shadow-sd_search active:top-[-5px]"
              )}
            />
          </div>
          <div
            className={cx(
              "w-32 bg-dark_green rounded-lg h-11 flex justify-center items-center p-2 text-white hover:bg-[#009981] cursor-pointer"
            )}
          >
            <FontAwesomeIcon
              icon={faTruck}
              className="text-white mr-2 text-xl"
            />
            <span className="text-xs">Kiểm tra đơn hàng</span>
          </div>
          <div className="flex justify-center items-center">
            <FontAwesomeIcon
              icon={faCartShopping}
              className="text-4xl text-dark_green hover:text-[#009981] cursor-pointer"
            />
            <div>
              <FontAwesomeIcon
                icon={faCaretLeft}
                className={cx("relative left-[2px] text-[#ff6801]")}
              />
              <span className=" bg-[#ff6801] py-2 px-3 rounded-lg text-xs text-white">
                0
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={cx("h-16")}>
        <div
          className={cx(
            "w-[1200px] mx-auto bg-dark_green h-full rounded-md flex items-center justify-between px-10 pt-1"
          )}
        >
          {listOptionDevice.map((item, index) => {
            return (
              <Popover key={index} content={content} placement="bottom">
                <div
                  onMouseOver={() => setIndex(index)}
                  className={cx(
                    "text-center relative after:constent after:absolute after:left-0 after:rounded-md after:w-0 after:h-1 after:hover:w-full after:hover:bg-[#ff6801] after:duration-500 after:ease"
                  )}
                >
                  <FontAwesomeIcon
                    icon={item.icon}
                    className={cx("text-white text-2xl mb-1")}
                  />
                  <div className={cx("text-white pb-[1px] text-[10px]")}>
                    {item.title}
                  </div>
                </div>
              </Popover>
            );
          })}
        </div>
      </div>
      <div className={cx("w-[1200px] mx-auto mt-7")}>
        <Slide>
          {slideImages.map((slideImage, index) => (
            <div className="cursor-pointer" key={index}>
              <div
                style={{ backgroundImage: `url(${slideImage.url})` }}
                className="h-[375px] rounded-md"
              ></div>
            </div>
          ))}
        </Slide>
      </div>
      <div className="w-[1200px] mx-auto mt-7 flex justify-between items-center">
        <img
          className="w-[24.5%] rounded-sm"
          src="https://cdn.hoanghamobile.com/i/home/Uploads/2022/02/18/chuyen-trang-samsung2.png"
          alt=""
        />
        <img
          className="w-[24.5%] rounded-sm"
          src="https://cdn.hoanghamobile.com/i/home/Uploads/2022/07/05/banner-top-menu-zzzzz.png"
          alt=""
        />
        <img
          className="w-[24.5%] rounded-sm"
          src="https://cdn.hoanghamobile.com/i/home/Uploads/2022/05/19/san-pham-hot.png"
          alt=""
        />
        <img
          className="w-[24.5%] rounded-sm"
          src="https://cdn.hoanghamobile.com/i/home/Uploads/2022/06/15/airpods_637909103861193746.jpg"
          alt=""
        />
      </div>
            <div className="w-[1200px] mx-auto mt-4"> 
              <div className="w-[300px] bg-[#e95d25]  pl-12 rounded-l-sm rounded-r-3xl">
                <p className="bg-[#fff] pl-20 py-2 mb-0 font-bold rounded-r-3xl rounded-l-3xl" >
                    Có thể bạn thích
                </p>
              </div>
            </div>
      <div className="w-[1200px] mx-auto mt-7 grid grid-cols-5 gap-4">
        {listPages.map((item, index) => {
          return (
            <div
              key={index}
              className={cx(
                " bg-white text-center rounded-lg font-bold relative shadow-xl"
              )}
            >
              <img
                src={item.guarantee}
                className="absolute top-0 left-0 mt-3 ml-2 w-[40px]"
                alt=""
              />
              <img
                src={item.hot}
                className="absolute top-0 right-0 mt-0 mr-2 w-[40px]"
                alt=""
              />
              <img
                className={cx("mx-auto mt-5 w-[130px]")}
                src={item.src}
                alt=""
              />
              <p>{item.name}</p>
              <p className="text-red">{item.price}$</p>
              <div>KM</div>
            </div>
          );
        })}
        
      </div>
      <div className="w-[1200px] mx-auto mt-7 grid grid-cols-5 gap-4">

      </div>
    </div>
  );
}

export default AuthPage;
