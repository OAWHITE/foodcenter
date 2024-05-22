import React from 'react';
import { useNavigate } from "react-router";
import { useLocation } from 'react-router-dom';

export default function Recettes () {
    const location = useLocation();
    const { recipes, person } = location.state;

    return (
        <div>
            <h1>Recipes</h1>
            <ul>
                {recipes.map((recipe, index) => (
                    <li key={index}>
                        <a href={`/recette?title=${encodeURIComponent(recipe.title)}`} state={{ recipe, person }}>
                            {recipe.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};