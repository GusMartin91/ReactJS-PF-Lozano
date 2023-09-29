import { useEffect, useState } from "react";
import Counter from "./Counter";

const CounterContainer = ({ stock }) => {
  const [contador, setContador] = useState(1);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    } else {
      alert("Cantidad Maxima!");
    }
  };
  const restar = () => {
    if (contador > 0) {
      setContador(contador - 1);
    } else {
      alert("Carrito Vacio!");
    }
  };
  console.log("Actualizacion");
  useEffect(() => {
    console.log("PETICION FETCH");
  }, []);
  return (
    <Counter
      sumar={sumar}
      restar={restar}
      contador={contador}
      setContador={setContador}
    />
  );
};

export default CounterContainer;
