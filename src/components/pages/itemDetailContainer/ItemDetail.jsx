import React from "react";
import { Grid, Typography } from "@mui/material";
import CounterContainer from "../../common/counter/CounterContainer";

const ItemDetail = ({ productSelected, onAdd, totalQuantity }) => {
  return (
    <Grid
      container
      sx={{
        padding: "20px 180px 0 180px",
        justifyContent: "space-evenly",
      }}
    >
      <Grid item xs={12} md={6}>
        <img
          style={{
            borderRadius: "10%",
            width: "100%",
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
        <Typography
          sx={{ margin: "10px 0 10px 0" }}
          color="primary"
          fontSize={32}
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
          sx={{ margin: "10px 0 10px 0" }}
          color="secondary"
          variant="body1"
        >
          {productSelected.description}
        </Typography>
        <div>
          <Typography
            sx={{
              margin: "15px 0 15px 0",
              border: "2px solid #aaa",
              display: "flex",
              justifyContent: "center",
              width: "60%",
            }}
            color="primary"
            variant="h6"
          >
            <b>Precio: $ {productSelected.price}.-</b>
          </Typography>
        </div>
        {productSelected.stock > 0 ? (
          <>
            <Typography
              sx={{
                margin: "10px 0 30px 0",
                display: "flex",
                justifyContent: "end",
              }}
              color="#68d42a"
              variant="h6"
            >
              ¡Stock Disponible! - <b>({productSelected.stock})</b>
            </Typography>
            <CounterContainer
              stock={productSelected.stock}
              onAdd={onAdd}
              totalQuantity={totalQuantity}
            />
          </>
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
      </Grid>
    </Grid>
  );
};

export default ItemDetail;
