import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <BrowserRouter basename="/round-3-small-ecommerce-front">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
