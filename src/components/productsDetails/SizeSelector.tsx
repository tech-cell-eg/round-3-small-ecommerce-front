type SizeSelectorProps = {
  sizes: string[];
  selectedSize: string;
  onSelectSize: (size: string) => void;
};

const SizeSelector = ({
  sizes,
  selectedSize,
  onSelectSize,
}: SizeSelectorProps) => {
  return (
    <div className="flex gap-2">
      {sizes.map((size) => (
        <button
          key={size}
          className={`w-8 h-8 p-2 flex items-center justify-center border rounded text-sm transition-all  cursor-pointer
            ${
              selectedSize === size
                ? "bg-black text-white"
                : "bg-white text-black hover:bg-gray-100"
            }`}
          onClick={() => onSelectSize(size)}
        >
          {size}
        </button>
      ))}
    </div>
  );
};

export default SizeSelector;
