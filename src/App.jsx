import { Navbar } from "./components/layout/navbar/Navbar";
import { Home } from "./components/pages/home/Home";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import { Footer } from "./components/layout/footer/Footer";
import CounterContainer from "./components/common/counter/CounterContainer";

function App() {
  let usuario = "GusLozano";
  let edad = 32;
  return (
    <div>
      <Navbar />
      <Home />
      <ItemListContainer usuario={usuario} edad={edad} />
      <CounterContainer />
      <Footer />
    </div>
  );
}

export default App;
