export default function MetricsSection() {
    return (
        <section className="relative text-center rounded-3xl mx-5 md:mx-30 my-16 md:my-20 overflow-hidden">
            <div className="z-1 w-full h-full">
                <img
                    src="/waves.png"
                    alt="Background image"
                    className="object-cover absolute inset-0 size-full rotate-90 md:rotate-0 scale-200 md:scale-0" />
            </div>
            <div className="z-10 backdrop-blur-2xl backdrop-hue-rotate-140 px-8 md:px-40 pt-8 md:pt-14 pb-8 md:pb-16 w-full h-full">
                <div className="flex flex-col w-full max-md:max-w-full">
                    <header className="flex flex-col items-center self-center max-w-full md:w-[789px]">
                        <h2 className="text-xl md:text-4xl font-medium leading-none text-neutral-800 max-md:max-w-full">
                            We let {""}
                            <span
                                style={{
                                    fontFamily:
                                        "Space Grotesk, -apple-system, Roboto, Helvetica, sans-serif",
                                    fontWeight: 700,
                                    color: "rgba(177,6,15,1)",
                                }}
                            >
                                our numbers
                            </span>
                            {""} do the talking
                        </h2>
                        <p className="mt-2 text-base md:text-2xl font-medium leading-none text-stone-500 max-md:max-w-full">
                            Our users love us and we know you will to! Explore our products
                            .
                        </p>
                    </header>
                    <div className="flex flex-col gap-8 md:gap-0 md:flex-row items-center justify-between w-full mt-10">
                        <MetricItem number="98.2%" text="got into their Target Program" />
                        <MetricItem number="4.96" text="Google Rating" />
                        <MetricItem number="5000+" text="Students Assisted" />
                    </div>
                </div>
            </div>
        </section>
    );
};


const MetricItem = ({ number, text }) => {
    return (
        <article className="min-w-60 w-[323px]">
            <div className="flex flex-col items-center w-full">
                <h3 className="tracking-wide text-2xl md:text-6xl font-bold tracking-tighter leading-none text-red-700 max-md:text-4xl">
                    {number}
                </h3>
                <p className="mt-3 md:mt-1 text-base md:text-2xl font-medium leading-none text-stone-500">
                    {text}
                </p>
            </div>
        </article>
    );
};
