import React from "react";


export default function Header() {
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
                        className="flex md:hidden object-contain shrink-0 self-stretch my-auto size-7 aspect-square"
                    />
                </div>
            </nav>
        </>
    )
}



function NavItem({ label, iconSrc }) {
    return (
        <div className="whitespace-nowrap text-neutral-800">
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
        <div className="flex gap-1 items-center text-neutral-800">
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
        <button className="flex gap-2 justify-center items-center self-stretch px-3 md:px-4 py-1 md:py-3 my-auto text-base font-semibold md:font-bold text-red-700 rounded-xl border-2 border-solid border-[color:var(--Primary-red,#B1060F)]">
            <img
                src={iconSrc}
                alt="call icon"
                className="hidden md:flex object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
            />
            <span className="self-stretch text-nowrap my-auto">{label}</span>
        </button>
    );
}