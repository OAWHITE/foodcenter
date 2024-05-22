import * as React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Flag from 'react-world-flags';
import Guide from "./Guide";
import Footer from "./Footer";
import { useState } from "react";
import { useNavigate } from "react-router";

const favorites = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/4750ed5c49da6e2ea4248c60761a33086bd7e130def86f282b3b40740174d937?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&", alt: "Bolognese Image", text: "Bolognese", calories: 297, country: "Italian", countryCode : "it"},
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/cd739cecf42e69beff7f894ff82e25687b8c5f0a144e4aad4678b83192b90038?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&", "alt": "Pelmeni Image", "text": "Pelmeni", "calories": 300, "country": "Russian", "countryCode": "ru"},
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/750efd18431c7d504f6b4567dca45d011b6d13dec16e0d6764409d4af5a2d85e?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&", "alt": "Romazava Image", "text": "Romazava", "calories": 250, "country": "Madagascan", "countryCode": "mg"},
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ca046a62429c37a5d23bb1958ac42ad182f0ee37fd489e5948612e413e1fc012?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&", "alt": "Tagine Image", "text": "Tagine", "calories": 350, "country": "Moroccan", "countryCode": "ma"},
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/0d5cafea37bc3bff98975ad2e11a4d004425e6bbc042a1b50745a23c4f6c40d7?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&", "alt": "Al Kabsa Image", "text": "Al Kabsa", "calories": 400, "country": "Saudi Arabian", "countryCode": "sa"},
    ];

const suggestions = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/4750ed5c49da6e2ea4248c60761a33086bd7e130def86f282b3b40740174d937?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&", alt: "Bolognese Image", text: "Bolognese" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/0d5cafea37bc3bff98975ad2e11a4d004425e6bbc042a1b50745a23c4f6c40d7?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&", alt: "Al Kabsa Image", text: "Al Kabsa" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/750efd18431c7d504f6b4567dca45d011b6d13dec16e0d6764409d4af5a2d85e?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&", alt: "Romazava Image", text: "Romazava" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/cd739cecf42e69beff7f894ff82e25687b8c5f0a144e4aad4678b83192b90038?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&", alt: "Pelmeni Image", text: "Pelmeni" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ca046a62429c37a5d23bb1958ac42ad182f0ee37fd489e5948612e413e1fc012?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&", alt: "Tagine Image", text: "Tagine" },
];

const bestMeals = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/4750ed5c49da6e2ea4248c60761a33086bd7e130def86f282b3b40740174d937?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&", alt: "Bolognese Image", text: "Bolognese" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/0d5cafea37bc3bff98975ad2e11a4d004425e6bbc042a1b50745a23c4f6c40d7?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&", alt: "Al Kabsa Image", text: "Al Kabsa" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/750efd18431c7d504f6b4567dca45d011b6d13dec16e0d6764409d4af5a2d85e?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&", alt: "Romazava Image", text: "Romazava" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/cd739cecf42e69beff7f894ff82e25687b8c5f0a144e4aad4678b83192b90038?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&", alt: "Pelmeni Image", text: "Pelmeni" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ca046a62429c37a5d23bb1958ac42ad182f0ee37fd489e5948612e413e1fc012?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&", alt: "Tagine Image", text: "Tagine" },
];

const responsive = {
    superLargeDesktop: {breakpoint: { max: 4000, min: 3000 },items: 5},
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3},
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2},
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1}
};

export default function Home() {

    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch(`https://api.api-ninjas.com/v1/recipe?query=${query}`, {
            headers: { 'X-Api-Key': 'Qr5QgnTWF7pCysiXAFHBNw==bPteVwm6iguFI6LI' },
        });
        const data = await response.json();
        navigate('/recettes', { state: { recipes: data } });
    };


    return (
        <>
        <main className="main-content">
            <section className="search-section">
            <form className="flex gap-5 max-md:flex-col max-md:gap-0" onSubmit={handleSubmit}>
                <div className="flex flex-col w-full">
                <label className="text-lg font-medium"> Meal or Region </label>
                <input className="justify-center p-4 mt-4 rounded-2xl border border-solid border-zinc-200" placeholder="Morocco / Tagine" onChange={(e) => setQuery(e.target.value)}/>
                </div>
                <div className="flex flex-col w-full">
                <label className="text-lg font-medium">Person</label>
                <select className="justify-center p-4 mt-4 rounded-2xl border border-solid border-zinc-200">
                    <option value="1">1 Person</option>
                    <option value="2">2 Persons</option>
                    <option value="3">3 Persons</option>
                    <option value="4">4 Persons</option>
                </select>
                </div>
                <button type="submit" className="flex justify-center p-2 mt-12 mb-auto w-full text-xl font-medium text-black bg-amber-500 rounded-2xl max-md:px-5 max-md:mt-10" aria-label="Search" > Search </button>
            </form>
            </section>
            <div className="flex flex-col pt-11 pb-5">
                <h2 className="mt-20 pl-10 text-4xl max-md:mt-10 max-md:max-w-full"> Best Meals </h2>
                <div className="flex flex-col w-full text-3xl text-teal-400 max-md:pl-5 max-md:max-w-full">
                    <Carousel responsive={responsive}>
                        {favorites.map((item, index) => (
                            <div key={index} className="flex flex-col flex-1 self-start mt-2 bg-gray-100 shadow-lg m-3">
                                <img loading="lazy" src={item.src} alt={item.alt} className="w-full aspect-[1.47] p-5"/>
                                <div className="self-start ml-12 max-md:ml-2.5">{item.text}</div>
                                <div className="relative self-start mt-9 ml-12 text-4xl font-bold text-black max-md:ml-2.5"> Calories : {item.calories} </div>
                                <div className="self-start ml-12 max-md:ml-2.5 flex my-6">
                                <Flag code={item.countryCode} className="w-12 h-12" />
                                <p className="text-black p-1 px-4">{item.country}</p>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
            <div className="flex flex-col pt-11 pb-5">
            <section className="flex flex-col w-full max-md:max-w-full">
            <h2 className="mt-20 pl-10 text-4xl max-md:mt-10 max-md:max-w-full"> Top Rated </h2>
                <div className="flex flex-col w-full text-3xl text-teal-400 max-md:pl-5 max-md:max-w-full">
                <Carousel responsive={responsive}>
                    {favorites.map((item, index) => (
                    <div key={index} className="flex flex-col flex-1 self-start mt-2 whitespace-nowrap">
                        <img loading="lazy" src={item.src} alt={item.alt} className="w-full aspect-[1.47] p-5"/>
                        <div className="self-start ml-12 max-md:ml-2.5">{item.text}</div>
                    </div>
                    ))}
                </Carousel>
                </div>
                <h2 className="mt-20 pl-10 text-4xl max-md:mt-10 max-md:max-w-full"> New Add </h2>
                <div className="flex flex-col w-full text-3xl text-teal-400 max-md:pl-5 max-md:max-w-full">
                <Carousel responsive={responsive}>
                    {suggestions.map((item, index) => (
                    <div key={index} className="flex flex-col flex-1 self-start mt-2 whitespace-nowrap">
                        <img loading="lazy" src={item.src} alt={item.alt} className="w-full aspect-[1.47] p-5"/>
                        <div className="self-start ml-12 max-md:ml-2.5">{item.text}</div>
                    </div>
                    ))}
                </Carousel>
                </div>
                <h2 className="mt-20 pl-10 text-4xl max-md:mt-10 max-md:max-w-full"> Celebrities Favorite </h2>
                <div className="flex flex-col w-full text-3xl text-teal-400 max-md:pl-5 max-md:max-w-full">
                <Carousel responsive={responsive}>
                    {bestMeals.map((item, index) => (
                    <div key={index} className="flex flex-col flex-1 self-start mt-2 whitespace-nowrap">
                        <img loading="lazy" src={item.src} alt={item.alt} className="w-full aspect-[1.47] p-5"/>
                        <div className="self-start ml-12 max-md:ml-2.5">{item.text}</div>
                    </div>
                    ))}
                </Carousel>
                </div>
            </section>
            </div>
            <Guide />
            <Footer />
        </main>
            {/* <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/95187fc5bfdec07615f6bf49d8128bbdcb41d80229de48525bf2de25f0c47991?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&" alt="" className="aspect-[0.34] fill-teal-400 w-[219px] background" /> */}
            {/* <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a61ea7521ab66ff303bbb32e01183e038729cbe73f024754aad83cb39465737e?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&" alt="" className="aspect-[0.4] fill-teal-400 w-[210px]" background" /> */}
            {/* <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2990b538328b94c8a6268a02c86291390e604746866d67b9230de13f65ff672c?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&" alt="" className="aspect-[0.23] fill-teal-400 background" /> */}
        </>
    );
}