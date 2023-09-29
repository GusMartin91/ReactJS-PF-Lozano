import { Button, Stack } from "@mui/material";
const Counter = ({ restar, sumar, contador, setContador }) => {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="outlined" onClick={restar}>
        Quitar
      </Button>
      <Button
        color="secondary"
        variant="contained"
        onClick={() => setContador(0)}
      >
        {contador}
      </Button>
      <Button variant="outlined" onClick={sumar}>
        Agregar
      </Button>
    </Stack>
  );
};

export default Counter;
