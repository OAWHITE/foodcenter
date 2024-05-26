import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Recette () {
    const location = useLocation();
    const { recipe, person } = location.state;

    return (
        <div>
            <h1>{recipe.title}</h1>
            <p>{recipe.ingredients}</p>
            <p>{recipe.instructions}</p>
            <p>Servings: {person}</p>
        </div>
    );
};