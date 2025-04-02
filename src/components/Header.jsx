import React, { useState } from "react";

export default function Header() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <>
            <nav className="flex gap-10 justify-between items-center px-20 py-5 bg-white bg-opacity-90 max-md:px-5">
                <img
                    src="/appLogo.png"
                    alt="Company Logo"
                    className="hidden md:flex object-contain shrink-0 self-stretch my-auto aspect-[5.05] w-[131px]"
                />
                <img
                    src="/appLogoMob.png"
                    alt="Company Logo"
                    className="flex md:hidden object-contain shrink-0 self-stretch my-auto size-7"
                />

                <div className="hidden md:flex flex=row gap-6 items-start self-stretch my-auto text-lg font-medium min-w-60 text-neutral-800 max-md:max-w-full">
                    <NavItem
                        label="Study-abroad"
                        iconSrc="/downArrow.png"
                    />
                    <NavItem
                        label="Bootcamps"
                        iconSrc="/downArrow.png"
                    />
                    <NavItem
                        label="Products"
                        iconSrc="/downArrow.png"
                    />

                    <SpecialNavItem
                        label="Ambitio Pro"
                        iconSrc="/diamondIcon.png"
                    />

                    <SpecialNavItem
                        label="Ambitio Elite"
                        iconSrc="/crownIcon.png"
                    />
                </div>

                <div className="flex flex-row gap-5">
                    <CallBtn
                        label="Speak to our Experts"
                        iconSrc="/phoneIcon.png"
                    />

                    <img
                        src="/hamburger.png"
                        alt="Hamburger menu"
                        className="flex md:hidden object-contain shrink-0 self-stretch my-auto size-7 aspect-square cursor-pointer"
                        onClick={toggleDrawer}
                    />
                </div>
            </nav>

            {/* Mobile Drawer */}
            <div
                className={`fixed top-0 right-0 h-full w-3/4 bg-white shadow-lg z-50 flex flex-col p-5 transform transition-transform duration-300 ${isDrawerOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <button
                    className="self-end text-xl font-bold mb-5"
                    onClick={toggleDrawer}
                >
                    ✕
                </button>
                <NavItem
                    label="Study-abroad"
                    iconSrc="/downArrow.png"
                />
                <NavItem
                    label="Bootcamps"
                    iconSrc="/downArrow.png"
                />
                <NavItem
                    label="Products"
                    iconSrc="/downArrow.png"
                />
                <SpecialNavItem
                    label="Ambitio Pro"
                    iconSrc="/diamondIcon.png"
                />
                <SpecialNavItem
                    label="Ambitio Elite"
                    iconSrc="/crownIcon.png"
                />
                <CallBtn
                    label="Speak to our Experts"
                    iconSrc="/phoneIcon.png"
                />
            </div>
        </>
    );
}

function NavItem({ label, iconSrc }) {
    return (
        <div className="nav-item relative whitespace-nowrap text-neutral-800 mb-4 md:mb-0">
            <button
                className="flex gap-1 justify-center items-end"
                aria-haspopup="true"
            >
                <span>{label}</span>
                <img
                    src={iconSrc}
                    alt="Dropdown indicator"
                    className="object-contain shrink-0 w-5 aspect-square"
                />
            </button>
        </div>
    );
}

function SpecialNavItem({ label, iconSrc }) {
    return (
        <div className="nav-item relative flex gap-1 items-center text-neutral-800 mb-4 md:mb-0">
            <img
                src={iconSrc}
                alt={`${label} icon`}
                className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
            />
            <span className="self-stretch my-auto">{label}</span>
        </div>
    );
}

function CallBtn({ label, iconSrc }) {
    return (
        <button className="flex gap-2 justify-center items-center self-stretch px-3 md:px-4 py-1 md:py-3 my-auto text-base font-semibold md:font-bold hover:text-white hover:bg-red-800 text-red-800 rounded-xl border-2 border-solid border-red-800 transition-all duration-300">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
            </div>
            <span className="self-stretch text-nowrap my-auto">{label}</span>
        </button>
    );
}