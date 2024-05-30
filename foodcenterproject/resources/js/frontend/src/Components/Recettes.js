import React, { useState } from 'react';
import { useNavigate } from "react-router";
import { useLocation } from 'react-router-dom';

export default function Recettes() {
    const location = useLocation();
    const { recipes, person, image } = location.state;
    const navigate = useNavigate();
    const [selectedId, setSelectedId] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null); // Add this state

    const handleSectionClick = async (id, image) => {
        setSelectedId(id);
        setSelectedImage(image); // Set the selected image
        const responseRecipe = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=4905c962a9844760a60cf260e9b977a8`);
        const responseCalories = await fetch(`https://api.spoonacular.com/recipes/${id}/nutritionWidget.json?apiKey=4905c962a9844760a60cf260e9b977a8`);
        const Recipe = await responseRecipe.json();
        const Calories = await responseCalories.json();
        navigate('/recette', { state: { recipe: Recipe, calories: Calories, image } }); // Include image in navigate state
    };

    return (
        <div>
            <h1>Recipes</h1>
            {recipes.results.map((recipe, index) => (
                <section
                    key={index}
                    className="px-16 py-10 mt-20 border border-black border-solid bg-stone-100 rounded-[51px] shadow-[0px_4px_35px_rgba(0,0,0,0.25)] max-md:px-5 max-md:max-w-full"
                    onClick={() => handleSectionClick(recipe.id, recipe.image)} // Pass image to handleSectionClick
                >
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        <figure className="flex flex-col w-[28%] max-md:ml-0 max-md:w-full">
                            <img
                                loading="lazy"
                                src={recipe.image}
                                alt={recipe.title}
                                className="grow w-full aspect-[1.82] max-md:mt-10 max-md:max-w-full rounded-3xl"
                            />
                        </figure>
                        <article className="flex flex-col ml-5 w-[72%] max-md:ml-0 max-md:w-full">
                            <header className="flex flex-col mt-4 max-md:mt-10 max-md:max-w-full">
                                <h2 className="text-3xl text-stone-700">{recipe.title}</h2>
                            </header>
                        </article>
                    </div>
                </section>
            ))}
        </div>
    );
}