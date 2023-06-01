import { fetchCategories } from "../api";
import { useState, useEffect } from "react";
import CategoryCard from "./CategoryCard";

function CategoryList() {
  const [currentCategories, setCurrentCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchCategories().then((categories) => {
      setCurrentCategories(categories);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <section>
      <h2>All categories</h2>
      <ul className="category-list">
        {currentCategories.map((category, index) => {
          return <CategoryCard key={index} category={category} />;
        })}
      </ul>
    </section>
  );
}

export default CategoryList;
