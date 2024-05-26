import React from "react";
import Footer from "./Footer";
import { useState } from "react";
import { useNavigate } from "react-router";
import MyIngridients from "./MyIngridients";
import TopLeft from "./Decoration/top-left";
import TopRight from "./Decoration/top-right";
import MiddleLeft from "./Decoration/middle-left";
import MiddleRight from "./Decoration/middle-right";
import BottomLeft from "./Decoration/bottom-left";
import BottomRight from "./Decoration/bottom-right";

export default function MyFridge() {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        // event.preventDefault();
        // const response = await fetch(`https://api.api-ninjas.com/v1/recipe?query=${query}`, {
        //     headers: { 'X-Api-Key': 'Qr5QgnTWF7pCysiXAFHBNw==bPteVwm6iguFI6LI' },
        // });
        // const data = await response.json();
        // navigate('/recettes', { state: { recipes: data } });
    };
    
    return (

    <>
        <TopLeft className="absolute z-[-1] top-[0] left-[0] w-[29%] h-[30%]" fill="#5CCB93"/>
        <TopRight className="absolute z-[-1] top-[0] right-[0] w-[29%] h-[40%]" fill="#5CCB93"/>
        <MiddleLeft className="absolute z-[-1] top-[87%] left-[-45%] w-[100%] h-[50%]" fill="#5CCB93"/>
        <MiddleRight className="absolute z-[-1] bottom-[-55%] right-[0%] w-[10%] h-[40%]" fill="#5CCB93"/>
        {/* <BottomLeft className="absolute z-[-1] bottom-[-220%] left-[0%] w-[10%] h-[70%]" fill="#5CCB93"/> */}
        {/* <BottomRight className="absolute z-[-1] bottom-[-290%] right-[0%] w-[40%] h-[70%]" fill="#5CCB93"/> */}
        <section className="search-section">
            <form className="flex gap-5 max-md:flex-col max-md:gap-0 pb-5" onSubmit={handleSubmit}>
                <div className="flex flex-col w-full">
                <label className="text-lg font-medium"> ingridient </label>
                <input className="justify-center p-4 mt-4 rounded-2xl border border-solid border-zinc-200" placeholder="Morocco / Tagine" onChange={(e) => setQuery(e.target.value)}/>
                </div>
                <div className="flex flex-col w-full">
                <label className="text-lg font-medium">Type</label>
                <select className="justify-center p-4 mt-4 rounded-2xl border border-solid border-zinc-200">
                    <option value="">Type</option>
                    <option value="Meat">Meat</option>
                    <option value="Vegetable">Vegetable</option>
                    <option value="Fruit">Fruit</option>
                    <option value="Other">Other</option>
                </select>
                </div>
                <button type="submit" className="flex justify-center p-2 mt-12 w-full text-xl font-medium text-black bg-amber-500 rounded-2xl max-md:px-5 max-md:mt-10" aria-label="Search" > Search </button>
            </form>
            </section>
        {/* <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/95187fc5bfdec07615f6bf49d8128bbdcb41d80229de48525bf2de25f0c47991?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&" alt="" className="aspect-[0.34] fill-teal-400 w-[219px] background" /> */}
        {/* <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a61ea7521ab66ff303bbb32e01183e038729cbe73f024754aad83cb39465737e?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&" alt="" className="aspect-[0.4] fill-teal-400 w-[210px]" background" /> */}
        {/* <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2990b538328b94c8a6268a02c86291390e604746866d67b9230de13f65ff672c?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&" alt="" className="aspect-[0.23] fill-teal-400 background" /> */}
    <MyIngridients />
    <Footer />
    </>
  );
}
