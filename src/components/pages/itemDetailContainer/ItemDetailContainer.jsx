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
      title: "¿Deseas ver tu carrito?",
      text: "Puedes ver los productos seleccionados en tu carrito o puedes continuar comprando.",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, ir al carrito",
      cancelButtonText: "No, seguir comprando",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/cart");
      }
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
