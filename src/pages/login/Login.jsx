import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";

const cx = classNames.bind();
function Input({ type, classes, placeholder }) {
  return (
    <input
      className={cx(
        "w-full border-green border-2 p-2 rounded mb-4 outline-none",
        classes
      )}
      type={type}
      placeholder={placeholder}
    />
  );
}
function Login() {
  return (
    <div
      className={cx(
        "flex w-full h-[100vh] justify-center items-center bg-[url('./asset/images/bg-login.jpg')] bg-no-repeat bg-cover"
      )}
    >
      <div
        className={cx(
          "flex flex-col justify-center items-center p-8 w-[400px] border-green border-2 rounded"
        )}
      >
        <h1 className={cx("mb-5 text-4xl")}>LOGIN HERE</h1>
        <Input classes="" type="text" placeholder="ACCOUNT" />
        <Input classes="" type="password" placeholder="PASSWORD" />
        <div className="flex items-center justify-center">
          <div className={cx("mr-10")}>
            <input className={cx("text-10")} type="checkbox" />{" "}
            <span>Remember me</span>
          </div>
          <button className={cx("font-semibold")}>Forgot password?</button>
        </div>
        <button
          className={cx(
            "font-bold text-lg my-3 bg-green text-white py-1 px-8 rounded-lg hover:bg-blue"
          )}
        >
          Login
        </button>
        <div className={cx("flex items-center")}>
          <span>To Register New Account</span>
          <FontAwesomeIcon
            className={cx("mx-3 relativ text-sm ")}
            icon={faArrowRight}
          />
          <button
            className={cx(
              "border-2 font-semibold border-green text-black py-1 px-3 hover:bg-green rounded"
            )}
          >
            Click Here
          </button>
        </div>
      </div>
    </div>
  );
}
export default Login;
