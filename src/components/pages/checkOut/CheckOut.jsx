import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { serverTimestamp } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { Link } from "react-router-dom";
import { Button, Container, TextField, Typography } from "@mui/material";

const Checkout = () => {
  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [orderId, setOrderId] = useState(null);

  const { cart, getTotalPrice, emptyCart } = useContext(CartContext);

  const total = getTotalPrice();

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let order = {
      buyer: userData,
      items: cart,
      total,
      date: serverTimestamp(),
    };

    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, order).then((res) => setOrderId(res.id));

    cart.forEach((item) => {
      updateDoc(doc(db, "products", item.id), {
        stock: item.stock - item.quantity,
      });
    });

    emptyCart();
  };

  return (
    <Container>
      {orderId ? (
        <div>
          <Typography variant="h5">
            Gracias por su compra. Su pedido quedó registrado como: ({orderId})
          </Typography>
          <Link to="/">Seguir comprando</Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <TextField
            label="Nombre"
            variant="outlined"
            type="text"
            name="name"
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Teléfono"
            variant="outlined"
            type="text"
            name="phone"
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            variant="outlined"
            type="text"
            name="email"
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary">
            Comprar
          </Button>
        </form>
      )}
    </Container>
  );
};

export default Checkout;
