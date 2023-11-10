import { Button, IconButton, Stack } from "@mui/material";
import { Add, Remove, Delete } from "@mui/icons-material";
import { useState } from "react";
import Swal from "sweetalert2";

const CartCounter = ({ stock, initialCount, eliminarProductoPorID, id }) => {
  const [contador, setContador] = useState(initialCount);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
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
    } else {
      Swal.fire({
        icon: "question",
        title: "¿Deseas eliminar este producto del carrito?",
        text: "Si confirmas, el producto se eliminará del carrito.",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "No, mantenerlo en el carrito",
      }).then((result) => {
        if (result.isConfirmed) {
        }
      });
    }
  };

  return (
    <Stack
      spacing={1}
      direction="row"
      sx={{
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
      <Button variant="outlined" sx={{ fontSize: "16px", fontWeight: "900" }}>
        {contador}
      </Button>
      <IconButton color="primary" onClick={sumar}>
        <Add />
      </IconButton>
      <IconButton color="error" onClick={() => eliminarProductoPorID(id)}>
        <Delete />
      </IconButton>
    </Stack>
  );
};

export default CartCounter;
