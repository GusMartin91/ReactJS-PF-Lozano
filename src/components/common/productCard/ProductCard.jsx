import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import "./ProductCard.css";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  return (
    <Card sx={{ border: "1px solid #ccc" }}>
      <Link to={`/itemDetail/${item.id}`}>
        <CardMedia
          sx={{ height: 170 }}
          image={item.img}
          title={`image ${item.title}`}
          alt={item.alt}
        />
      </Link>
      <CardContent sx={{ height: "200px" }} className="elPrecio">
        <Box>
          <Typography gutterBottom variant="body1" component="div">
            <b>{item.title}</b>
          </Typography>
          <Typography variant="body3" color="text.secondary">
            {item.description}
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="body2"
            color="text.secondary"
            style={{ fontWeight: "900", fontSize: "1.1rem" }}
          >
            <br />$ {item.price} .-
          </Typography>
        </Box>
      </CardContent>
      <Typography
        textAlign={"center"}
        variant="body2"
        color={item.stock === 0 ? "error" : "#68d42a"}
      >
        {item.stock === 0 ? "¡Sin Stock!" : "¡Disponible!"}
      </Typography>
      <CardActions sx={{ justifyContent: "center" }}>
        <Link to={`/itemDetail/${item.id}`}>
          <Button size="small" variant="contained">
            Ver detalle
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
