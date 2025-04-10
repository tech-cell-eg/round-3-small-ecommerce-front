import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import SupportPage from "./pages/Support Page ";
import { useEffect, useRef } from "react";
import { Toast } from "primereact/toast";
import { useAppDispatch, useAppSelector } from "./redux/reduxHooks";
import { clearToast } from "./redux/slices/toastSlice";

function App() {
  const toastRef = useRef<Toast>(null);
  const toastMessage = useAppSelector((state) => state.toast.message);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (toastMessage) {
      toastRef.current?.show({
        severity: toastMessage.severity,
        summary: toastMessage.summary,
        detail: toastMessage.detail,
      });

      dispatch(clearToast());
    }
  }, [toastMessage, dispatch]);

  return (
    <>
      <Toast ref={toastRef} position="top-right" />
      <BrowserRouter basename="/round-3-small-ecommerce-front">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetail />} />

            <Route path="/Support" element={<SupportPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
