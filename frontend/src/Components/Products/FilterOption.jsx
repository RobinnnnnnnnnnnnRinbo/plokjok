import React from "react";
import { assets } from "../../assets/assets";

const FilterOption = ({ sortBy, setSortBy }) => {
  return (
    <div className="flex bg-white p-4 justify-between">
      <div className="flex gap-2 text-sm items-center font-semibold">
        <img src={assets.filterM} className="h-6" alt="" />
        <span>Filter Option</span>
      </div>
      <div className="flex items-center">
        <span className="text-sm px-1">Sort by:</span>
        <select
          className="text-xs border border-gray-400 text-gray-500 rounded-full p-1 text-center"
          name=""
          id=""
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="name">Name Aa-Zz</option>
          <option value="p-l-h">Price: Ascending</option>
          <option value="p-h-l">Price: Descending</option>
          <option value="stock">Stock</option>
        </select>
      </div>
    </div>
  );
};

export default FilterOption;
