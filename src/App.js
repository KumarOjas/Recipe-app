import React, { useState } from 'react';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import AddRecipe from './components/AddRecipe';

const App = () => {
    const [recipes, setRecipes] = useState([]);
    const [selectedRecipe, setSelectedRecipe] = useState(null);

    const addRecipe = (recipe) => {
        setRecipes([...recipes, recipe]);
    };

    return (
        <div className="App">
            <h1>Recipe App</h1>
            <AddRecipe onAdd={addRecipe} />
            <RecipeList recipes={recipes} onSelect={setSelectedRecipe} />
            <RecipeDetail recipe={selectedRecipe} />
        </div>
    );
};

export default App;
