import React, { useState } from 'react';



export default function MyIngridients () {

    const ingredientsData = [
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/d3ede10094385bbf42b57d0e261aa20e3a9d98d7693fc8a4aa1bd78a957f2ec4?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&", alt: "Ingredient 1" },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/aa4a3b079b0306c1707940dfa58bd440dab53f3d6be245b954f8a1d97fa6439a?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&", alt: "Ingredient 2" },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/5098ae842e5d3c89f4f0ab7aec2ffb3d6eb4a592ab671fec7f7fde50b2c3414e?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&", alt: "Ingredient 3" },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/6896ba62e639e305c7dcf061a9f0ed31db416b4eabd1df53a445cad65093a506?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&", alt: "Ingredient 4" },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ec1c73cfc1b91586a2b5f799b04b28b47a826e7308399716f46e25b118d1b484?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&", alt: "Ingredient 5" },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/e2c17eaea4567a82fed0987a6f9fa7e7320b4748d411d50fba7054416881f73d?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&", alt: "Ingredient 6" },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/08a9ea3384665d3e3ebc23bff77b40f84ca82196aa3c32a7cebffaeaef2ae44e?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&", alt: "Ingredient 7" },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/e69cbd931d31afe290bef692ae2a8fbfdc8a8eb893cc2d71bad4580d80eec3c1?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&", alt: "Ingredient 8" },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b1795f8af1ba77ee4de8e85ac26e8a3cae1cf71074ace614d02044ca9204d0cc?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&", alt: "Ingredient 9" },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/6be5b21d11b260f8b79f71ce4d595811613bd938a761427a66a04486c2d87213?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&", alt: "Ingredient 10" },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/19cd8149fe06f849a0ed364429a5cf6915c7cdd3b2de4c4077d9a6406f35a39d?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&", alt: "Ingredient 11" },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/78041644372a702b04a6002458e51ce1e35f5800a7250d3a3f5d235c81562408?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&", alt: "Ingredient 12" },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/d3ede10094385bbf42b57d0e261aa20e3a9d98d7693fc8a4aa1bd78a957f2ec4?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&", alt: "Ingredient 14" },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/aa4a3b079b0306c1707940dfa58bd440dab53f3d6be245b954f8a1d97fa6439a?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&", alt: "Ingredient 15" },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/5098ae842e5d3c89f4f0ab7aec2ffb3d6eb4a592ab671fec7f7fde50b2c3414e?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&", alt: "Ingredient 16" },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/6896ba62e639e305c7dcf061a9f0ed31db416b4eabd1df53a445cad65093a506?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&", alt: "Ingredient 17" },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ec1c73cfc1b91586a2b5f799b04b28b47a826e7308399716f46e25b118d1b484?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&", alt: "Ingredient 18" },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/e2c17eaea4567a82fed0987a6f9fa7e7320b4748d411d50fba7054416881f73d?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&", alt: "Ingredient 19" },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/08a9ea3384665d3e3ebc23bff77b40f84ca82196aa3c32a7cebffaeaef2ae44e?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&", alt: "Ingredient 20" },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/e69cbd931d31afe290bef692ae2a8fbfdc8a8eb893cc2d71bad4580d80eec3c1?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&", alt: "Ingredient 21" },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b1795f8af1ba77ee4de8e85ac26e8a3cae1cf71074ace614d02044ca9204d0cc?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&", alt: "Ingredient 22" },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/6be5b21d11b260f8b79f71ce4d595811613bd938a761427a66a04486c2d87213?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&", alt: "Ingredient 23" },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/19cd8149fe06f849a0ed364429a5cf6915c7cdd3b2de4c4077d9a6406f35a39d?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&", alt: "Ingredient 24" },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/78041644372a702b04a6002458e51ce1e35f5800a7250d3a3f5d235c81562408?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&", alt: "Ingredient 25" },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/5098ae842e5d3c89f4f0ab7aec2ffb3d6eb4a592ab671fec7f7fde50b2c3414e?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&", alt: "Ingredient 26" },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/6896ba62e639e305c7dcf061a9f0ed31db416b4eabd1df53a445cad65093a506?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&", alt: "Ingredient 27" },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ec1c73cfc1b91586a2b5f799b04b28b47a826e7308399716f46e25b118d1b484?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&", alt: "Ingredient 28" },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/e2c17eaea4567a82fed0987a6f9fa7e7320b4748d411d50fba7054416881f73d?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&", alt: "Ingredient 29" },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/08a9ea3384665d3e3ebc23bff77b40f84ca82196aa3c32a7cebffaeaef2ae44e?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&", alt: "Ingredient 30" },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/e69cbd931d31afe290bef692ae2a8fbfdc8a8eb893cc2d71bad4580d80eec3c1?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&", alt: "Ingredient 31" },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b1795f8af1ba77ee4de8e85ac26e8a3cae1cf71074ace614d02044ca9204d0cc?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&", alt: "Ingredient 32" },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/6be5b21d11b260f8b79f71ce4d595811613bd938a761427a66a04486c2d87213?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&", alt: "Ingredient 33" },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/19cd8149fe06f849a0ed364429a5cf6915c7cdd3b2de4c4077d9a6406f35a39d?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&", alt: "Ingredient 34" },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/78041644372a702b04a6002458e51ce1e35f5800a7250d3a3f5d235c81562408?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&", alt: "Ingredient 35" },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/d3ede10094385bbf42b57d0e261aa20e3a9d98d7693fc8a4aa1bd78a957f2ec4?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&", alt: "Ingredient 36" },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/aa4a3b079b0306c1707940dfa58bd440dab53f3d6be245b954f8a1d97fa6439a?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&", alt: "Ingredient 37" },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/19cd8149fe06f849a0ed364429a5cf6915c7cdd3b2de4c4077d9a6406f35a39d?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&", alt: "Ingredient 38" },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/78041644372a702b04a6002458e51ce1e35f5800a7250d3a3f5d235c81562408?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&", alt: "Ingredient 39" },
        ];

    const [showAll, setShowAll] = useState(false);
    const handleShowMore = () => {
        setShowAll(true);
    };

    const handleShowLess = () => {
        setShowAll(false);
    };

    const displayedIngredients = showAll ? ingredientsData : ingredientsData.slice(0, 20);

    return (
        <div className="flex flex-col mx-32">
        <section className="self-start mt-20 text-4xl text-stone-800 max-md:mt-10 max-md:ml-1">
            Ingredient
        </section>
        <section className="flex flex-wrap gap-6 items-start self-center mt-20 w-full max-w-[1980px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
            {displayedIngredients.map(({ src, alt }, index) => (
                <figure key={index} className="flex flex-col flex-1 justify-center">
                    <div className="flex justify-center items-center px-6 shadow-lg aspect-square bg-stone-100 rounded-[60px] max-md:px-5 w-[175px] mx-auto">
                        <img loading="lazy" src={src} alt={alt} className="mx-2.5 aspect-[0.92] w-[110px]" />
                    </div>
                </figure>
            ))}
        </section>

        {!showAll && (
            <nav onClick={handleShowMore} className="mx-auto mt-20 text-4xl font-medium text-cyan-800 cursor-pointer max-md:mt-10 max-md:mr-2.5" > Show more </nav>
        )}

        {showAll && (
            <nav onClick={handleShowLess} className="mx-auto mt-20 text-4xl font-medium text-cyan-800 cursor-pointer max-md:mt-10 max-md:mr-2.5" > Show Less </nav>
        )}

        <section className="flex gap-0 items-start mt-20 max-md:flex-wrap max-md:mt-10">
            <div className="flex flex-col grow shrink-0 self-start basis-0 w-fit max-md:max-w-full">
            <button className="justify-center self-center p-2 text-4xl font-medium text-black whitespace-nowrap bg-amber-500 rounded-3xl max-md:px-5" tabIndex="0">
                Generate
            </button>
            </div>
        </section>
        </div>
    );
};