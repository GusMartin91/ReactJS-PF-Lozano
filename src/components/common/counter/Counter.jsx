import { Button, Stack } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
const Counter = ({ restar, sumar, contador, setContador, onAdd }) => {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="outlined" onClick={restar}>
        <Remove />
      </Button>
      <Button
        color="secondary"
        variant="contained"
        onClick={() => setContador(0)}
      >
        {contador}
      </Button>
      <Button variant="outlined" onClick={sumar}>
        <Add />
      </Button>
      <Button variant="contained" onClick={() => onAdd(contador)}>
        ¡Agregar al Carrito!
      </Button>
    </Stack>
  );
};

export default Counter;
