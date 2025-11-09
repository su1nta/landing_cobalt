import bannerImage from "../assets/banner.png";
import Button from "./Button";
const Hero = () => {
  return (
    <div className="mt-40 mb-20 flex flex-col items-center">
      <h1 className="font-display max-w-2xl bg-linear-to-b from-neutral-50 to-neutral-600 bg-clip-text text-center text-7xl -tracking-[5px] text-transparent italic">
        Unleash the power of intuitive <span className="leading-snug">finance</span>
      </h1>
      <p className="selection:bg-primary mt-10 max-w-xl text-center text-lg text-neutral-400 selection:text-white">
        Say goodbye to the <span className="bg-primary text-black px-2">outdated</span> financial tools.
        Every small business owner, regardless of the background, can now manage
        their business like a <span className="bg-primary text-black px-2">pro</span>
        . Simple. Intuitive. And never boring.
      </p>
      {/* this part demonstrates group hover */}
      <div className="mt-10"><Button /></div>
      <div className="mt-20">
        <img
          src={bannerImage}
          alt="Banner Image"
          className="sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl rounded-lg border border-neutral-700 object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
