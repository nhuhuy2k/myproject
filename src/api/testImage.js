const axios = require("axios");

export const addImage = (item) => {
    axios({
      method: "post",
      url: "http://localhost:3008/insertImage",
      data: item,
    }).catch(function (error) {
      console.log(error);
    });;
  };