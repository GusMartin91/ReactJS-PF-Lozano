import React from "react";
import { Grid, Typography, Paper } from "@mui/material";
import CounterContainer from "../../common/counter/CounterContainer";

const ItemDetail = ({ productSelected, onAdd }) => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        padding: "40px",
        justifyContent: "space-evenly",
      }}
    >
      <Grid item xs={12} md={6}>
        {/* Aquí va la imagen grande */}
        <img
          style={{
            borderRadius: "10%",
          }}
          src={productSelected.img}
          alt={productSelected.title}
        />
      </Grid>
      <Grid
        item
        xs={12}
        md={4}
        sx={{
          borderRadius: "10%",
        }}
      >
        {/* Aquí va la descripción del producto */}
        <Typography
          sx={{ margin: "10px 0 20px 0" }}
          color="primary"
          variant="h4"
        >
          <b>{productSelected.category}</b>
        </Typography>
        <Typography
          sx={{ margin: "10px 0 10px 0" }}
          color="primary"
          variant="h5"
        >
          <b>{productSelected.title}</b>
        </Typography>
        <Typography
          sx={{ margin: "30px 0 30px 0" }}
          color="secondary"
          variant="body1"
        >
          {productSelected.description}
        </Typography>
        <Typography
          sx={{
            margin: "20px 0 20px 0",
          }}
          color="primary"
          variant="h6"
        >
          <b>Precio: $ {productSelected.price}.-</b>
        </Typography>
        {productSelected.stock > 0 ? (
          <Typography
            sx={{
              margin: "10px 0 40px 0",
              display: "flex",
              justifyContent: "end",
            }}
            color="#68d42a"
            variant="h6"
          >
            ¡Stock Disponible! - <b>({productSelected.stock})</b>
          </Typography>
        ) : (
          <Typography
            sx={{
              margin: "10px 0 40px 0",
              display: "flex",
              justifyContent: "end",
            }}
            color="error"
            variant="h6"
          >
            ¡Sin Stock!
          </Typography>
        )}
        <CounterContainer stock={productSelected.stock} onAdd={onAdd} />
      </Grid>
    </Grid>
  );
};

export default ItemDetail;
