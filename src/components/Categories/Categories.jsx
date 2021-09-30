import * as React from "react";

const Categories = ({setSeleccionCategoria}) => {
  const [categories, setCategories] = React.useState ([]);

  React.useEffect(() => {
    fetch("http://localhost:3001/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data));



  },[])

  const handleChange = (e) => {
    setSeleccionCategoria(e.target.value)
  };

  return ( 
    <div>
    <select defaultValue="" onChange={handleChange}>
      <option value="" disabled> 
        Categorias:
      </option>
      {categories?.map((category) => (
        <option value={category.id} key={category.id}>
          {category.name}
      </option>
      ))}
    </select>
    </div>
  );
  };


export default Categories;