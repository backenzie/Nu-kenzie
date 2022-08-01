import { Header } from "./components/Header";
import { useEffect, useState } from "react";
import { DivMain } from "./components/DivMain";
import { api } from "./services/api";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    api.get("").then((response) => setProducts(response.data));
  }, []);

  return (
    <div className="App">
      <Header></Header>
      <DivMain
        products={products}
        setProducts={setProducts}
        filteredProducts={filteredProducts}
        setFilteredProducts={setFilteredProducts}
        currentSale={currentSale}
        setCurrentSale={setCurrentSale}
        cartTotal={cartTotal}
        setCartTotal={setCartTotal}
      ></DivMain>
    </div>
  );
}

export default App;
