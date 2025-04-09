import { useState } from "react";

import { ShoppingCart } from "lucide-react";

import ProductImageGallery from "../components/productsDetails/ProductImageGallery";
import ColorSelector from "../components/productsDetails/ColorSelector";
import SizeSelector from "../components/productsDetails/SizeSelector";
import ShippingInfo from "../components/productsDetails/ShippingInfo";
import FeaturesList from "../components/productsDetails/FeaturesList";

import img from "../assets/Images/ProductsImage/Image .png";
import img1 from "../assets/Images/ProductsImage/image 1.png";
import img2 from "../assets/Images/ProductsImage/image 2.png";
import img3 from "../assets/Images/ProductsImage/image 3.png";
import Reviews from "../components/productsDetails/Reviews";
import ProductPanels from "../components/productsDetails/ProductPanels";

// Mock product data
const productData = {
  id: 1,
  name: "Urban Explorer Denim Jacket",
  category: "Men's Casual Outerwear",
  price: 69.99,
  label: "12 Left!",
  description:
    "A classic denim jacket with modern design elements. Perfect for everyday wear.",

  colors: [
    { name: "Black", value: "#000000" },
    { name: "Khaki", value: "#d4be8d" },
    { name: "Olive", value: "#6e7e58" },
  ],
  sizes: ["S", "M", "L", "XL", "XXL"],
  material: "High-Quality Denim (100% Cotton)",
  fit: "Classic Fit",
  shipping: [
    "Standard shipping: 3-5 business days",
    "Express shipping options available at checkout",
  ],
  features: [
    "Distressed detailing for a rugged look",
    "Button-up front closure with engraved metal buttons",
    "Two side pockets for added functionality",
    "Adjustable buttoned cuffs for a personalized fit",
    "Back waist tabs for customizable styling",
  ],
};

const ProductDetail = () => {
  const [selectedColor, setSelectedColor] = useState(
    productData.colors[0].name
  );
  const [selectedSize, setSelectedSize] = useState(productData.sizes[1]);
  const productImages = [img, img1, img2, img3];

  return (
    <main className="max-w-7xl mx-auto px-4 py-8 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {/* Product Images */}
        <ProductImageGallery images={productImages} alt={productData.name} />

        {/* Product Details */}
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-2">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-1 mb-1">
                <p className="text-gray-500 text-sm">{productData.category}</p>
                {productData.label && (
                  <span className="bg-[#FFE566] text-xs px-1 py-0.5 rounded-full text-black font-medium">
                    {productData.label}
                  </span>
                )}
              </div>
              <div>
                <h1 className="text-2xl font-semibold">{productData.name}</h1>
                <p className="text-2xl font-bold mt-2">
                  ${productData.price.toFixed(2)}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {/* Buy Now Button */}
              <button className="p-4 w-44 h-14 bg-black text-white text-sm font-medium rounded-full border-2 hover:bg-gray-800 transition-all">
                Buy Now
              </button>

              {/* Add to Cart Button */}
              <button className="p-4 w-44 h-14 text-black text-sm font-medium rounded-full border-2 border-gray-300 flex items-center justify-center gap-2 hover:bg-gray-100 transition-all">
                <ShoppingCart className="h-4 w-4" />
                Add to cart
              </button>
            </div>
          </div>
          <div className="border border-[#F1F1F3]  p-7 rounded-4xl">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-medium mb-2">Material</h3>
                <p className="text-sm text-gray-500 ">{productData.material}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-2">Fit</h3>
                <p className="text-sm text-gray-500">{productData.fit}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-3">
              <div>
                <h3 className="text-sm font-medium mb-2">Color</h3>
                <ColorSelector
                  colors={productData.colors}
                  selectedColor={selectedColor}
                  onSelectColor={setSelectedColor}
                />
              </div>

              <div>
                <h3 className="text-sm font-medium mb-2">Sizes</h3>
                <SizeSelector
                  sizes={productData.sizes}
                  selectedSize={selectedSize}
                  onSelectSize={setSelectedSize}
                />
              </div>
            </div>
          </div>

          <div className="border border-[#F1F1F3] p-7 rounded-4xl">
            <h3 className="text-sm font-medium mb-2">Shipping Information</h3>
            <ShippingInfo shippingDetails={productData.shipping} />
          </div>

          <div className="border border-[#F1F1F3] p-7 rounded-4xl">
            <h3 className="text-sm font-medium mb-2  ">Features</h3>

            <FeaturesList features={productData.features} />
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <Reviews />

      {/* FAQ Section */}
      <ProductPanels />
    </main>
  );
};

export default ProductDetail;
