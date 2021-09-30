import { useEffect, useState } from "react";
import SubCategory from "./Subcategory";

export default function Search({ search, Data }) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      let result = [];
      for (let i = 0; i < Data.length; i++) {
        const filtered = Data[i].recipies.filter((recipe) =>
          recipe.recipename.toLowerCase().includes(search)
        );
        result = [...result, ...filtered];
      }

      setResults(result);
    }, 400);

    return () => {
      clearTimeout(timer);
    };
  }, [search, Data]);

  return <SubCategory data={{ recipies: results }} />;
}
