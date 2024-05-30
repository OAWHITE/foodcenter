import React from "react";

export default function Footer({ className }) {
    return (
        <div className={ className }>
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
                                    <a href="/home" className="footer-nav">Home</a>
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
    )
}