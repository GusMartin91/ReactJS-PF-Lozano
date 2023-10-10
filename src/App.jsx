import { Navbar } from "./components/layout/navbar/Navbar";
import { Home } from "./components/pages/home/Home";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import { Footer } from "./components/layout/footer/Footer";
import customTheme from "./themeConfig";
import { ThemeProvider } from "@emotion/react";
import ItemDetailContainer from "./components/pages/itemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <Navbar />
      <Home />
      <br />
      {/* <ItemListContainer /> */}
      <ItemDetailContainer />
      <br />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
