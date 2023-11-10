import { Grid } from "@mui/material";
import "./Footer.css";

export const Footer = () => {
  return (
    <Grid container className="containerFooter">
      <Grid item xs={7}>
        <p>Curso de ReactJS - Lozano Gustavo - 2023 © copyright</p>
      </Grid>
    </Grid>
  );
};
