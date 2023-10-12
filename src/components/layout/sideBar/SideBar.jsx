import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import "./SideBar.css";
const SideBar = () => {
  return (
    <Grid>
      <ul className="listaNavBar">
        <p className="pLista">FILTROS</p>
        <p className="pLista">Categorias:</p>
        <Link to={`/`}>
          <li>Todos</li>
        </Link>
        <Link to={`/category/Acero Templado`}>
          <li>Acero Templado</li>
        </Link>
        <Link to={`/category/Hierro Dulce`}>
          <li>Hierro Dulce</li>
        </Link>
        <br />
        <p className="pLista">Ordenar por:</p>
        <Link to={`/ordenPrecio/menor`}>
          <li>Menor Precio</li>
        </Link>
        <Link to={`/ordenPrecio/mayor`}>
          <li>Mayor Precio</li>
        </Link>
      </ul>
    </Grid>
  );
};

export default SideBar;
