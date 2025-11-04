import Box1 from "./bento/Box1";
const Bento = () => {
  return (
    <>
      <div className="my-44 w-full p-3">
        <div className="flex flex-col gap-4">
          <h1 className="bg-linear-to-b from-neutral-100 to-neutral-500 bg-clip-text text-5xl font-bold text-transparent">
            Everything you need.
            <br />
            Nothing you don't
          </h1>
          <h4 className="max-w-xl text-lg text-neutral-500">
            Financial management and visibility in one place. Experience{" "}
            <span className="text-neutral-200">a flexible toolkit</span> that
            makes every task feel like a breeze.
          </h4>
        </div>
        <div className="mt-20 grid gap-5 lg:grid-cols-6 xl:grid-cols-12">
          <div className="relative h-120 rounded-3xl border border-neutral-700 lg:col-span-3 xl:col-span-4 overflow-clip"><Box1 /></div>
          <div className="h-120 rounded-3xl bg-red-400 lg:col-span-3 xl:col-span-4"></div>
          <div className="h-120 rounded-3xl bg-red-400 lg:col-span-6 xl:col-span-4"></div>
          <div className="order-5 h-80 rounded-3xl bg-red-400 lg:order-4 lg:col-span-6 xl:col-span-7"></div>
          <div className="order-4 h-80 rounded-3xl bg-red-400 lg:order-5 lg:col-span-3 xl:col-span-5"></div>
        </div>
      </div>
    </>
  );
};

export default Bento;
