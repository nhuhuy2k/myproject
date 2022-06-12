import classNames from "classnames/bind";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const cx = classNames.bind();

export const listProduct = JSON.parse(localStorage.getItem("myProducts")) || [];

function FormProduct(props) {
  const { setShowEdit, showEdit, item } = props;
  const location = useLocation();
  const nameProduct = useRef();
  const priceProduct = useRef();
  const quantityProduct = useRef();
  const descrition = useRef();
  const images = useRef();
  const date = useRef();
  const handleResetCanCle = () => {
    if (location.pathname === "/addproduct") {
      nameProduct.current.value = "";
      priceProduct.current.value = "";
      quantityProduct.current.value = "";
      descrition.current.value = "";
      images.current.value = "";
      date.current.value = "";
    } else {
      setShowEdit(!showEdit);
    }
  };

  const handleAddNew = () => {
    const item = {
      name: nameProduct.current.value,
      price: Number(priceProduct.current.value),
      quantity: Number(quantityProduct.current.value),
      description: descrition.current.value,
      images: images.current.value,
      date: date.current.value,
    };
    listProduct.unshift(item);
    localStorage.setItem("myProducts", JSON.stringify(listProduct));
    nameProduct.current.value = "";
    priceProduct.current.value = "";
    quantityProduct.current.value = "";
    descrition.current.value = "";
    images.current.value = "";
    date.current.value = "";
  };

  const handleSave = () => {
    // const item = {
    //   name: nameProduct.current.value,
    //   price: Number(priceProduct.current.value),
    //   quantity: Number(quantityProduct.current.value),
    // };
    // listProduct.unshift(item);
    // localStorage.setItem("myProducts", JSON.stringify(listProduct));
  };

  useEffect(() => {
    if (location.pathname === "/") {
      nameProduct.current.value = item.name;
      priceProduct.current.value = item.price;
      quantityProduct.current.value = item.quantity;
      descrition.current.value = item.description;
      date.current.value = item.date;
  }
  })
  return (
    <div
      className={cx(
        `${
          location.pathname === "/addproduct"
            ? ""
            : "bg-gray bg-opacity-50 w-full h-[100vh] fixed top-0 left-0 right-0 bottom-0 pl-[200px] pt-[100px]"
        }`
      )}
      onClick={() => {
        setShowEdit(!showEdit);
      }}
    >
      <div
        className={cx(
          "w-1/2 min-w-[650px] mx-auto bg-white px-10 py-5 shadow-3xl rounded-md"
        )}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className={cx("mb-4")}>
          <label htmlFor="name" className={cx("mr-3 cursor-pointer")}>
            Name:
          </label>
          <input
            ref={nameProduct}
            className={cx("outline-none border-b-[1px] border-b-blue")}
            type="text"
            id="name"
            placeholder="name..."
            required
          />
        </div>
        <div className="flex justify-between">
          <div className={cx("mb-4")}>
            <label htmlFor="price" className={cx("mr-5 cursor-pointer")}>
              Price:
            </label>
            <input
              ref={priceProduct}
              className={cx("outline-none border-b-[1px] border-b-blue")}
              type="number"
              id="price"
              placeholder="price..."
              required
            />
          </div>
          <div className={cx("mb-4")}>
            <label htmlFor="quanlity" className={cx("mr-3 cursor-pointer")}>
              Quantity:
            </label>
            <input
              ref={quantityProduct}
              className={cx("outline-none border-b-[1px] border-b-blue")}
              type="number"
              id="quantity"
              placeholder="quantity..."
              
              required
            />
          </div>
        </div>
        <div className={cx("mb-4 flex flex-col")}>
          <label htmlFor="description" className={cx("mr-3 cursor-pointer")}>
            Description:
          </label>
          <textarea
            id="description"
            className={cx(
              "border-[1px] rounded-md border-blue outline-none mt-2 flex-1 p-2"
            )}
            ref={descrition}
            rows="5"
            placeholder="Description..."
            
            required
          />
        </div>
        <div className={cx("mb-4 flex flex-col")}>
          <label htmlFor="images" className={cx("mr-3 cursor-pointer")}>
            Images:
          </label>
          <input
            ref={images}
            id="images"
            type="file"
            className={cx(
              "border-[1px] rounded cursor-pointer border-blue mt-2 flex-1 p-2"
            )}
          />
        </div>
        <div className={cx("mb-4 flex flex-col")}>
          <label className={cx("mr-3 cursor-pointer")}>Date:</label>
          <input
            ref={date}
            type="date"
            
            className={cx(
              "border-[1px] rounded cursor-pointer border-blue w-36 mt-2 p-2"
            )}
          />
        </div>
        <div className={cx("flex justify-around w-3/4 mx-auto mt-3")}>
          <button
            onClick={
              location.pathname === "/addproduct" ? handleAddNew : handleSave
            }
            className={cx(
              "font-bold bg-blue py-1 px-4 rounded-md text-white hover:bg-green"
            )}
          >
            {location.pathname === "/addproduct" ? "Add new" : "Save"}
          </button>
          <Link to={location.pathname === "/editproduct" ? "/" : ""}>
            <button
              onClick={handleResetCanCle}
              className={cx(
                "font-bold bg-red py-1 px-5 rounded-md text-white hover:shadow-reset"
              )}
            >
              {location.pathname === "/addproduct" ? "Reset" : "Cancle"}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FormProduct;
