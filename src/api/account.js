import axios from "axios";

export function getListAccounts(setData){
    axios.get("http://localhost:3008/accounts").then((res) => {
        setData(res.data);
      });
  }

  export const addAccount = (item) => {
    axios({
      method: "post",
      url: "http://localhost:3008/account",
      data: item,
    });
  };