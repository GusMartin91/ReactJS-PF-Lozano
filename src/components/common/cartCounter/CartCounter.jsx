import { Button, IconButton, Stack } from "@mui/material";
import { Add, Remove, Delete } from "@mui/icons-material";
import { useState } from "react";
import Swal from "sweetalert2";

const CartCounter = ({
  stock,
  initialCount,
  eliminarProductoPorID,
  id,
  restaCart,
  sumaCart,
}) => {
  const [contador, setContador] = useState(initialCount);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
      sumaCart(id);
    } else {
      Swal.fire({
        icon: "warning",
        title: "Cantidad Máxima alcanzada",
        text: "No puedes agregar más unidades de este producto.",
      });
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
      restaCart(id);
    }
  };

  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{
        padding: "4px",
      }}
    >
      <Stack
        spacing={1}
        direction="row"
        sx={{
          margin: "2px",
          justifyContent: "center",
          alignItems: "center",
          border: "1px solid #ccc",
          borderRadius: "15px",
          padding: "4px",
        }}
      >
        <IconButton color="secondary" onClick={restar}>
          <Remove />
        </IconButton>
        <Button
          variant="contained"
          sx={{ fontSize: "16px", fontWeight: "900" }}
        >
          {contador}
        </Button>
        <IconButton color="primary" onClick={sumar}>
          <Add />
        </IconButton>
      </Stack>
      <Stack
        sx={{
          margin: "2px",
          border: "1px solid #ccc",
          borderRadius: "15px",
          padding: "1px",
        }}
      >
        <IconButton color="error" onClick={() => eliminarProductoPorID(id)}>
          <Delete sx={{ fontSize: 30 }} />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default CartCounter;
