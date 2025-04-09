import { useState } from "react";

type ProductImageGalleryProps = {
  images: string[];
  alt: string;
};

const ProductImageGallery = ({ images, alt }: ProductImageGalleryProps) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!images || images.length === 0) {
    return <div>No images available</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
      {/* Thumbnails */}
      <div className="flex gap-2 mt-1 overflow-x-auto md:flex-col md:overflow-y-auto lg:mx-10">
        {images.map((image, index) => (
          <button
            key={index}
            className={`w-[70px] h-[70px] rounded-md overflow-hidden transition-all cursor-pointer ${
              selectedImageIndex === index
                ? "border-2 border-blue-500"
                : "hover:bg-gray-200"
            }`}
            onClick={() => setSelectedImageIndex(index)}
          >
            <img src={image} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>

      {/* Main Image */}
      <div className="col-span-2 flex   rounded-lg ">
        <img
          src={images[selectedImageIndex]}
          alt={alt}
          className="w-full h-full object-contain max-h-[350px]"
        />
      </div>
    </div>
  );
};

export default ProductImageGallery;

// import { useState } from "react";

// type ProductImageGalleryProps = {
//   images: string[];
//   alt: string;
// };

// const ProductImageGallery = ({ images, alt }: ProductImageGalleryProps) => {
//   const [selectedImageIndex, setSelectedImageIndex] = useState(0);

//   if (!images || images.length === 0) {
//     return <div>No images available</div>;
//   }

//   return (
//     <div className="grid grid-cols-2 md:grid-cols-3">
//       {/* Thumbnails */}
//       <div className="flex mt-2 flex-col  md:flex-col mx-10">
//         {images.map((image, index) => (
//           <button
//             key={index}
//             className={`w-[70px] h-[70px] rounded-md overflow-hidden transition-all cursor-pointer ${
//               selectedImageIndex === index
//                 ? "border-2 border-blue-500"
//                 : "hover:bg-gray-200"
//             }`}
//             onClick={() => setSelectedImageIndex(index)}
//           >
//             <img src={image} alt={alt} className="object-cover w-full h-full" />
//           </button>
//         ))}
//       </div>

//       {/* Main Image */}
//       <div className="col-span-1 md:col-span-2 flex justify-center items-start">
//         <img
//           src={images[selectedImageIndex]}
//           alt={alt}
//           className="object-contain rounded-md w-full max-h-[400px] md:max-h-[600px]"
//         />
//       </div>
//     </div>
//   );
// };

// export default ProductImageGallery;
