import customTheme from "./themeConfig";
import { ThemeProvider } from "@emotion/react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import CartContextComponent from "./context/CartContext";

function App() {
  return (
    <BrowserRouter>
      <CartContextComponent>
        <ThemeProvider theme={customTheme}>
          <AppRouter />
        </ThemeProvider>
      </CartContextComponent>
    </BrowserRouter>
  );
}

export default App;
