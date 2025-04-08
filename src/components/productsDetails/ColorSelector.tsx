type Color = {
  name: string;
  value: string;
};

type ColorSelectorProps = {
  colors: Color[];
  selectedColor: string;
  onSelectColor: (color: string) => void;
};

const ColorSelector = ({
  colors,
  selectedColor,
  onSelectColor,
}: ColorSelectorProps) => {
  return (
    <div className="flex gap-2">
      {colors.map((color) => (
        <button
          key={color.name}
          className={`w-6 h-6 rounded-full border transition-all cursor-pointer ${
            selectedColor === color.name
              ? "ring-2 ring-offset-2 ring-yellow-200"
              : "ring-0"
          }`}
          style={{ backgroundColor: color.value }}
          onClick={() => onSelectColor(color.name)}
          aria-label={`Select ${color.name} color`}
        />
      ))}
    </div>
  );
};

export default ColorSelector;
