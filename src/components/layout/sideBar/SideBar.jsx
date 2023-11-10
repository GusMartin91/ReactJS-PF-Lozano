import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import "./SideBar.css";
import { useEffect, useState } from "react";
import { db } from "../../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const SideBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const categoriesCollection = collection(db, "categories");
    getDocs(categoriesCollection)
      .then((res) => {
        let arrayCategories = res.docs.map((category) => {
          return { ...category.data(), id: category.id };
        });
        setCategories(arrayCategories);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Grid>
      <ul className="listaNavBar">
        <p className="pLista">FILTROS</p>
        <p className="pLista">Categorias:</p>
        <Link to={`/`}>
          <li>Todos</li>
        </Link>
        {categories.map((category) => (
          <Link key={category.id} to={category.path}>
            <li>{category.name}</li>
          </Link>
        ))}
        <br />
        <p className="pLista">Ordenar por:</p>
        <Link to={`/ordenPrecio/menor`}>
          <li>Menor Precio</li>
        </Link>
        <Link to={`/ordenPrecio/mayor`}>
          <li>Mayor Precio</li>
        </Link>
      </ul>
    </Grid>
  );
};

export default SideBar;
