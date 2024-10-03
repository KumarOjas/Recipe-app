import React, { useState } from 'react';

const AddRecipe = ({ onAdd }) => {
    const [name, setName] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd({
            name,
            ingredients: ingredients.split(',').map(item => item.trim()),
            instructions,
        });
        setName('');
        setIngredients('');
        setInstructions('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Recipe</h2>
            <input
                type="text"
                placeholder="Recipe Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Ingredients (comma separated)"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
                required
            />
            <textarea
                placeholder="Instructions"
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
                required
            ></textarea>
            <button type="submit">Add Recipe</button>
        </form>
    );
};

export default AddRecipe;
