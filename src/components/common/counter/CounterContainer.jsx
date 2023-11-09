import { useEffect, useState } from "react";
import Counter from "./Counter";
import Swal from "sweetalert2";
const CounterContainer = ({ stock, onAdd, totalQuantity = 1 }) => {
  const [contador, setContador] = useState(totalQuantity);
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
      onAdd={onAdd}
    />
  );
};

export default CounterContainer;
