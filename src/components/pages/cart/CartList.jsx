import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Container,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import CartCounter from "../../common/cartCounter/CartCounter";
import Swal from "sweetalert2";

const CartList = () => {
  const { cart, emptyCart } = useContext(CartContext);

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

  return (
    <Container maxWidth="lg" sx={{ marginTop: "20px", marginBottom: "20px" }}>
      <h1 style={{ margin: "25px", textAlign: "center" }}>
        ¡Estoy en el Carrito!
      </h1>
      <Button
        variant="contained"
        onClick={vaciarCarrito}
        sx={{
          marginBottom: "20px",
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
      <Grid container spacing={2} justifyContent="center">
        {cart.map((product) => (
          <Grid item key={product.id}>
            <Card sx={{ display: "flex" }}>
              <CardMedia
                component="img"
                image={product.img}
                alt={product.alt}
                sx={{ width: 140 }}
              />
              <CardContent sx={{ padding: "2px" }}>
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
              <CardActions sx={{ display: "flex", width: "300px" }}>
                <CartCounter
                  stock={product.stock}
                  initialCount={product.quantity}
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
          display: "block",
          textAlign: "center",
        }}
      >
        <Button variant="contained" sx={{ margin: "20px" }}>
          ¡Ir Al Pago!
        </Button>
      </Link>
    </Container>
  );
};

export default CartList;
