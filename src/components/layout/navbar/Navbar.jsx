import CartWidget from "../../common/cartWidget/CartWidget";
import { Grid } from "@mui/material";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <Grid container className={"containerNavbar"}>
      <Grid item xs={3}>
        <img
          className="imgLogo"
          src="https://res.cloudinary.com/dbzngohkz/image/upload/v1695697049/pngwing.com_4_ysc5xl.png"
          alt="bulon tuerca logo"
        />
      </Grid>
      <Grid item xs={6}>
        <ul className="listaNavBar">
          <li>Todos</li>
          <li>Acero Templado</li>
          <li>Hierro Dulce</li>
          <li>
            <CartWidget />| Carrito
          </li>
        </ul>
      </Grid>
      <Grid item xs={3} className="imgUserP">
        <img
          className="imgUser"
          src="https://res.cloudinary.com/dbzngohkz/image/upload/v1695699297/pngwing.com_5_pcusov.png"
          alt="user usuario profile logo"
        />
      </Grid>
    </Grid>
  );
};
