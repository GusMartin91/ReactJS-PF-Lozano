import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextComponent = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const isInCart = (id) => {
    let exist = cart.some((elemento) => elemento.id === id);
    return exist;
  };

  const getQuantityById = (id) => {
    let product = cart.find((elemento) => elemento.id === id);
    return product?.quantity;
  };

  const emptyCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  const deleteProductById = (id) => {
    let nuevosProd = cart.filter((product) => product.id !== id);
    setCart(nuevosProd);
    localStorage.setItem("cart", JSON.stringify(nuevosProd));
  };

  const getTotalPrice = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.price * elemento.quantity;
    }, 0);

    return total;
  };

  const getTotalQuantity = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.quantity;
    }, 0);

    return total;
  };

  const addToCart = (product) => {
    let exist = isInCart(product.id);
    if (exist) {
      let nuevosProd = cart.map((elemento) => {
        if (elemento.id === product.id) {
          return {
            ...elemento,
            quantity: product.quantity,
          };
        } else {
          return elemento;
        }
      });
      setCart(nuevosProd);
      localStorage.setItem("cart", JSON.stringify(nuevosProd));
    } else {
      setCart([...cart, product]);
      localStorage.setItem("cart", JSON.stringify([...cart, product]));
    }
  };

  const restaCart = (id) => {
    let exist = isInCart(id);
    if (exist) {
      let nuevosProd = cart.map((elemento) => {
        if (elemento.id === id) {
          return {
            ...elemento,
            quantity: elemento.quantity - 1,
          };
        } else {
          return elemento;
        }
      });
      setCart(nuevosProd);
      localStorage.setItem("cart", JSON.stringify(nuevosProd));
    }
  };
  const sumaCart = (id) => {
    let exist = isInCart(id);
    if (exist) {
      let nuevosProd = cart.map((elemento) => {
        if (elemento.id === id) {
          return {
            ...elemento,
            quantity: elemento.quantity + 1,
          };
        } else {
          return elemento;
        }
      });
      setCart(nuevosProd);
      localStorage.setItem("cart", JSON.stringify(nuevosProd));
    }
  };

  let data = {
    cart,
    addToCart,
    restaCart,
    sumaCart,
    getQuantityById,
    emptyCart,
    deleteProductById,
    getTotalPrice,
    getTotalQuantity,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextComponent;
