import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";

function App() {
  return (
    <BrowserRouter basename="/round-3-small-ecommerce-front">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
