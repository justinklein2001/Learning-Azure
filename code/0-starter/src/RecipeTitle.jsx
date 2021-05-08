import React from 'react';

function RecipeTitle() {
    const title = 'Mashed potatoes';
    //handlebars {} - anything in between can be JavaScript
    return (
        <h2>{ title }</h2>
    )
};
export default RecipeTitle;