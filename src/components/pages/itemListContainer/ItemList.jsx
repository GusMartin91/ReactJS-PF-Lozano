import { Container, Grid } from "@mui/material";
import ProductCard from "../../common/productCard/ProductCard";

const ItemList = ({ items }) => {
  return (
    <Container>
      <Grid container sx={{ justifyContent: "space-around", rowGap: 6 }}>
        {items.map((item) => {
          return (
            <Grid key={item.id} item sx={{ maxWidth: "333px" }}>
              <ProductCard item={item} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default ItemList;
