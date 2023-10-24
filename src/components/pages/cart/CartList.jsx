import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const CartList = () => {
  return (
    <>
      <h1>¡Estoy en el Carrito!</h1>;
      <Link to={"/checkout"}>
        <Button variant="contained">¡Ir Al Pago!</Button>
      </Link>
    </>
  );
};

export default CartList;
