import CartWidget from "../../common/cartWidget/CartWidget";
import { Grid } from "@mui/material";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <Grid container className={"containerNavbar"}>
      <Grid item xs={3}>
        <img
          className="imgLogo"
          src="https://res.cloudinary.com/dbzngohkz/image/upload/v1696021826/pngwing.com_e4_dprhrr.png"
          alt="bulon tuerca logo"
        />
      </Grid>
      <Grid item xs={6}>
        <ul className="listaNavBar">
          <li>Todos</li>
          <li>Acero Templado</li>
          <li>Hierro Dulce</li>
        </ul>
      </Grid>
      <Grid item xs={3} className="carrito">
        <CartWidget />
      </Grid>
    </Grid>
  );
};
