const Feature = () => {
  return (
    <>
      <div className="mt-10 flex flex-col gap-16 lg:flex-row lg:items-start justify-between px-8 lg:p-5 xl:p-3 xl:max-w-7xl">
        <h1 className="lg:w-2/5 py-3 lg:py-1 bg-linear-to-b from-neutral-100 to-neutral-500 bg-clip-text text-3xl md:text-4xl lg:text-5xl font-bold text-transparent">
          Who said finance has to be boring?
        </h1>
        <div className="lg:w-3/5">
          <p className="lg:w-5/6 mx-auto xl:text-xl text-neutral-500">
            With Cobalt, managing your business finances is effortless, empowering,
            and anything but boring. Our intuitive platform brings clarity to your
            cash flow, simplifies your financial decision-making, and puts the power
            of advanced financial management right at your fingertips.{" "}
            <span className="text-neutral-300">
              Say no to spreadsheets and tools designed in the 80s.
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Feature;
