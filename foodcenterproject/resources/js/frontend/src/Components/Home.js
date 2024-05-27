import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Guide from "./Guide";
import Footer from "./Footer";
import "../Styles/Home.css";
import { useNavigate } from "react-router";
import TopLeft from "./Decoration/top-left";
import TopRight from "./Decoration/top-right";
import MiddleLeft from "./Decoration/middle-left";
import MiddleRight from "./Decoration/middle-right";
import BottomLeft from "./Decoration/bottom-left";
import BottomRight from "./Decoration/bottom-right";

const features = [
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0cc5496449d5ae7e8c2f833ad43bfb76fa88d157493b2155c0202e0b01edcd96?apiKey=f433cc271dd0471da0d67c71e9af784c&", title: "High Quality Meals" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/11806a3458bc540c73350d1df4e254127db03ed03795679fd5b45a99566b2922?apiKey=f433cc271dd0471da0d67c71e9af784c&", title: "Free Recipes" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/87d0ff723367af3103e4fb6c860db6f39c631203717ada5e9bb5a50e83253428?apiKey=f433cc271dd0471da0d67c71e9af784c&", title: "Global meals" },
];

const FeatureItem = ({ icon, title }) => (
  <div className="feature-item">
    <img src={icon} alt={title} className="feature-icon" />
    <div className="feature-title">{title}</div>
  </div>
);

export default function Home() {

      // const [query, setQuery] = useState('');
      const navigate = useNavigate();

      const handleSubmit = async (event) => {
          event.preventDefault();
          // const response = await fetch(`https://api.api-ninjas.com/v1/recipe?query=${query}`, {
          //     headers: { 'X-Api-Key': 'YOUR_API_KEY' },
          // });
          // const data = await response.json();
          // navigate('/recettes', { state: { recipes: data } });
          navigate('/recettes');
      };

  return (
    <>
      <TopLeft className="absolute z-[-1] top-[0] left-[0] w-[29%] h-[30%]" fill="#4EABBF"/>
      <TopRight className="absolute z-[-1] top-[0] right-[0] w-[29%] h-[40%]" fill="#4EABBF"/>
      <MiddleLeft className="absolute z-[-1] top-[87%] left-[-45%] w-[100%] h-[50%]" fill="#4EABBF"/>
      <MiddleRight className="absolute z-[-1] bottom-[-55%] right-[0%] w-[10%] h-[40%]" fill="#4EABBF"/>
      <BottomLeft className="absolute z-[-1] bottom-[-280%] left-[0%] w-[10%] h-[70%]" fill="#4EABBF"/>
      <BottomRight className="absolute z-[-1] bottom-[-325%] right-[0%] w-[40%] h-[70%]" fill="#4EABBF"/>
      <main className="main-content mt-24">
        <div className="hero">
          <div className="hero-content">
            <div className="hero-text">
              <h2 className="hero-title">
                <span className="black">Make</span>{" "}
                <span className="blue">your</span>{" "}
                <span className="black">meal</span>{" "}
                <span className="orange">Make</span>{" "}
                <span className="black">your</span>{" "}
                <span className="blue">way</span>
              </h2>
              <p className="hero-subtitle">Global Culinary Discovery Hub</p>
              <div className="hero-actions">
                <div className="flex gap-2.5 mt-16 text-lg text-neutral-800 max-md:flex-wrap max-md:mt-10">
                  <button className="justify-center p-2 bg-orange-400 rounded-[32px] max-md:px-5" tabindex="0" > Order Now </button>
                  <div className="flex gap-4 py-1.5 pr-4 pl-12 my-auto rounded-2xl max-md:px-5">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/af73c6a6891733b68e2b1b959c4da13d3715ef296120732ecd905c88ee24901b?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&" alt="" className="shrink-0 w-12 aspect-square" />
                    <div className="my-auto"> Watch Video </div>
                  </div>
                </div>
              </div>
              <div className="hero-features">
                {features.map((feature, index) => (
                  <FeatureItem key={index} icon={feature.icon} title={feature.title} />
                ))}
              </div>
            </div>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f9e227ea1b9c90b059089c8f42b3b2afd22e57678b932915a67064b0f15f1a2?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&" alt="" className="hero-image"/>
          </div>
        </div>
        <section className="search-section">
          <form className="flex gap-5 max-md:flex-col max-md:gap-0" onSubmit={handleSubmit}>
            <div className="flex flex-col w-full">
              <label className="text-lg font-medium"> Region </label>
              <input className="justify-center p-4 mt-4 rounded-2xl border border-solid border-zinc-200" placeholder="Morocco" />
            </div>
            <div className="flex flex-col w-full">
              <label className="text-lg font-medium"> Meal </label>
              <input className="justify-center p-4 mt-4 rounded-2xl border border-solid border-zinc-200" placeholder="Tagine" />
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
          <section className="flex flex-col w-full max-md:max-w-full">
          <h2 className="mt-20 pl-10 text-4xl max-md:mt-10 max-md:max-w-full"> Favorite </h2>
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
            <h2 className="mt-20 pl-10 text-4xl max-md:mt-10 max-md:max-w-full"> Suggest </h2>
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
            <h2 className="mt-20 pl-10 text-4xl max-md:mt-10 max-md:max-w-full"> Best meals </h2>
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
    </>
  );
}

const favorites = [
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/4750ed5c49da6e2ea4248c60761a33086bd7e130def86f282b3b40740174d937?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&", alt: "Bolognese Image", text: "Bolognese" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/0d5cafea37bc3bff98975ad2e11a4d004425e6bbc042a1b50745a23c4f6c40d7?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&", alt: "Al Kabsa Image", text: "Al Kabsa" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/750efd18431c7d504f6b4567dca45d011b6d13dec16e0d6764409d4af5a2d85e?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&", alt: "Romazava Image", text: "Romazava" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/cd739cecf42e69beff7f894ff82e25687b8c5f0a144e4aad4678b83192b90038?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&", alt: "Pelmeni Image", text: "Pelmeni" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ca046a62429c37a5d23bb1958ac42ad182f0ee37fd489e5948612e413e1fc012?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&", alt: "Tagine Image", text: "Tagine" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/4750ed5c49da6e2ea4248c60761a33086bd7e130def86f282b3b40740174d937?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&", alt: "Bolognese Image", text: "Bolognese" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/0d5cafea37bc3bff98975ad2e11a4d004425e6bbc042a1b50745a23c4f6c40d7?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&", alt: "Al Kabsa Image", text: "Al Kabsa" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/750efd18431c7d504f6b4567dca45d011b6d13dec16e0d6764409d4af5a2d85e?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&", alt: "Romazava Image", text: "Romazava" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/cd739cecf42e69beff7f894ff82e25687b8c5f0a144e4aad4678b83192b90038?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&", alt: "Pelmeni Image", text: "Pelmeni" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ca046a62429c37a5d23bb1958ac42ad182f0ee37fd489e5948612e413e1fc012?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&", alt: "Tagine Image", text: "Tagine" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/4750ed5c49da6e2ea4248c60761a33086bd7e130def86f282b3b40740174d937?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&", alt: "Bolognese Image", text: "Bolognese" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/0d5cafea37bc3bff98975ad2e11a4d004425e6bbc042a1b50745a23c4f6c40d7?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&", alt: "Al Kabsa Image", text: "Al Kabsa" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/750efd18431c7d504f6b4567dca45d011b6d13dec16e0d6764409d4af5a2d85e?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&", alt: "Romazava Image", text: "Romazava" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/cd739cecf42e69beff7f894ff82e25687b8c5f0a144e4aad4678b83192b90038?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&", alt: "Pelmeni Image", text: "Pelmeni" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ca046a62429c37a5d23bb1958ac42ad182f0ee37fd489e5948612e413e1fc012?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&", alt: "Tagine Image", text: "Tagine" },
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