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
      <CardMedia
        sx={{ height: 170 }}
        image={item.img}
        title={`image ${item.title}`}
        alt={item.alt}
      />
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
          <Typography variant="body2" color="text.secondary">
            <br />$ {item.price} .-
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Link to={`/itemDetail/${item.id}`}>
          <Button size="small" variant="outlined">
            Ver detalle
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
