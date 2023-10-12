import { Navbar } from "./components/layout/navbar/Navbar";
import { Home } from "./components/pages/home/Home";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import { Footer } from "./components/layout/footer/Footer";
import customTheme from "./themeConfig";
import { ThemeProvider } from "@emotion/react";
import ItemDetailContainer from "./components/pages/itemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartListContainer from "./components/pages/cart/CartListContainer";

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <>
                <Navbar />
                <Footer />
              </>
            }
          >
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/category/:categoryName"
              element={<ItemListContainer />}
            />
            <Route path="/cart" element={<CartListContainer />} />
            <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
          </Route>
          <Route path="*" element={<h1>Error 404 Not Found!</h1>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
