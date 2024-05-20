import * as React from "react";
import "../Styles/Home.css";

const FeatureItem = ({ icon, title }) => (
  <div className="feature-item">
    <img src={icon} alt={title} className="feature-icon" />
    <div className="feature-title">{title}</div>
  </div>
);

const features = [
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0cc5496449d5ae7e8c2f833ad43bfb76fa88d157493b2155c0202e0b01edcd96?apiKey=f433cc271dd0471da0d67c71e9af784c&", title: "High Quality Meals" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/11806a3458bc540c73350d1df4e254127db03ed03795679fd5b45a99566b2922?apiKey=f433cc271dd0471da0d67c71e9af784c&", title: "Free Recipes" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/87d0ff723367af3103e4fb6c860db6f39c631203717ada5e9bb5a50e83253428?apiKey=f433cc271dd0471da0d67c71e9af784c&", title: "Global meals" },
];

const SearchForm = () => (
  <form className="search-form">
    <div className="search-form-row">
      <div className="search-form-column">
        <div className="search-form-field">
          <div className="search-form-label">Region</div>
          <div className="search-form-input">Morocco</div>
        </div>
      </div>
      <div className="search-form-column">
        <div className="search-form-field">
          <div className="search-form-label">MEAL</div>
          <div className="search-form-input">TAGINE</div>
        </div>
      </div>
      <div className="search-form-column">
        <div className="search-form-field">
          <div className="search-form-subrow">
            <div className="search-form-subcolumn">
              <div className="search-form-subfield">
                <div className="search-form-label">Calories</div>
                <div className="search-form-input">Calories</div>
              </div>
            </div>
            <div className="search-form-subcolumn">
              <button className="search-button">Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
);

export default function Home() {
  return (
    <>
      <main className="main-content">
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
                  <button className="justify-center p-2 bg-orange-400 rounded-[32px] max-md:px-5" tabindex="0" >
                    Order Now
                  </button>
                  <div className="flex gap-4 py-1.5 pr-4 pl-12 my-auto rounded-2xl max-md:px-5">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/af73c6a6891733b68e2b1b959c4da13d3715ef296120732ecd905c88ee24901b?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&" alt="" className="shrink-0 w-12 aspect-square" />
                    <div className="my-auto">
                      Watch Video
                    </div>
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
          <SearchForm />
        </section>
      </main>
        {/* <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/95187fc5bfdec07615f6bf49d8128bbdcb41d80229de48525bf2de25f0c47991?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&" alt="" className="aspect-[0.34] fill-teal-400 w-[219px] background" /> */}
        {/* <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a61ea7521ab66ff303bbb32e01183e038729cbe73f024754aad83cb39465737e?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&" alt="" className="aspect-[0.4] fill-teal-400 w-[210px]" background" /> */}
        {/* <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2990b538328b94c8a6268a02c86291390e604746866d67b9230de13f65ff672c?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&" alt="" className="aspect-[0.23] fill-teal-400 background" /> */}
      
      <MyComponent />
    </>
  );
}

const favorites = [
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

function MyComponent() {
  return (
    <div className="flex flex-col pt-11 pb-5 bg-white">

      <section className="z-10 self-start mt-0 ml-20 text-4xl text-neutral-800 max-md:ml-2.5">
        Favorite
      </section>
      <section className="flex flex-col mt-7 w-full max-md:max-w-full">
        <div className="flex flex-col pl-20 w-full text-3xl text-teal-400 max-md:pl-5 max-md:max-w-full">
          <div className="flex overflow-x-auto gap-5 max-w-full w-[1833px] max-md:flex-wrap">
            {favorites.map((item, index) => (
              <div key={index} className="flex flex-col flex-1 self-start mt-2 whitespace-nowrap">
                <img loading="lazy" src={item.src} alt={item.alt} className="w-full aspect-[1.47]"/>
                <div className="self-start ml-14 max-md:ml-2.5">{item.text}</div>
              </div>
            ))}
          </div>
        </div>

        <h2 className="mt-72 text-4xl text-neutral-800 max-md:mt-10 max-md:max-w-full">
          Suggest
        </h2>
        <div className="flex overflow-x-auto gap-5 mt-4 max-w-full w-[1833px] max-md:flex-wrap">
          {suggestions.map((item, index) => (
            <div key={index} className="flex flex-col flex-1 self-start mt-2 whitespace-nowrap">
              <img loading="lazy" src={item.src} alt={item.alt} className="w-full aspect-[1.47]" />
              <div className="self-start ml-14 max-md:ml-2.5">{item.text}</div>
            </div>
          ))}
        </div>

        <h2 className="mt-16 text-4xl text-neutral-800 max-md:mt-10 max-md:max-w-full">
          Best meals
        </h2>

        <div className="flex z-10 gap-0 items-start mt-7 max-md:flex-wrap">
          <div className="flex flex-col grow shrink-0 self-start basis-0 w-fit max-md:max-w-full">
            <div className="flex overflow-x-auto gap-5 px-5 text-3xl text-teal-400 max-md:flex-wrap max-md:max-w-full">
              {bestMeals.map((item, index) => (
                <div key={index} className="flex flex-col flex-1 self-start mt-2 whitespace-nowrap">
                  <img loading="lazy" src={item.src} alt={item.alt} className="w-full aspect-[1.47]" />
                  <div className="self-start ml-14 max-md:ml-2.5"> {item.text} </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

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

      <footer className="flex flex-col footer">
        <div className="flex flex-col mx-11">
          <div className="flex gap-5 justify-between footer-bg">
            <section className="flex flex-col">
              <h1 className="text-3xl font-bold leading-6 capitalize"> FOOD CENTER </h1>
              <p className="mt-6 text-l footer-description"> Shipper is a company that focuses on food delivery </p>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/dae81e5845d9f15a25bfbf5cd1f96f6e48e570fb5b4c592a772dc235fab51619?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&" alt="" className="mt-6 max-w-full aspect-[5.88] w-[254px]" />
            </section>
            <nav className="flex gap-5 justify-between text-xl">
              <div className="flex flex-col">
                <h3 className="font-bold">Navigate</h3>
                <div className="flex flex-col mt-6">
                  <a href="#" className="footer-nav">Home</a>
                  <a href="#" className="footer-nav">Advantages</a>
                  <a href="#" className="footer-nav">Feature</a>
                  <a href="#" className="footer-nav">Feedback</a>
                </div>
              </div>
              <div className="flex flex-col self-start">
                <h3 className="font-bold">About</h3>
                <div className="flex flex-col mt-6 leading-[140%]">
                  <a href="#" className="footer-nav">Blog</a>
                  <a href="#" className="footer-nav">Events</a>
                  <a href="#" className="footer-nav">Careers</a>
                </div>
              </div>
            </nav>
          </div>
          <div className="flex gap-5 footer-rights leading-7 max-md:flex-wrap max-md:pr-5 max-md:mt-10 max-md:max-w-full">
            <div className="flex-auto text-neutral-400">Copyright © AOWHITE</div>
            <div className="flex gap-5 text-white max-md:flex-wrap max-md:max-w-full">
              <a href="#">Terms</a>
              <a href="#">Privacy</a>
              <a href="#" className="flex-auto">Policy & Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
  );
}