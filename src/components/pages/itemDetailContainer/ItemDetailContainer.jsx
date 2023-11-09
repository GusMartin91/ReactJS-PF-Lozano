import { useEffect, useState } from "react";
import { products } from "../../../productsMock";
import ItemDetail from "./ItemDetail";
import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
const ItemDetailContainer = () => {
  const [productSelected, setProductSelected] = useState({});
  const { id } = useParams();
  const { addToCart, getQuantityById } = useContext(CartContext);
  let totalQuantity = getQuantityById(+id);
  const navigate = useNavigate();

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
