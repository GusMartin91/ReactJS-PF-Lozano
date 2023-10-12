import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../../productsMock";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { category } = useParams();
  const { precio } = useParams();

  useEffect(() => {
    let prodFiltrados = products.filter((product) =>
      category ? product.category === category : true
    );

    if (precio === "menor") {
      prodFiltrados = prodFiltrados.sort((a, b) => a.price - b.price);
    } else if (precio === "mayor") {
      prodFiltrados = prodFiltrados.sort((a, b) => b.price - a.price);
    }

    setItems(prodFiltrados);
  }, [category, precio]);

  return <ItemList items={items} />;
};

export default ItemListContainer;
