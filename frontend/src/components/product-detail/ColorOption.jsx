import { useState } from "react";

const ColorSelector = () => {
  const [selectedColor, setSelectedColor] = useState("gray");

  const colors = [
    { id: "gray", name: "Gray", value: "#8a8a8a" },
    { id: "white", name: "White", value: "#ffffff" },
    { id: "blue", name: "Blue", value: "#007AFF" },
  ];

  return (
    <div className="">
      {/* Colors */}
      <div className="flex items-center gap-3">
        <span className="text-gray-800 font-medium">Colors:</span>
        <div className="flex gap-2">
          {colors.map((color) => (
            <button
              key={color.id}
              onClick={() => setSelectedColor(color.id)}
              className={`
                w-8 h-8 rounded-full border-2 transition-all duration-200 
                hover:scale-110 focus:outline-none focus:ring-2 focus:ring-gray-400
                ${
                  selectedColor === color.id
                    ? "border-gray-800 shadow-lg"
                    : color.id === "white"
                    ? "border-gray-300"
                    : "border-transparent"
                }
              `}
              style={{ backgroundColor: color.value }}
              title={color.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default ColorSelector;
