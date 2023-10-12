import { useEffect, useState } from "react";
import { products } from "../../../productsMock";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [productSelected, setProductSelected] = useState({});
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    let producto = products.find((product) => product.id === +id);
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
