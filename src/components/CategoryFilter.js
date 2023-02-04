import React, { useState } from "react";

function CategoryFilter(props) {
  const { categories, setSelectedCategory } = props;
  const [selectedCategory, setFilterSelectedCategory] = useState("All");

  function handleCategoryClick(category) {
    setSelectedCategory(category);
    setFilterSelectedCategory(category);
  }

  return (
    <div className="categories">
      {categories.map((category) => (
        <button
          key={category}
          className={category === selectedCategory ? "selected" : null}
          onClick={() => handleCategoryClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
