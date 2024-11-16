import { useEffect, useState } from "react";

const Categories = ({ dataAccordingToCategory }) => {
  const [categoryBtn, setCategoryBtn] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategoryBtn(data))
      .catch((err) => console.error(err.message));
  }, []);

  return (
    <ul
      role="tablist"
      className="tabs tabs-bordered col-span-1 sticky top-0 flex items-center flex-col gap-4 text-left"
    >
      {categoryBtn.map((btn, idx) => (
        <input
          key={btn.id}
          type="radio"
          name="my_tabs_1"
          role="tab"
          onClick={() => dataAccordingToCategory(btn.name)}
          className="btn capitalize rounded-xl w-full"
          aria-label={btn.display_name}
          defaultChecked={idx === 0}
        />
      ))}
    </ul>
  );
};

export default Categories;
