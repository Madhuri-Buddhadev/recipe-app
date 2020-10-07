import React,{useEffect,useState} from 'react';
import Recipe from "./Recipe";
import './App.css';
const App =()=>{
  const  APP_ID ='f5d7b6b4';
  const APP_KEY ='0425f0901613691cf67069b51632c54c';
  const [recipes,setRecipies] = useState([]);
  const [search,setSearch]=useState("");
  const [query,setQuery] =useState('watermelon')
  useEffect(()=>{
    getRecipies();
     
    },[query]
  );
const getRecipies = async () =>{
  const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
const data = await response.json();
setRecipies(data.hits);


};
const updateSearch= e => {
setSearch(e.target.value)


};
const getSearch = e =>{
e.preventDefault();
setQuery(search);
setSearch('');
}

return(
<div className ="App">
  <form className="search-form" onSubmit = {getSearch}>
    <input className = "search-bar" type ="text" value={search}  onChange={updateSearch}/>
    
    <button className = "search-button" type ="submit"> search </button>
    </form>
    {
      recipes.map(recipe => (
<Recipe 
key ={recipe.recipe.label} 
title ={recipe.recipe.label}
 calories={recipe.recipe.calories} 
 image ={recipe.recipe.image}
 ingredients={recipe.recipe.ingredients}
 />

      ))
    }
</div>

);

};

export default App;
