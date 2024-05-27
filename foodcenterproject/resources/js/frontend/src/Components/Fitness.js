import React from "react";
import { useState } from "react";
import Footer from "./Footer";
import Meter from "./Meter";
import TopLeft from "./Decoration/top-left";
import TopRight from "./Decoration/top-right";
import MiddleLeft from "./Decoration/middle-left";
import MiddleRight from "./Decoration/middle-right";
import BottomLeft from "./Decoration/bottom-left";
import BottomRight from "./Decoration/bottom-right";

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
        {
        src: "https://cdn.builder.io/api/v1/image/assets/TEMP/3f61e9d3d23bb9801d274eefe2902d1e060f79703260b724169732fd636ce8e9?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&",
        name: "Aymen Ouabdelmoumen",
        experience: "1 year",
        description: `Hi, I'm Aymen Ouabdelmoumen. Let's work together to achieve your health and wellness goals through personalized fitness plans and nutrition guidance.`,
        },
]

const calculateBMI = (height, weight) => {
    const heightInMeters = height / 100;
    return weight / (heightInMeters * heightInMeters);
};

const getBMIStatus = (bmi) => {
    if (bmi < 18.5) return { status: "Underweight", color: "#f8d7da" };
    if (bmi < 25) return { status: "Healthy", color: "#d4edda" };
    if (bmi < 30) return { status: "Overweight", color: "#fff3cd" };
    return { status: "Obese", color: "#f8d7da" };
};

export default function Home() {
    const [height, setHeight] = useState(170);
    const [weight, setWeight] = useState(72);
    const bmi = calculateBMI(height, weight);
    const { status, color } = getBMIStatus(bmi);
    return (
        <>
            <TopLeft className="absolute z-[-1] top-[0] left-[0] w-[29%] h-[30%]" fill="#166973"/>
            <TopRight className="absolute z-[-1] top-[0] right-[0] w-[29%] h-[40%]" fill="#166973"/>
            <MiddleLeft className="absolute z-[-1] top-[87%] left-[-45%] w-[100%] h-[50%]" fill="#166973"/>
            <MiddleRight className="absolute z-[-1] bottom-[-55%] right-[0%] w-[10%] h-[40%]" fill="#166973"/>
            <BottomLeft className="absolute z-[-1] bottom-[-220%] left-[0%] w-[10%] h-[70%]" fill="#166973"/>
            <BottomRight className="absolute z-[-1] bottom-[-290%] right-[0%] w-[40%] h-[70%]" fill="#166973"/>
            <div className="flex flex-col pb-5">
                <div className="flex flex-col items-center px-20 mt-0 w-full max-md:px-5 max-md:mt-0 max-md:max-w-full">
                    <div className="max-w-full w-[604px]">
                    <div className="flex gap-8 max-md:flex-col max-md:gap-0">
                        <div className="flex flex-col w-[70%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col items-center mt-48">
                            <div className="flex items-center gap-8">
                                <div className="flex flex-col items-center bg-orange-100 bmi-counter p-2">
                                    <Meter />
                                    <label className="mb-2 py-2 px-5">Height
                                    <input type="text" value={height} onChange={(e) => setHeight(e.target.value)} className="text-center bmi-input ml-4" style={{ background: "none", border: "none", fontSize: "1rem" }}/>
                                    <label>cm</label>
                                    </label>
                                </div>
                                <div className="flex flex-col items-center bg-cyan-100 bmi-counter p-2">
                                    <Meter />
                                    <label className="mb-2 py-2 px-5">Weight
                                    <input type="text" value={weight} onChange={(e) => setWeight(e.target.value)} className="text-center bmi-input ml-4" style={{ background: "none", border: "none", fontSize: "1rem" }}/>
                                    <label>kg</label>
                                    </label>
                                </div>
                            </div>
                            <div className="flex flex-col items-center mt-8">
                                <div className="flex flex-col py-6 mx-auto w-full rounded-xl bg-neutral-600">
                                <div className="flex flex-col px-28">
                                    <p className="text-base text-white">Body Mass Index (BMI)</p>
                                    <div className="flex gap-5 justify-between px-px mt-6">
                                    <p className="my-auto text-2xl text-white">{bmi.toFixed(1)}</p>
                                    <p className="justify-center px-2.5 py-1.5 text-xs text-black rounded-lg" style={{ backgroundColor: color }}>
                                        {status}
                                    </p>
                                    </div>
                                    </div>
                                    <div className="flex gap-5 justify-between mt-12 mx-12 text-xs font-bold text-white">
                                        <p>15</p>
                                        <p>18.5</p>
                                        <p>25</p>
                                        <p>30</p>
                                        <p>40</p>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[30%] max-md:ml-0 max-md:w-full">
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/894bf1aa8e1b2fa54f61954cc87b013b4f1c595b194fc40a7188d9d0c16a9b49?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&" alt="" className="self-center grow shrink-0 max-w-full aspect-[0.32] w-[161px] max-md:mt-10" />
                        </div>
                    </div>
                    </div>
                    <p className="mt-32 text-8xl text-neutral-800 max-md:mt-10 max-md:max-w-full max-md:text-4xl">Healthy Eating, Happy Living.</p>
                    <p className="self-start mt-28 ml-10 text-4xl text-neutral-800 max-md:mt-10 max-md:ml-2.5">Top Coach</p>
                    {coachProfiles.map(profile => (
                    <CoachProfile key={profile.src} {...profile} />
                    ))}
                </div>
            </div>
            <Footer />
        </>
    )
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