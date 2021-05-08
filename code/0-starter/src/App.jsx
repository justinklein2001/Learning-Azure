import React from 'react';
import RecipeTitle from './RecipeTitle'
import './index.css'

function App() {
    //<RecipeTitle /> Calls the react that is in RecipeTitle.jsx
    return (
        <article>
            <h1>Recipe Manager</h1>
            <RecipeTitle />
        </article>
    )
}

export default App;