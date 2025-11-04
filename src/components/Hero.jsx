import bannerImage from "../assets/banner.png";
const Hero = () => {
  return (
    <div className="mt-40 mb-20 flex flex-col items-center">
      <h1 className="font-display max-w-2xl bg-linear-to-b from-neutral-50 to-neutral-600 bg-clip-text text-center text-7xl tracking-tighter text-transparent italic">
        Unleash the power of intuitive finance
      </h1>
      <p className="selection:bg-primary mt-10 max-w-xl text-center text-lg text-neutral-400 selection:text-white">
        Say goodbye to the
        <span className="bg-primary text-black">outdated</span> financial tools.
        Every small business owner, regardless of the background, can now manage
        their business like a <span className="bg-primary text-black">pro</span>
        . Simple. Intuitive. And never boring.
      </p>
      {/* this part demonstrates group hover */}
      <div className="group mt-10 flex justify-center">
        <button className="hover:shwdow-primary relative cursor-pointer rounded-xl border border-neutral-700 px-3 py-2 text-sm text-gray-500 transition duration-200 hover:border-neutral-600 hover:text-neutral-400 hover:shadow-lg">
          <div className="via-primary absolute inset-x-0 bottom-0 h-px w-full bg-linear-to-r from-transparent to-transparent group-hover:hidden" />
          Join the Waitlist
        </button>
      </div>
      <div className="mt-20">
        <img
          src={bannerImage}
          alt="Banner Image"
          className="max-w-7xl rounded-lg border border-neutral-700 object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
