import "antd/dist/antd.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Table, Space, Modal, Button } from "antd";
import classNames from "classnames/bind";
import { faTrashCan, faPenSquare } from "@fortawesome/free-solid-svg-icons";
import "./table.css";
import { useState } from "react";

const cx = classNames.bind();

const Tables = (props) => {
  const {
    data,
    setShowEdit,
    showEdit,
    setItem,
    getItem,
    deleteProduct,
    reloadData,
    setReloadData,
  } = props;
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState(
    "Are you sure you want to delete the product?"
  );
  const [key, setKey] = useState("");
  const showModal = () => {
    setVisible(!visible);
  };
  const handleOk = () => {
    setModalText("Deleting...");
    setConfirmLoading(true);
    setTimeout(() => {
      deleteProduct(key);
      showModal(!visible);
      setConfirmLoading(false);
    }, 1000);
  };

  const dataTest = [];
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      width: 160,
      className: "padding-left",
    },
    {
      title: "Price",
      dataIndex: "price",
      align: "center",
      width: 90,
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      align: "center",
      width: 90,
    },
    {
      title: "Description",
      dataIndex: "description",
      align: "right",
      width: 200,
    },
    {
      title: "Entry_Date",
      dataIndex: "entryDate",
      align: "center",
      width: 170,
    },
    {
      title: "Actions",
      colSpan: 2,
      align: "center",
      width: 140,
      render: (record) => (
        <Space size="middle">
          <FontAwesomeIcon
            onClick={() => {
              setShowEdit(!showEdit);
              getItem(record.key, setItem);
            }}
            className={cx("cursor-pointer pr-2 text-xl text-green")}
            icon={faPenSquare}
          />
          <button>
            <Space>
              <FontAwesomeIcon
                onClick={() => {
                  setKey(record.key);
                  showModal();
                }}
                className={cx("cursor-pointer text-xl text-red")}
                icon={faTrashCan}
              />
            </Space>
          </button>
        </Space>
      ),
    },
  ];

  data.forEach((item) => {
    dataTest.push({
      key: item._id,
      name: item.nameP,
      price: item.price + "$",
      quantity: item.quantity,
      description: item.description,
      entryDate: item.entryDate,
      edit: "Edit",
      delete: "Delete",
    });
  });
  return (
    <>
      <Table
        size="small"
        className="table-dashboard"
        bordered
        columns={columns}
        dataSource={dataTest}
      />
      <Modal
        title="Delete product!"
        visible={visible}
        onOk={handleOk}
        okText="Confirm"
        confirmLoading={confirmLoading}
        onCancel={showModal}
        afterClose={() => setReloadData(!reloadData)}
      >
        <p>{modalText}</p>
      </Modal>
    </>
  );
};

export default Tables;
