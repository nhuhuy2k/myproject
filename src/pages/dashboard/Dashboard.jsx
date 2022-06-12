import { faPenSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import FormProduct from "../formproduct/FormProduct";
import { listProduct } from "../formproduct/FormProduct";
const cx = classNames.bind();

function DashBoard() {
  const [item, setItem] = useState([]);
  const [showEdit, setShowEdit] = useState(false);
  const [index, setIndex] = useState("");
  const [showDesc, setShowDesc] = useState(false);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("myProducts"));
    return setItem(items);
  }, []);

  const handleDelete = ({ Index }) => {
    item.splice(Index, 1);
    localStorage.setItem("myProducts", JSON.stringify(item));
    const items = JSON.parse(localStorage.getItem("myProducts"));
    setItem(items);
  };

  return (
    <>
      <table className={cx("mx-auto w-4/5")}>
        <thead>
          <tr className={cx("border-blue border-[1px]")}>
            <th className={cx("py-2 text-blue border-blue border-r-[1px] ")}>
              Name
            </th>
            <th className={cx("py-2 text-blue border-blue border-r-[1px] ")}>
              Price
            </th>
            <th className={cx("py-2 text-blue border-blue border-r-[1px]")}>
              Quantity
            </th>
            <th className={cx("py-2 text-blue border-blue border-r-[1px]")}>
              Description
            </th>
            <th className={cx("py-2 text-blue border-blue border-r-[1px]")}>
              Images
            </th>
            <th className={cx("py-2 text-blue border-blue border-r-[1px]")}>
              EntryDate
            </th>
            <th className={cx("py-2 text-blue")} colSpan="2">
              Acction
            </th>
          </tr>
        </thead>
        <tbody>
          {item.map((item, Index) => {
            return (
              <tr
                key={Index}
                className={cx("hover:bg-gray border-blue border-[1px]")}
              >
                <td className={cx("py-2 pl-4")}>{item.name}</td>
                <td className={cx("py-2 pl-4")}>
                  <p className={cx("flex justify-center py-2 ")}>
                    {item.price}$
                  </p>
                </td>
                <td className={cx("py-2 ")}>
                  <p className={cx(" flex justify-center")}>{item.quantity}</p>
                </td>
                <td className={cx("py-2 ")}>
                  <span
                    onClick={() => {
                      setShowDesc(!showDesc);
                      setIndex(Index);
                    }}
                    className={cx(
                      "flex justify-center text-yellow cursor-pointer"
                    )}
                  >
                    ViewMore
                  </span>
                </td>
                <td className={cx("py-2 flex justify-center items-center")}>
                  <img
                    src="./asset/images/avatar.jpg"
                    className={cx("w-10 h-10")}
                    alt=""
                  />
                </td>
                <td className={cx("py-2 ")}>
                  <p className={cx(" flex justify-center")}>{item.date}</p>
                </td>
                <td className={cx("")} index={Index}>
                  <FontAwesomeIcon
                    onClick={() => {
                      setShowEdit(!showEdit);
                      setIndex(Index);
                    }}
                    className={cx(
                      "flex justify-center items-center mx-auto cursor-pointer text-xl text-green"
                    )}
                    icon={faPenSquare}
                  />
                </td>
                <td className={cx("")}>
                  <FontAwesomeIcon
                    onClick={() => handleDelete({ Index })}
                    className={cx(
                      "flex justify-center items-center cursor-pointer mx-auto text-xl text-red"
                    )}
                    icon={faTrashCan}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
        {showEdit && (
          <FormProduct
            item={listProduct[index]}
            setShowEdit={setShowEdit}
            showEdit={showEdit}
          />
        )}
      </table>
      {showDesc && (
        <div
          onClick={() => setShowDesc(!showDesc)}
          className={cx(
            "bg-gray bg-opacity-50 w-full h-[100vh] fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center"
          )}
        >
          <textarea
            onClick={(e) => {
              e.stopPropagation();
            }}
            name=""
            id=""
            cols="50"
            rows="5"
            className={cx("p-3 outline-none")}
            value={listProduct[index].description}
            readOnly
          >
          </textarea>
        </div>
      )}
    </>
  );
}

export default DashBoard;
