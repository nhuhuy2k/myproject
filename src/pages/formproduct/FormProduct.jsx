import classNames from "classnames/bind";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router";
import { Link, useNavigate } from "react-router-dom";
import { addProduct, editProduct } from "../../api/product";
import { message } from "antd";
import { Context } from "../../App";
import { useContext } from "react";
const cx = classNames.bind();

function FormProduct(props) {
  const { setShowEdit, showEdit, item, setReload, reload } = props;
  const {data, setUpdateData, updateData} = useContext(Context)
  const location = useLocation();
  const navigate = useNavigate();
  const nameProduct = useRef();
  const priceProduct = useRef();
  const quantityProduct = useRef();
  const descrition = useRef();
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()} - ${current.getHours()}:${current.getMinutes()}p`;
  const key = "Addnew";
  const openMessage = () => {
    message.loading({
      content: "Loading...",
      key,
    });
    setTimeout(() => {
      message.success({
        content: "Add new product successful!",
        key,
        duration: 2,
      });
    }, 500);
  };

  const error = () => {
    message.error("There is information that has not been entered!!!");
  };

  const handleResetCanCle = () => {
    if (location.pathname === "/dashboard/addproduct") {
      nameProduct.current.value = "";
      priceProduct.current.value = "";
      quantityProduct.current.value = "";
      descrition.current.value = "";
    } else {
      setShowEdit(!showEdit);
    }
  };

  const handleAddNew = () => {
    const item = {
      nameP: nameProduct.current.value,
      price: Number(priceProduct.current.value),
      quantity: Number(quantityProduct.current.value),
      description: descrition.current.value,
      entryDate: date,
    };

    if (item.nameP === "" || item.price === "" || item.quantity === "") {
      error();
    } else {
      const result = data.filter((items) => {
        return items.nameP === item.nameP;
      });
      if (result.length === 0) {
        addProduct(item);
        openMessage();
        setTimeout(() => {
          navigate("/dashboard");
          setUpdateData(!updateData);
        }, 500);
      } else {
        message.error("Product is exist!");
      }
    }
  };

  const handleSave = () => {
    const product = {
      nameP: nameProduct.current.value,
      price: Number(priceProduct.current.value),
      quantity: Number(quantityProduct.current.value),
      description: descrition.current.value,
      entryDate: date,
    };
    editProduct(item._id, product);
    setReload(!reload);
    setShowEdit(!showEdit);
  };

  useEffect(() => {
    if (location.pathname === "/dashboard") {
      nameProduct.current.value = item.nameP;
      priceProduct.current.value = item.price;
      quantityProduct.current.value = item.quantity;
      descrition.current.value = item.description;
    }
  });
  return (
    <div
      className={cx(
        `${
          location.pathname === "/dashboard/addproduct"
            ? ""
            : "bg-gray bg-opacity-50 w-full h-[100vh] fixed top-0 left-0 right-0 bottom-0 pl-[200px] pt-[100px]"
        }`
      )}
      onClick={() =>
        location.pathname === "/dashboard/addproduct"
          ? ""
          : setShowEdit(!showEdit)
      }
    >
      <div
        className={cx(
          "w-4/5 min-w-[450px] max-w-[600px] mx-auto bg-white px-10 py-5 shadow-3xl rounded-md"
        )}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className={cx("mb-4")}>
          <label htmlFor="name" className={cx("mr-7 cursor-pointer sm:mr-3")}>
            Name:
          </label>
          <input
            ref={nameProduct}
            className={cx(
              "outline-none border-b-[1px] border-b-blue w-2/5 sm:w-min"
            )}
            type="text"
            id="name"
            placeholder="name..."
            required
          />
        </div>
        <div className="justify-between sm:flex">
          <div className={cx("mb-4")}>
            <label
              htmlFor="price"
              className={cx("mr-9 cursor-pointer sm:mr-4")}
            >
              Price:4
            </label>
            <input
              ref={priceProduct}
              className={cx("outline-none border-b-[1px] border-b-blue ")}
              type="number"
              id="price"
              placeholder="price..."
              required
            />
          </div>
          <div className={cx("mb-4 ")}>
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
        <div className={cx("flex justify-around w-3/4 mx-auto mt-3")}>
          <button
            type="button"
            onClick={() => {
              location.pathname === "/dashboard/addproduct"
                ? handleAddNew()
                : handleSave();
            }}
            className={cx(
              "font-bold bg-blue py-1 px-4 rounded-md text-white hover:bg-green"
            )}
          >
            {location.pathname === "/dashboard/addproduct" ? "Add new" : "Save"}
          </button>
          <Link
            to={
              location.pathname === "/dashboard/editproduct" ? "/dashboard" : ""
            }
          >
            <button
              onClick={handleResetCanCle}
              className={cx(
                "font-bold bg-red py-1 px-5 rounded-md text-white hover:shadow-reset"
              )}
            >
              {location.pathname === "/dashboard/addproduct"
                ? "Reset"
                : "Cancle"}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FormProduct;
