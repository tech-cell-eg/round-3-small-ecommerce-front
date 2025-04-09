import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import SupportPage from "./pages/Support Page ";

function App() {
  return (
    <BrowserRouter basename="/round-3-small-ecommerce-front">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="/productsDetails" element={<ProductDetail />} />
          <Route path="/Support" element={<SupportPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
