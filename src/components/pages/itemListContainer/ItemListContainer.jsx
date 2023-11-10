import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import {
  getDocs,
  collection,
  query,
  where,
  addDoc,
  orderBy,
} from "firebase/firestore";
import { db } from "../../../firebaseConfig";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { category } = useParams();
  const { precio } = useParams();
  useEffect(() => {
    let productsCollection = collection(db, "products");
    let consulta;
    if (!category) {
      consulta = productsCollection;
    } else {
      consulta = query(productsCollection, where("category", "==", category));
    }
    if (precio === "menor") {
      consulta = query(consulta, orderBy("price", "asc"));
    } else if (precio === "mayor") {
      consulta = query(consulta, orderBy("price", "desc"));
    }

    getDocs(consulta).then((res) => {
      let productsArr = res.docs.map((product) => {
        return { ...product.data(), id: product.id };
      });
      setItems(productsArr);
    });
  }, [category, precio]);

  return <ItemList items={items} />;
};

export default ItemListContainer;
