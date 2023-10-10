import { useEffect, useState } from "react";
import { products } from "../../../productsMock";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [productSelected, setProductSelected] = useState({});
  let id = 3;
  useEffect(() => {
    let producto = products.find((product) => product.id === id);
    const getProduct = new Promise((resolve, reject) => {
      resolve(producto);
    });
    getProduct
      .then((res) => setProductSelected(res))
      .catch((err) => console.log(err));
  }, []);
  const onAdd = (cantidad) => {
    console.log(
      "Se agregó " + cantidad + " " + productSelected.title + " al carrito"
    );
  };
  return <ItemDetail productSelected={productSelected} onAdd={onAdd} />;
};

export default ItemDetailContainer;
