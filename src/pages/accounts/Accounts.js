import classNames from "classnames/bind";
// import { useState } from "react";
import { Context } from "../../App";
import { useContext } from "react";
import { Table } from "antd";
const cx = classNames.bind();

function DashBoard() {

  const {listAccounts} = useContext(Context)
    const dataSource=[]
  listAccounts.forEach((item) => {
    dataSource.push({
      key: item._id,
      username: item.userName,
      password: item.password,
      email: item.email,
    });
  });

  const columns = [
    {
      title: "Username",
      dataIndex: "username",
      width: 160,
      className: "padding-left",
    },
    {
      title: "Password",
      dataIndex: "password",
      align: "center",
      width: 90,
    },
    {
      title: "Email",
      dataIndex: "email",
      align: "center",
      width: 90,
    },
  
  ];
  return (
    <div className={cx('px-8')}>
        <Table
        size="small"
        className="table-dashboard"
        bordered
        columns={columns}
        dataSource={dataSource}
      />
    </div>
  );
}
export default DashBoard;
