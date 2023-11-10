import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import { db } from "../../../firebaseConfig";
import { getDoc, collection, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [productSelected, setProductSelected] = useState({});
  const { id } = useParams();
  const { addToCart, getQuantityById } = useContext(CartContext);
  let totalQuantity = getQuantityById(id);
  const navigate = useNavigate();

  useEffect(() => {
    let itemCollection = collection(db, "products");
    let refDoc = doc(itemCollection, id);
    getDoc(refDoc).then((res) => {
      setProductSelected({ id: res.id, ...res.data() });
    });
  }, [id]);
  const onAdd = (cantidad) => {
    let product = { ...productSelected, quantity: cantidad };
    addToCart(product);

    Swal.fire({
      title: "¡Producto agregado al carrito!",
      text: "Para ver los productos seleccionados ve a tu carrito",
      icon: "success",
    });
  };
  return (
    <ItemDetail
      productSelected={productSelected}
      onAdd={onAdd}
      totalQuantity={totalQuantity}
    />
  );
};

export default ItemDetailContainer;
