const Albums = ({ albums }) => {
  return (
    <div key={albums.id}>
      <h3>Crear {albums} nuevo</h3>
    </div>
  );
};

export default Albums;
