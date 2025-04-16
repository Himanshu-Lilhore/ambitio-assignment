import { useEffect, useState } from "react";

export default function Hero() {
    return (
        <section className="flex flex-col font-semibold">
            <div className="w-full h-65 md:h-auto relative my-6">
                <div className="absolute top-0 left-0 h-full w-[20%] bg-linear-to-r from-white to-transparent"></div>
                <div className="absolute top-0 right-0 h-full w-[20%] bg-linear-to-l from-white to-transparent"></div>
                <img
                    src="/banner.png"
                    alt="banner"
                    className="object-cover h-full md:h-auto w-auto md:w-full"
                />
                <img
                    src="/crownLogoPrimary.png"
                    alt="crown logo"
                    className="crown hover:scale-110 size-44 md:size-64 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] transition-all duration-300"
                />
            </div>

            <div className="flex flex-col justify-center items-center self-center mt-2 max-w-full w-[752px]">
                <div className="flex flex-col justify-center items-center w-full text-center">
                    <Heading />
                    <Subheading />
                    <Btn10x>10x your chances with Ambitio</Btn10x>
                </div>
            </div>
        </section>
    );
};


const Btn10x = ({ children }) => {
    return (
        <button className="hover:text-black hover:bg-white border-2 border-black py-6 pr-9 pl-9 mt-6 text-lg tracking-normal text-white rounded-xl bg-neutral-800 min-h-14 w-[328px] max-md:px-5 transition-all duration-300">
            {children}
        </button>
    );
};

const Subheading = () => {
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        setIsAnimating(true);
    }, []);

    return (
        <p className={`mt-4 text-base md:text-xl leading-8 text-stone-500 w-[90%] md:w-auto max-md:max-w-full transition-all duration-2000 
            ${isAnimating ? "opacity-100 translate-x-0" : "opacity-0 translate-y-8"}
        `}>
            Get expert help, personalised guidance, and all the support you need to <br className="hidden md:block" />
            <span className="font-bold text-[#212121]">
                increase your chances of success with Ambitio Elite.
            </span>
        </p>
    );
};

const Heading = () => {
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        setIsAnimating(true);
    }, []);

    return (
        <h1 className={`flex flex-col self-center w-full text-6xl leading-none max-w-[752px] max-md:max-w-full max-md:text-4xl font-semibold transition-all duration-2000 
            ${isAnimating ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}
            `}>
            <span className="self-center text-neutral-800 max-md:max-w-full max-md:text-4xl">
                Give the best<br className="block md:hidden" /> shot <br className="hidden md:block" /> at your <br className="block md:hidden" /> <span className="text-red-800">Dream University</span>
            </span>
        </h1>
    );
};