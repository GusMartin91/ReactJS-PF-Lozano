import CartWidget from "../../common/cartWidget/CartWidget";
import { Grid } from "@mui/material";
import { Outlet, Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <>
      <Grid container className={"containerNavbar"}>
        <Grid item xs={3}>
          <Link to="/">
            <img
              className="imgLogo"
              src="https://res.cloudinary.com/dbzngohkz/image/upload/v1696021826/pngwing.com_e4_dprhrr.png"
              alt="bulon tuerca logo"
            />
          </Link>
        </Grid>
        <Grid item xs={3}>
          <Link to="/">
            <h1>Bulones - EL PITUTO</h1>
          </Link>
        </Grid>
        <Grid item xs={3} className="carrito">
          <CartWidget />
        </Grid>
      </Grid>
      <Outlet />
    </>
  );
};
