import CheckOut from "./CheckOut";

const CheckOutContainer = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");

  const capturarNombre = (e) => {
    setNombre(e.target.value);
  };

  return <CheckOut />;
};

export default CheckOutContainer;
