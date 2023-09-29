import { Navbar } from "./components/layout/navbar/Navbar";
import { Home } from "./components/pages/home/Home";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import { Footer } from "./components/layout/footer/Footer";
import CounterContainer from "./components/common/counter/CounterContainer";
import { useState } from "react";
import { Button, Stack } from "@mui/material";
import customTheme from "./themeConfig";
import { ThemeProvider } from "@emotion/react";

function App() {
  let usuario = "GusLozano";
  let edad = 32;
  const [montar, setMontar] = useState(false);

  return (
    <ThemeProvider theme={customTheme}>
      <Navbar />
      <Home />
      <br />
      <Stack direction="row" justifyContent={"center"}>
        <Button
          color="secondary"
          variant="contained"
          onClick={() => setMontar(!montar)}
        >
          Montar / Desmontar
        </Button>
      </Stack>
      <br />
      <ItemListContainer usuario={usuario} edad={edad} />
      <br />
      {montar && <CounterContainer stock={7} />}
      <br />
      {montar && <CounterContainer stock={9} />}
      <br />
      {montar && <CounterContainer stock={4} />}
      <Footer />
    </ThemeProvider>
  );
}

export default App;
