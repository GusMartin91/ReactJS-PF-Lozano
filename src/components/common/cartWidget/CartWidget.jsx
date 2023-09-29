import * as React from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

let cantCarrito = 123;

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -10,
    top: 0,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "9px 6px",
  },
}));

const CartWidget = () => {
  return (
    <IconButton color="tertiary" aria-label="cart">
      <StyledBadge badgeContent={cantCarrito} color="secondary" max={99}>
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
};

export default CartWidget;
