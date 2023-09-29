import { Button, Stack } from "@mui/material";
import { useState } from "react";

const CounterContainer = () => {
  const [contador, setContador] = useState(0);

  return (
    <Stack spacing={2} direction="row">
      <Button variant="outlined" onClick={() => setContador(contador - 100)}>
        Restar 100
      </Button>
      <Button variant="outlined" onClick={() => setContador(contador - 10)}>
        Restar 10
      </Button>
      <Button variant="outlined" onClick={() => setContador(contador - 1)}>
        Restar 1
      </Button>
      <Button variant="contained" onClick={() => setContador(0)}>
        {contador}
      </Button>
      <Button variant="outlined" onClick={() => setContador(contador + 1)}>
        Sumar 1
      </Button>
      <Button variant="outlined" onClick={() => setContador(contador + 10)}>
        Sumar 10
      </Button>
      <Button variant="outlined" onClick={() => setContador(contador + 100)}>
        Sumar 100
      </Button>
    </Stack>
  );
};

export default CounterContainer;
