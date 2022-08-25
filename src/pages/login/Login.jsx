import {
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { useState } from "react";
import { addAccount } from "../../api/account";
import { useContext } from "react";
import { Context } from "../../App";
import { message, Button, Checkbox, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
const cx = classNames.bind();

function Login() {
  const { updateData, setUpdateData, listAccounts, logIn } = useContext(Context);
  const navigate = useNavigate();
  const [CreateAccount, setCreateAccount] = useState(true);
  const [account, setAccount] = useState({});

  const handleSignIn = () => {
    // if (account[0].value === "" || account[1].value === "") {
    //   return;
    // } else {
    //   const result = listAccounts.filter((item) => {
    //     return item.userName === account[0].value;
    //   });
    //   if (result.length === 0) {
    //     message.error("Incorrect account or password information.");
    //   } else {
    //     if (result[0].password === account[1].value) {
    //       message.success(`Wellcome ${account[0].value}`);
    //       logIn()
    //       navigate('/')
    //     } else {
    //       message.error("Incorrect account or password information.");
    //     }
    //   }
    // }
    logIn()
    navigate('/dashboard');
  };

  const handleCreateAccount = () => {
    if (account[1].value === account[2].value) {
      const result = listAccounts.filter((item) => {
        return item.userName === account[0].value;
      });
      if (result.length === 0) {
        const item = {
          userName: account[0].value,
          password: account[1].value,
          email: account[3].value,
        };

        addAccount(item);
        setCreateAccount(false);
        setUpdateData(updateData);
        setCreateAccount(true)
        setUpdateData(!updateData)
        message.success("Create account successful ^^");

      } else {
        message.error("Account already exists!");
      }
    } else {
      message.error("Confirm password wrong!")
    }
  };

  return (
    <div
      className={cx(
        "flex w-full min-h-[100vh] py-10 justify-center items-center bg-[url('./asset/images/bg-login.jpg')] bg-no-repeat bg-cover"
      )}
    >
      <div
        className={cx(
          "bg-[#211551] rounded-xl  w-[400px] sm:w-[500px] flex flex-col items-center py-4"
        )}
      >
        <div
          className={cx(
            "bg-[url('./asset/images/logo-login.webp')] bg-no-repeat bg-cover w-1/2 h-[200px] relative mb-[50px]"
          )}
        >
          <span
            className={cx(
              "absolute bottom-[-30px] left-1/2 translate-x-[-50%] text-[#94AAD6] font-bold italic text-2xl "
            )}
          >
            WELLCOME!
          </span>
        </div>

        <Form
          name="basic"
          onFieldsChange={(_, allFields) => {
            setAccount(allFields);
          }}
          labelCol={{
            span: `${CreateAccount === false ? "10" : "8"}`,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password autoComplete="on" />
          </Form.Item>

          <Form.Item
            label="Confirm Password"
            name="confirm password"
            hidden={CreateAccount}
            rules={[
              {
                required: true,
                message: "Confirm password is't empty!",
              },
            ]}
          >
            <Input.Password  autoComplete="on"/>
          </Form.Item>

          <Form.Item
            hidden={CreateAccount}
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: `${CreateAccount === false ? "4" : "8"}`,
              span: 16,
            }}
          >
            <Button
              className={cx(`${CreateAccount === false ? "mr-14" : ""}`)}
              onClick={() =>
                CreateAccount === false ? handleCreateAccount() : handleSignIn()
              }
              type="primary"
              htmlType="submit"
            >
              {CreateAccount === false ? "Register" : "Sign in"}
            </Button>

            <Button
              hidden={CreateAccount}
              type="primary"
              onClick={() => setCreateAccount(true)}
            >
              Cancel
            </Button>
          </Form.Item>
        </Form>

        <div className={cx("flex items-center mt-3 mb-4")}>
          <span className={cx("text-gray mr-3")}>Click</span>
          <FontAwesomeIcon
            className={cx("text-gray mr-3 animate-pulse")}
            icon={faArrowRight}
          />
          <span
            onClick={() => setCreateAccount(false)}
            className={cx(
              "border-b-2 border-b-[#211551] text-[16px] hover:text-[#94AAD6] hover:border-b-2 hover:border-b-[#94AAD6] cursor-pointer"
            )}
          >
            Create an Account
          </span>
        </div>
      </div>
    </div>
  );
}
export default Login;
