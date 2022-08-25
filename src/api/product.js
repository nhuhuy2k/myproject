const axios = require("axios");

export const addProduct = (item) => {
  axios({
    method: "post",
    url: "http://localhost:3008/product",
    data: item,
  }).catch(function (error) {
    console.log(error);
  });;
};

export function editProduct(idP, item) {
  axios({
    method: "put",
    url: `http://localhost:3008/product/${idP}`,
    data: item,
  }).catch(function (error) {
    console.log(error);
  });;
}

export function deleteProduct(id) {
  axios.delete(`http://localhost:3008/product/${id}`).then((res) => {
  }).catch(function (error) {
    console.log(error);
  });;
}

export function getItem(id, setItem) {
  axios.get(`http://localhost:3008/product/${id}`).then((res) => {
      setItem(res.data);
    }).catch(function (error) {
      console.log(error);
    });;
}

export function getList(setList){
  axios.get("http://localhost:3008/products").then((res) => {
      setList(res.data);
    }).catch(function (error) {
      console.log(error); 
    });
    ;
}