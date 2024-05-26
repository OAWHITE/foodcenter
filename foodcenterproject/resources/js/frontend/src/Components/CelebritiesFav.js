import React from "react";
import Footer from "./Footer";
import { useState } from "react";
import { useNavigate } from "react-router";
import TopLeft from "./Decoration/top-left";
import TopRight from "./Decoration/top-right";
import MiddleLeft from "./Decoration/middle-left";
import MiddleRight from "./Decoration/middle-right";
import BottomLeft from "./Decoration/bottom-left";
import BottomRight from "./Decoration/bottom-right";

export default function Celebrities() {
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
    
    const coachProfiles = [
        {
        src: "https://cdn.builder.io/api/v1/image/assets/TEMP/3f61e9d3d23bb9801d274eefe2902d1e060f79703260b724169732fd636ce8e9?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&",
        name: "Aymen Ouabdelmoumen",
        experience: "1 year",
        description: `Hi, I'm Aymen Ouabdelmoumen. Let's work together to achieve your health and wellness goals through personalized fitness plans and nutrition guidance.`,
        },
        {
        src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f741d56068dcbfe5b8af8c0530caf4bd85b531e692f8b0049d50b459dc9d70d6?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&",
        name: "Aymen Ouabdelmoumen",
        experience: "1 year",
        description: `Hi, I'm Aymen Ouabdelmoumen. Let's work together to achieve your health and wellness goals through personalized fitness plans and nutrition guidance.`,
        },
    ]

    return (
    <>
        <TopLeft className="absolute z-[-1] top-[0] left-[0] w-[29%] h-[30%]" fill="#FF4081"/>
        <TopRight className="absolute z-[-1] top-[0] right-[0] w-[29%] h-[40%]" fill="#FF4081"/>
        <MiddleLeft className="absolute z-[-1] top-[87%] left-[-45%] w-[100%] h-[50%]" fill="#FF4081"/>
        <MiddleRight className="absolute z-[-1] bottom-[-55%] right-[0%] w-[10%] h-[40%]" fill="#FF4081"/>
        {/* <BottomLeft className="absolute z-[-1] bottom-[-220%] left-[0%] w-[10%] h-[70%]" fill="#FF4081"/> */}
        {/* <BottomRight className="absolute z-[-1] bottom-[-290%] right-[0%] w-[40%] h-[70%]" fill="#FF4081"/> */}
        <section className="search-section">
            <form className="flex gap-5 max-md:flex-col max-md:gap-0 pb-5" onSubmit={handleSubmit}>
                <div className="flex flex-col w-full">
                <label className="text-lg font-medium"> Name </label>
                <input className="justify-center p-4 mt-4 rounded-2xl border border-solid border-zinc-200" placeholder="Dwayn the Rock" onChange={(e) => setQuery(e.target.value)}/>
                </div>
                <div className="flex flex-col w-full">
                <label className="text-lg font-medium">Nationality</label>
                <input className="justify-center p-4 mt-4 rounded-2xl border border-solid border-zinc-200" placeholder="American" onChange={(e) => setQuery(e.target.value)}/>
                </div>
                <button type="submit" className="flex justify-center p-2 mt-12 w-full text-xl font-medium text-black bg-amber-500 rounded-2xl max-md:px-5 max-md:mt-10" aria-label="Search" > Search </button>
            </form>
            </section>
            <section>
                {coachProfiles.map(profile => (
                    <CoachProfile key={profile.src} {...profile} />
                ))}
            </section>
        <Footer />
    </>
    );
}

function CoachProfile({ src, name, description, experience }) {
    return (
        <section className="px-10 py-8 mt-10 w-full border border-black border-solid bg-stone-100 max-w-[1654px] rounded-[51px] shadow-[0px_4px_35px_rgba(0,0,0,0.25)] max-md:px-5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col max-md:ml-0 max-md:w-full">
                <img loading="lazy" src={src} alt={name} className="shrink-0 mx-auto mt-1.5 bg-white rounded-full aspect-square w-[233px] max-md:mt-10" />
            </div>
            <div className="flex flex-col ml-5 w-[85%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col max-md:mt-10 max-md:max-w-full">
                <p className="text-4xl text-black max-md:max-w-full">{name}</p>
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/21edca1e050a22054c2b2dc26f0876d08544a32b7f49e61ff4f2439a68e1d5bf?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&" alt="" className="mt-5 max-w-full aspect-[6.67] w-[221px]" />
                <p className="mt-6 font-bold max-md:max-w-full">experience: {experience}</p>
                <p className="mt-12 max-md:mt-10 max-md:max-w-full">{description}</p>
                </div>
            </div>
            </div>
        </section>
    );
}