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

    return (
    <>
        <TopLeft className="absolute z-[-1] top-[0] left-[0] w-[29%] h-[30%]" fill="#FF4081"/>
        <TopRight className="absolute z-[-1] top-[0] right-[0] w-[29%] h-[40%]" fill="#FF4081"/>
        <MiddleLeft className="absolute z-[-1] top-[87%] left-[-45%] w-[100%] h-[50%]" fill="#FF4081"/>
        <MiddleRight className="absolute z-[-1] bottom-[-55%] right-[0%] w-[10%] h-[40%]" fill="#FF4081"/>
        <BottomLeft className="absolute z-[-1] bottom-[-220%] left-[0%] w-[10%] h-[70%]" fill="#FF4081"/>
        <BottomRight className="absolute z-[-1] bottom-[-275%] right-[0%] w-[40%] h-[70%]" fill="#FF4081"/>
        <div className="flex flex-col pb-5 mt-10">
            <div className="flex flex-col items-center px-20 mt-0 w-full max-md:px-5 max-md:mt-0 max-md:max-w-full">
            <p className="mt-28 text-7xl text-neutral-800 max-md:mt-10 max-md:max-w-full max-md:text-4xl">Discover the Favorites of the Stars!</p>
                <section className="search-section mt-20">
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
                <p className="self-start mt-28 text-4xl text-neutral-800 max-md:mt-10 max-md:ml-2.5">Popular Celebrities :</p>
                <section class="mt-5">
                    <section class="flex flex-col pt-7 pr-20 pb-8 pl-7 mt-16 border border-black border-solid bg-stone-100 rounded-[51px] shadow-[0px_4px_35px_rgba(0,0,0,0.25)] max-md:px-5 max-md:mt-10 max-md:max-w-full">
                        <div class="flex gap-5 text-5xl font-bold tracking-wide leading-6 text-center text-orange-400 whitespace-nowrap">
                            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0fa8324436b2442f213aab804bca29f3f776358f0302cf6fbeeaf3e879ef9cb9?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&;" class="shrink-0 w-24 aspect-[1.09] fill-orange-400 fill-opacity-50" alt="" />
                            <div class="flex-auto my-auto">Introduction</div>
                        </div>
                        <p class="mt-14 text-3xl text-neutral-800 max-md:mt-10 max-md:max-w-full">Food Center is your ultimate destination for culinary exploration, personalized meals, and vibrant community engagement. Our platform is designed to inspire, educate, and connect food enthusiasts from all around the globe.</p>
                    </section>
                    <section class="flex flex-col pt-7 pr-20 pb-8 pl-7 mt-16 border border-black border-solid bg-stone-100 rounded-[51px] shadow-[0px_4px_35px_rgba(0,0,0,0.25)] max-md:px-5 max-md:mt-10 max-md:max-w-full">
                        <div class="flex gap-5 text-5xl font-bold tracking-wide leading-6 text-center text-orange-400 whitespace-nowrap">
                            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/82d0fcff662d5cebfa595ea4492a7115ad3c2c6cdf73ff85ea47cfea4def5dad?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&;" class="shrink-0 w-24 aspect-[1.09] fill-orange-400 fill-opacity-50" alt="" />
                            <div class="flex-auto my-auto">Mission</div>
                        </div>
                        <p class="mt-14 text-3xl text-neutral-800 max-md:mt-10 max-md:max-w-full">Encourage diverse eating habits, promote health and well-being, foster culinary creativity, and facilitate commercial opportunities for our users.</p>
                    </section>
                    <section class="flex flex-col pt-7 pr-20 pb-8 pl-7 mt-16 border border-black border-solid bg-stone-100 rounded-[51px] shadow-[0px_4px_35px_rgba(0,0,0,0.25)] max-md:px-5 max-md:mt-10 max-md:max-w-full">
                        <div class="flex gap-5 text-5xl font-bold tracking-wide leading-6 text-center text-orange-400 whitespace-nowrap">
                            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0990c80f146d5960bdc1e3cb7dcadc2bcaef8084bdd2901f4198da6c52ef84a2?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&;" class="shrink-0 w-24 aspect-[1.09] fill-orange-400 fill-opacity-50" alt="" />
                            <div class="flex-auto my-auto">Values</div>
                        </div>
                        <p class="mt-14 text-3xl text-neutral-800 max-md:mt-10 max-md:max-w-full">
                            Diversity: Embrace a rich tapestry of flavors and cultures.
                            Health: Nourish your body and mind with wholesome choices.
                            Community: Connect with fellow food enthusiasts and share your passion.
                            Creativity: Unleash your culinary imagination and innovate with ingredients.
                            Collaboration: Join forces with others to create something greater than the sum of its parts.
                        </p>
                    </section>
                    <section class="flex flex-col pt-7 pr-20 pb-8 pl-7 mt-16 border border-black border-solid bg-stone-100 rounded-[51px] shadow-[0px_4px_35px_rgba(0,0,0,0.25)] max-md:px-5 max-md:mt-10 max-md:max-w-full">
                        <div class="flex gap-5 text-5xl font-bold tracking-wide leading-6 text-center text-orange-400 whitespace-nowrap">
                            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/786881a377ac090f0e7cde4681a57ea443661fa567a10a13828220114d7ef1ce?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&;" class="shrink-0 w-24 aspect-[1.09] fill-orange-400 fill-opacity-50" alt="" />
                            <div class="flex-auto my-auto">Founders</div>
                        </div>
                        <p class="mt-14 text-3xl text-neutral-800 max-md:mt-10 max-md:max-w-full">
                            - Kaamouchi Fadi: Culinary Enthusiast<br/>
                            - Ouabdelmoumen Aymen: Tech Innovator
                        </p>
                    </section>
                    <section class="flex flex-col pt-7 pr-20 pb-8 pl-7 mt-16 border border-black border-solid bg-stone-100 rounded-[51px] shadow-[0px_4px_35px_rgba(0,0,0,0.25)] max-md:px-5 max-md:mt-10 max-md:max-w-full">
                        <div class="flex gap-5 text-5xl font-bold tracking-wide leading-6 text-center text-orange-400 whitespace-nowrap">
                            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/614d8ab29c92cbbc45773aea9ba00361426809169620587777f25f15f8b59dd4?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&;" class="shrink-0 w-24 aspect-[1.09] fill-orange-400 fill-opacity-50" alt="" />
                            <div class="flex-auto my-auto">Highlight</div>
                        </div>
                        <p class="mt-14 text-3xl text-neutral-800 max-md:mt-10 max-md:max-w-full">
                        Explore meals from every corner of the world.
                        Personalize recipes based on your preferences and dietary needs.
                        Access detailed nutritional information for informed choices.
                        Engage with a vibrant community through comments, recipe sharing, and challenges.
                        Unlock commercial opportunities by monetizing your culinary skills.
                        </p>
                    </section>
                    <section class="flex flex-col pt-7 pr-20 pb-8 pl-7 mt-16 border border-black border-solid bg-stone-100 rounded-[51px] shadow-[0px_4px_35px_rgba(0,0,0,0.25)] max-md:px-5 max-md:mt-10 max-md:max-w-full">
                        <div class="flex gap-5 text-5xl font-bold tracking-wide leading-6 text-center text-orange-400 whitespace-nowrap">
                            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/614d8ab29c92cbbc45773aea9ba00361426809169620587777f25f15f8b59dd4?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&;" class="shrink-0 w-24 aspect-[1.09] fill-orange-400 fill-opacity-50" alt="" />
                            <div class="flex-auto my-auto">Customer</div>
                        </div>
                        <p class="mt-14 text-3xl text-neutral-800 max-md:mt-10 max-md:max-w-full">
                            We are committed to providing exceptional customer support. For any inquiries, assistance, or feedback, please contact us at support@foodcenter.com.
                        </p>
                    </section>
                    <section class="flex flex-col pt-7 pr-20 pb-8 pl-7 mt-16 border border-black border-solid bg-stone-100 rounded-[51px] shadow-[0px_4px_35px_rgba(0,0,0,0.25)] max-md:px-5 max-md:mt-10 max-md:max-w-full">
                        <div class="flex gap-5 text-5xl font-bold tracking-wide leading-6 text-center text-orange-400 whitespace-nowrap">
                            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d7c8756c79bb33d59ce33cca73e93fd6ac362a282c3739ef595d745c8bba6c1?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&amp;" class="shrink-0 w-24 aspect-[1.09] fill-orange-400 fill-opacity-50" alt=""/>
                            <div class="flex-auto my-auto">Contacts</div>
                        </div>
                        <p class="mt-14 text-3xl text-neutral-800 max-md:mt-10 max-md:max-w-full">
                            Email: info@foodcenter.com
                            Phone: 1-800-FOOD-CENTER
                            Follow us on social media: @foodcenter
                        </p>
                    </section>
                </section>
            </div>
        </div>
        <Footer />
    </>
    );
}