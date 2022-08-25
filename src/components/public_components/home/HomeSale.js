import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../App";
import classNames from "classnames/bind";

const cx = classNames.bind()

function HomeSale() {
    const { isLoggedIn, logOut } = useContext(Context);
    return (
        <>
            Home
        </>
    )
}

export default HomeSale