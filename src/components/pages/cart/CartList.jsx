import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Container,
  Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import CartCounter from "../../common/cartCounter/CartCounter";
import Swal from "sweetalert2";

const CartList = () => {
  const {
    cart,
    emptyCart,
    sumaCart,
    restaCart,
    deleteProductById,
    getTotalQuantity,
    getTotalPrice,
  } = useContext(CartContext);

  let precioTotal = getTotalPrice();
  let cantidadTotal = getTotalQuantity();

  const vaciarCarrito = () => {
    Swal.fire({
      title: "¿Estás seguro de que deseas vaciar el carrito?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, vaciar carrito",
      cancelButtonText: "No, mantener los productos",
    }).then((result) => {
      if (result.isConfirmed) {
        emptyCart();
      }
    });
  };
  const eliminarProductoPorID = (productId) => {
    Swal.fire({
      title: "¿Estás seguro de que deseas eliminar este producto?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar producto",
      cancelButtonText: "No, mantener el producto",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProductById(productId);
      }
    });
  };

  return (
    <Container maxWidth="lg" sx={{ marginTop: "20px", marginBottom: "20px" }}>
      <h1 style={{ margin: "25px", textAlign: "center" }}>
        ¡Estas en el Carrito!
      </h1>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "20px",
        }}
      >
        <Button
          variant="contained"
          onClick={vaciarCarrito}
          sx={{
            marginTop: "-40px",
            marginBottom: "10px",
            backgroundColor: "crimson",
            color: "white",
            "&:hover": {
              backgroundColor: "darkred",
            },
          }}
          startIcon={<DeleteIcon />}
        >
          Vaciar Carrito
        </Button>
      </Box>
      <h3
        style={{
          textAlign: "end",
          marginBottom: "10px",
          fontWeight: "bold",
          color: "blue",
        }}
      >
        Productos en el carrito:{" "}
        <span
          style={{
            fontWeight: 900,
            fontSize: "20px",
          }}
        >
          ( {cantidadTotal} )
        </span>
      </h3>
      <Grid container justifyContent="center">
        {cart.map((product) => (
          <Grid
            item
            key={product.id}
            style={{
              margin: "10px",
              width: "100%",
            }}
          >
            <Card sx={{ display: "flex" }}>
              <CardMedia
                component="img"
                image={product.img}
                alt={product.alt}
                sx={{ width: 140 }}
              />
              <CardContent sx={{ flex: 1, padding: "5px", minWidth: 0 }}>
                <Typography gutterBottom variant="h5" component="div">
                  {product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <span style={{ fontWeight: 900 }}>Categoria: </span>
                  {product.category}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <span style={{ fontWeight: 900 }}>Descripcion: </span>
                  {product.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <span style={{ fontWeight: 900 }}>Precio Unitario:</span> $
                  {product.price}
                  .- <span style={{ fontWeight: 900 }}> - Precio Total:</span> $
                  {product.price * product.quantity}
                  .- ({product.quantity} unidades)
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "250px",
                  marginLeft: "auto",
                }}
              >
                <Typography variant="body2" color="text.secondary">
                  <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                    Stock:{" "}
                  </span>
                  <span
                    style={{
                      fontWeight: 900,
                      color: "#2dba24",
                      fontSize: "20px",
                    }}
                  >
                    ( {product.stock} )
                  </span>
                </Typography>
                <CartCounter
                  stock={product.stock}
                  initialCount={product.quantity}
                  id={product.id}
                  eliminarProductoPorID={eliminarProductoPorID}
                  restaCart={restaCart}
                  sumaCart={sumaCart}
                />
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Link
        to="/checkout"
        style={{
          textDecoration: "none",
          display: "flex",
          justifyContent: "center",
          width: "fit-content",
          margin: "0 auto",
        }}
      >
        <Button variant="contained" sx={{ margin: "20px" }}>
          Total a Pagar:{"  "}
          <span style={{ fontWeight: "bolder", fontSize: "18px" }}>
            ${precioTotal.toFixed(2)}.-
          </span>
        </Button>
      </Link>
    </Container>
  );
};

export default CartList;
