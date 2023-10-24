import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const CheckOut = () => {
  return (
    <>
      <h1>¡Estoy en el CheckOut!</h1>;
      <Link to={"/pago"}>
        <Button variant="contained">¡Pagar!</Button>
      </Link>
    </>
  );
};

export default CheckOut;
