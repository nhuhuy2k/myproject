
import classNames from "classnames/bind";
import { useState } from "react";
import FormProduct from "../formproduct/FormProduct";
import { deleteProduct, getItem } from "../../api/product";
import Tables from "../../components/table/table";
import { Context } from "../../App";
import { useContext } from "react";
import { useNavigate } from "react-router";
const cx = classNames.bind();

function DashBoard() {
  const {updateData, setUpdateData, data} = useContext(Context)
  const [showEdit, setShowEdit] = useState(false);

  const [showDesc, setShowDesc] = useState(false);
  const [item, setItem] = useState({});
  const navigate = useNavigate()
  return (
    <div className={cx('px-8')}>
      <Tables data={data}
        deleteProduct={deleteProduct}
        setShowEdit={setShowEdit}
        showEdit={showEdit}
        getItem={getItem}
        setItem={setItem}
        reloadData={updateData}
        setReloadData={setUpdateData} />
        <button onClick={() => navigate('/')} className="font-bold text-white bg-gradient-to-b from-[#00917a] to-[#00483d] py-2 px-3 rounded-lg mb-2 hover:translate-y-[2px] ml-40 transition hover:scale-110">Public page</button>
      {showEdit && (
        <FormProduct
          item={item}
          data={data}
          setReload={setUpdateData}
          reload={updateData}
          setShowEdit={setShowEdit}
          showEdit={showEdit}
        />
      )}

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
            value
            cols="50"
            rows="5"
            className={cx("p-3 outline-none")}

            readOnly
          ></textarea>
        </div>
      )}
    </div>
  );
}

export default DashBoard;
