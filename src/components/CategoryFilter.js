import React from "react";

function CategoryFilter({categories: category, handleFilterTasks}) {
  //setting state for button being active or inactive
  const [active, setActive] = React.useState("All");

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {category.map((ctgry) => (
        <button
          className={ctgry === active ? "selected" : ""}
          key={ctgry}
          onClick={()=>{
            handleFilterTasks(ctgry);
            setActive(ctgry);
          }}
          >{ctgry}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
