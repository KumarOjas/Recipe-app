import React from 'react';

const RecipeList = ({ recipes, onSelect }) => {
    return (
        <div>
            <h2>Recipe List</h2>
            <ul>
                {recipes.map((recipe, index) => (
                    <li key={index} onClick={() => onSelect(recipe)}>
                        {recipe.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RecipeList;
