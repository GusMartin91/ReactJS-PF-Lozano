import { Box, Button, Stack } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
const Counter = ({ restar, sumar, contador, setContador, onAdd }) => {
  return (
    <>
      <Stack
        spacing={3}
        direction="row"
        sx={{ justifyContent: "center", margin: "20px 0 30px 0" }}
      >
        <Button variant="text" onClick={restar}>
          <Remove />
        </Button>
        <Button color="secondary" variant="contained">
          {contador}
        </Button>
        <Button variant="text" onClick={sumar}>
          <Add />
        </Button>
      </Stack>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button variant="contained" onClick={() => onAdd(contador)}>
          ¡Agregar al Carrito!
        </Button>
      </Box>
    </>
  );
};

export default Counter;
