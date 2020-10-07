import React from 'react';
const Recipe =({title,calories,image,ingredients})=>{
return(
    <div>
<h1>{title}</h1>

<img src = {image} alt =""/>

{ingredients.map(ingredient => (
<p> {ingredient.text}</p>

))}


<p>{calories}</p>

    </div>



);

}
export  default Recipe;