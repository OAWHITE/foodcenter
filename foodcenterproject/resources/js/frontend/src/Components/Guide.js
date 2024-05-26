import React from "react";

export default function Guide() {
  return (
    <div className="footer-block">
      <div className="z-10 flex flex-col self-center max-w-full">
        <h2 className="text-5xl text-center"> How it works </h2>
        <div className="footer-cards">
          <div className="flex gap-4">
            <div className="flex flex-col">
              <div className="flex flex-col text-center ">
                <div className="flex flex-col items-center card-bg shadow-lg">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/245dabaa54153ce08b4abe3ae7e1163cc88a73f8d44fece28a0fb9b977d430a1?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&" alt="" className="w-24 aspect-[0.93]" />
                  <h3 className="mt-7 text-lg font-semibold leading-6 text-orange-400"> Recipes in your hands </h3>
                  <p className="mt-6 leading-6 footer-cards-description"> In the artist's own experience, of course, art is fundamentally indefinable, unsayable; there is something sacred about its demands </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col text-center ">
                <div className="flex flex-col items-center card-bg shadow-lg">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b509d0c7c65dca989bab1c87a4fabdc6e4a08f6fd283010752aa23a3e1e1fbbd?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&" alt="" className="w-24 aspect-[0.93]" />
                  <h3 className="mt-7 text-lg font-semibold leading-6 text-orange-400"> Choose your food </h3>
                  <p className="mt-6 leading-6 footer-cards-description"> In the artist's own experience, of course, art is fundamentally indefinable, unsayable; there is something sacred about its demands </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col text-center ">
                <div className="flex flex-col items-center card-bg shadow-lg">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ff91e6fd25d15d3ec2a6a3945bc3998f48e4fea3fa9fb02ebfe8842b0238e626?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&" alt="" className="w-24 aspect-[0.93]" />
                  <h3 className="mt-7 text-lg font-semibold leading-6 text-orange-400"> Enjoy! </h3>
                  <p className="mt-6 leading-6 footer-cards-description"> In the artist's own experience, of course, art is fundamentally indefinable, unsayable; there is something sacred about its demands </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}