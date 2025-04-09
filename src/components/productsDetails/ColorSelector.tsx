type Color = {
  name: string;
  value: string;
};

type ColorSelectorProps = {
  colors: Color[];
  selectedColor: string;
  onSelectColor: (color: string) => void;
  onSelectValue?: (value: string) => void;
};

const ColorSelector = ({
  colors,
  selectedColor,
  onSelectColor,
  onSelectValue,
}: ColorSelectorProps) => {
  function handleClick(color: Color) {
    if (onSelectValue) {
      onSelectValue(color.value);
      onSelectColor(color.name);
      console.log(color.value);
    } else {
      onSelectColor(color.name);
    }
  }

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
          onClick={() => handleClick(color)}
          aria-label={`Select ${color.name} color`}
        />
      ))}
    </div>
  );
};

export default ColorSelector;
