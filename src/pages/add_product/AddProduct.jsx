
import FormProduct from "../formproduct/FormProduct";
import { Context } from "../../App";
import { useContext } from "react";
function AddProduct(){
  const {updateData, setUpdateData} = useContext(Context)
  return(
    <FormProduct reload={updateData} setReload={setUpdateData} />
  )
}
export default AddProduct