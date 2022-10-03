import React from "react";

function NewTaskForm({onTaskFormSubmit, categories: categoryList}) {
  //setting state for category and details
  const [category, setCategory] = React.useState("");
  const [details, setDetails] = React.useState("");

  //creating a new category
  const newCategories = () => {
    let newCategory = [...categoryList];
    newCategory.shift();
    return newCategory
  };

  //handling form submission
  function handleSubmit(event) {
    event.preventDefault();
    if (details === "" || category === "") {
      alert("Kindly fill out all fields");
    } else {
      onTaskFormSubmit({text: details, category});
      setDetails("");
      setCategory("");
    }
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={(event)=>setDetails(event.target.value)}/>
      </label>
      <label>
        Category
        <select name="category" onChange={(event) => setCategory(event.target.value)} value={category}>
          {/* render <option> elements for each category here */
            newCategories().map((ctgry) => (
              <option key={ctgry}>{ctgry}</option>
            ))
          }
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
