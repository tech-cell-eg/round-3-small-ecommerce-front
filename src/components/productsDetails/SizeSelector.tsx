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
    <div className="flex gap-2 w-full justify-between">
      {sizes.map((size) => (
        <button
          key={size}
          className={`w-full py-2 lg:px-3 lg:w-auto flex items-center justify-center border rounded-4xl text-[12px] transition-all cursor-pointer border-custom-white-95
            ${
              selectedSize === size
                ? "bg-black text-white"
                : "bg-custom-white-97 text-black hover:bg-gray-100"
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
