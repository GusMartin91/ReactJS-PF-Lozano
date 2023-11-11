import * as React from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -10,
    top: 0,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "9px 6px",
  },
}));

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  return (
    <Link to="/cart">
      <IconButton color="tertiary" aria-label="cart">
        <StyledBadge
          badgeContent={cart.length}
          showZero
          color="secondary"
          max={99}
        >
          <ShoppingCartIcon sx={{ fontSize: 30 }} />
        </StyledBadge>
      </IconButton>
    </Link>
  );
};

export default CartWidget;
