import { Button, Form, Input, InputNumber, message } from "antd";
import { Context } from "../../App";
import { useNavigate } from "react-router";
import { useContext } from "react";
import classNames from "classnames/bind";
import { addProduct } from "../../api/product";
import "./Add_style.css";

const cx = classNames.bind();

const current = new Date();
const date = `${current.getDate()}/${
  current.getMonth() + 1
}/${current.getFullYear()} - ${current.getHours()}:${current.getMinutes()}p`;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

function Add(props) {
  const { setUpdateData, updateData, data } = useContext(Context);
  const [form] = Form.useForm();
  const navigate = useNavigate();
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

  const onFinish = (values) => {
    const item = {
      nameP: values.user.name,
      price: values.user.price,
      quantity: values.user.quantity,
      description: values.user.description,
      entryDate: date,
    };
    
    const result = data.filter((items) => {
      return items.nameP === item.nameP;
    });
    if (result.length === 0) {
      addProduct(item);
      openMessage();
      setTimeout(() => {
        navigate("/");
        setUpdateData(!updateData);
      }, 500);
    } else {
      message.error("Product is exist!");
    }
  };

  return (
    <div className={cx("w-1/2 mt-9 mx-auto max-w-lg")}>
      <Button className="btn-x">X</Button>
      <Form
        {...layout}
        form={form}
        name="add-product"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={["user", "name"]}
          label="Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "price"]}
          label="Price"
          rules={[
            {
              type: "number",
              min: 0,
              max: 99,
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          name={["user", "quantity"]}
          label="Quantity"
          rules={[
            {
              type: "number",
              min: 0,
              max: 99,
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item name={["user", "description"]} label="Description">
          <Input.TextArea />
        </Form.Item>
        <div className={cx("flex justify-center items-center ")}>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button className="btn-submit" type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button
              className="btn-reset"
              onClick={() => {
                form.resetFields();
              }}
            >
              Reset
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
}

export default Add;
