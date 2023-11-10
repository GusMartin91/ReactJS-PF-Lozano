import CartListContainer from "../components/pages/cart/CartListContainer"
import CheckoutFormik from "../components/pages/checkoutFormik/CheckoutFormik"
import ItemDetailContainer from "../components/pages/itemDetailContainer/ItemDetailContainer"
import ItemListContainer from "../components/pages/itemListContainer/ItemListContainer"

export const routes = [
    {
        id: "home",
        path: "/",
        Element: ItemListContainer,
    },
    {
        id: "category",
        path: "/category/:category",
        Element: ItemListContainer,
    },
    {
        id: "order",
        path: "/ordenPrecio/:precio",
        Element: ItemListContainer,
    },
    {
        id: "cart",
        path: "/cart",
        Element: CartListContainer,
    },
    {
        id: "detail",
        path: "/itemDetail/:id",
        Element: ItemDetailContainer,
    },
    {
        id: "checkout",
        path: "/checkout",
        Element: CheckoutFormik,
    }
]