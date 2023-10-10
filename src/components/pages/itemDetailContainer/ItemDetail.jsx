import React from "react";
import { Grid, Typography, Paper } from "@mui/material";
import CounterContainer from "../../common/counter/CounterContainer";
import { BorderAllRounded, RoundedCorner } from "@mui/icons-material";

const ItemDetail = ({ productSelected, onAdd }) => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        padding: "40px",
        backgroundColor: "red",
      }}
    >
      <Grid item xs={12} md={6}>
        {/* Aquí va la imagen grande */}
        <img
          style={{ borderRadius: "10%" }}
          src={productSelected.img}
          alt={productSelected.title}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        {/* Aquí va la descripción del producto */}
        <Typography variant="h3">{productSelected.title}</Typography>
        <Typography variant="body1">{productSelected.description}</Typography>
        <Typography variant="h3">Stock Disponible</Typography>
        {/* Aquí el contador */}
        <CounterContainer stock={productSelected.stock} onAdd={onAdd} />
      </Grid>
    </Grid>
  );
};

export default ItemDetail;
