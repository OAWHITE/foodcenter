import React from 'react';
import { useLocation } from 'react-router-dom';
import TopLeft from "./Decoration/top-left";
import TopRight from "./Decoration/top-right";
import MiddleLeft from "./Decoration/middle-left";
import MiddleRight from "./Decoration/middle-right";
import BottomLeft from "./Decoration/bottom-left";
import BottomRight from "./Decoration/bottom-right";
import Footer from './Footer';
import Carousel from 'react-multi-carousel';

export default function Recette() {
    const bestMeals = [
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/4750ed5c49da6e2ea4248c60761a33086bd7e130def86f282b3b40740174d937?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&", alt: "Bolognese Image", text: "Bolognese" },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/0d5cafea37bc3bff98975ad2e11a4d004425e6bbc042a1b50745a23c4f6c40d7?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&", alt: "Al Kabsa Image", text: "Al Kabsa" },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/750efd18431c7d504f6b4567dca45d011b6d13dec16e0d6764409d4af5a2d85e?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&", alt: "Romazava Image", text: "Romazava" },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/4750ed5c49da6e2ea4248c60761a33086bd7e130def86f282b3b40740174d937?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&", alt: "Bolognese Image", text: "Bolognese" },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/0d5cafea37bc3bff98975ad2e11a4d004425e6bbc042a1b50745a23c4f6c40d7?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&", alt: "Al Kabsa Image", text: "Al Kabsa" },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/750efd18431c7d504f6b4567dca45d011b6d13dec16e0d6764409d4af5a2d85e?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&", alt: "Romazava Image", text: "Romazava" },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/4750ed5c49da6e2ea4248c60761a33086bd7e130def86f282b3b40740174d937?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&", alt: "Bolognese Image", text: "Bolognese" },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/0d5cafea37bc3bff98975ad2e11a4d004425e6bbc042a1b50745a23c4f6c40d7?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&", alt: "Al Kabsa Image", text: "Al Kabsa" },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/750efd18431c7d504f6b4567dca45d011b6d13dec16e0d6764409d4af5a2d85e?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&", alt: "Romazava Image", text: "Romazava" },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/4750ed5c49da6e2ea4248c60761a33086bd7e130def86f282b3b40740174d937?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&", alt: "Bolognese Image", text: "Bolognese" },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/0d5cafea37bc3bff98975ad2e11a4d004425e6bbc042a1b50745a23c4f6c40d7?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&", alt: "Al Kabsa Image", text: "Al Kabsa" },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/750efd18431c7d504f6b4567dca45d011b6d13dec16e0d6764409d4af5a2d85e?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&", alt: "Romazava Image", text: "Romazava" },
    ];

    const responsive = {
        superLargeDesktop: {breakpoint: { max: 4000, min: 3000 },items: 5},
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3},
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 2},
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1}
    };

    const location = useLocation();
    const { recipe, calories } = location.state;
    console.log(recipe.id);
    return (
        <>
        <TopLeft className="absolute z-[-1] top-[0] left-[0] w-[29%] h-[30%]" fill="#00BFFF"/>
        <TopRight className="absolute z-[-1] top-[0] right-[0] w-[29%] h-[40%]" fill="#00BFFF"/>
        <MiddleLeft className="absolute z-[-1] top-[87%] left-[-45%] w-[100%] h-[50%]" fill="#00BFFF"/>
        <MiddleRight className="absolute z-[-1] bottom-[-60%] right-[0%] w-[10%] h-[40%]" fill="#00BFFF"/>
        <BottomLeft className="absolute z-[-1] bottom-[-120%] left-[0%] w-[10%] h-[70%]" fill="#00BFFF"/>
        <BottomRight className="absolute z-[-1] bottom-[-165%] right-[0%] w-[40%] h-[70%]" fill="#00BFFF"/>
        <div className="mx-auto p-5">
            <main className="box-border flex relative flex-col shrink-0 mt-5">
                <div className="flex gap-3 max-md:flex-col max-md:gap-0">
                    <section className="flex flex-col max-md:ml-0 max-md:w-full">
                        <div>
                            <img className="rounded-3xl mb-10 shadow" src={recipe.image} alt={recipe.title} /> 
                        </div>

                        <h2 className="ml-5 mt-2.5 text-2xl text-neutral-800 max-md:mt-10 ">Nutrition: </h2>
                        <div className="flex flex-col text-2xl pl-10 pr-40 py-9 w-full whitespace-nowrap shadow-2xl backdrop-blur bg-white bg-opacity-80 rounded-[52px] max-md:px-5 max-md:mt-10 mb-10">
                                <p className='p-2 bg-stone-100 my-2 rounded-3xl'>Calories: {(calories.calories / recipe.servings)}</p>
                                <p className='p-2 bg-stone-100 my-2 rounded-3xl'>Carbs: {calories.carbs}</p>
                                <p className='p-2 bg-stone-100 my-2 rounded-3xl'>Fat: {calories.fat}</p>
                                <p className='p-2 bg-stone-100 my-2 rounded-3xl'>Protein: {calories.protein}</p>
                            <div className="flex flex-col mt-12">
                                <div className="text-xl font-medium text-neutral-700">Per Serve:</div>
                                <div className="mt-2 text-3xl text-black text-opacity-80">{calories.weightPerServing.amount }g</div>
                            </div>
                        </div>
                    </section>

                    <div className="flex flex-col ml-5 max-md:ml-0 max-md:w-full">
                    <h1 className="text-4xl font-bold text-gray-800">{recipe.title}</h1>
                    <p className="mt-11 font-medium text-black max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
                        Experience the taste of traditional Palestinian Falafel, known for its crispy exterior and flavorful, herb-packed interior. Made from ground
                        chickpeas or fava beans and seasoned with spices like coriander, cumin, and garlic, these deep-fried balls or patties are perfect as an
                        appetizer, a side, or a pita filling. Embrace this versatile, vegetarian-friendly dish that brings the authentic flavors of the Middle East
                        straight to your kitchen.
                    </p>
                    <h3 className="mt-8 mb-4 text-2xl text-neutral-800 max-md:mt-10 font-bold">Ingredients:</h3>
                    <ul className="font-medium text-black max-md:mt-10 max-md:mr-2.5 max-md:max-w-full list-disc pl-8">
                    {recipe.extendedIngredients.map((ingredient, index) => (
                        <li key={index}>{ingredient.original}</li>
                    ))}
                </ul>
                    <div>
                        <h3 className="text-3xl font-bold text-gray-800 mb-4">Instructions:</h3>
                        {recipe.analyzedInstructions.length > 0 ? (
                            <ol className="list-decimal pl-8 font-medium text-black max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
                                {recipe.analyzedInstructions[0].steps.map((step, index) => (
                                    <li key={index} className="mb-2">{step.step}</li>
                                ))}
                            </ol>
                        ) : (
                            <p className="text-xl text-gray-700">Instructions not available</p>
                        )}
                    </div>
                    </div>
                </div>
            </main>
        </div>
        <div className="absolute bottom-[-120%] flex flex-col w-full text-3xl max-md:pl-5 max-md:max-w-full">
            <h2 className="mt-20 pl-10 text-4xl max-md:mt-10 max-md:max-w-full"> Celebrities Favorite </h2>
            <Carousel responsive={responsive}>
                {bestMeals.map((item, index) => (
                    <div key={index} className="flex flex-col flex-1 self-start mt-2 whitespace-nowrap">
                        <img loading="lazy" src={item.src} alt={item.alt} className="w-full aspect-[1.47] p-5"/>
                        <div className="self-start ml-12 max-md:ml-2.5">{item.text}</div>
                    </div>
                ))}
            </Carousel>
        </div>
        <Footer className="w-full absolute bottom-[-165%]"/>
    </>
    );
}