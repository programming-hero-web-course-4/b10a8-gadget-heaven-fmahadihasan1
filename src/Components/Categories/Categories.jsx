import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const [categoryBtn, setCategoryBtn] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategoryBtn(data))
      .catch((err) => console.error(err.message));
  }, []);

  return (
    <ul className="col-span-1 sticky top-0 flex flex-col gap-4">
      {categoryBtn.map((btn) => (
        <li key={btn.id} className="btn capitalize">
          {btn.display_name}
        </li>
      ))}
    </ul>
  );
};

export default Categories;
