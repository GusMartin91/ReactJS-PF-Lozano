const ItemListContainer = ({ usuario, edad }) => {
  return (
    <div>
      <br />
      <br />
      <h3>Bienvenido, tu nombre de usuario es: {usuario}!</h3>
      <h4>Tu edad es: {edad}</h4>
    </div>
  );
};

export default ItemListContainer;
