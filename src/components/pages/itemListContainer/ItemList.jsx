import { Container, Grid } from "@mui/material";
import ProductCard from "../../common/productCard/ProductCard";
import SideBar from "../../layout/sideBar/SideBar";
const ItemList = ({ items }) => {
  return (
    <Grid
      container
      sx={{
        marginTop: "40px",
        justifyContent: "space-between",
      }}
    >
      <Grid sx={{ padding: "0 20px 20px 20px" }}>
        <SideBar />
      </Grid>
      <Grid
        item
        xs={12}
        md={10}
        container
        sx={{ justifyContent: "space-evenly", rowGap: 2 }}
      >
        {items.map((item) => {
          return (
            <Grid key={item.id} item sx={{ maxWidth: "333px" }}>
              <ProductCard item={item} />
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default ItemList;
