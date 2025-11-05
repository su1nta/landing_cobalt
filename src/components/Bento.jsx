import FeatureText from "./FeatureText";
import Box1 from "./bento/Box1";
import Box2 from "./bento/Box2";
import Box3 from "./bento/Box3";
import Box4 from "./bento/Box-4";
const Bento = () => {
  const title = <>Everything you need.
            <br />
            Nothing you don't</>
  const subtitle = <>
                Financial management and visibility in one place. Experience{" "}
                <span className="text-neutral-200">a flexible toolkit</span> that
                makes every task feel like a breeze.
              </>
  return (
    <>
      <div className="my-44 w-full p-3">
        {/* <div className="flex flex-col gap-4">
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
        </div> */}
        <FeatureText title={title} subtitle={subtitle} />
        <div className="mt-20 grid gap-5 lg:grid-cols-6 xl:grid-cols-12">
          <div className="relative h-140 rounded-3xl bg-neutral-900 border border-neutral-800 lg:col-span-3 xl:col-span-4 overflow-hidden"><Box1 /></div>
          <div className="h-140 rounded-3xl bg-neutral-900 border border-neutral-800 lg:col-span-3 xl:col-span-4 overflow-hidden"><Box2 /></div>
          <div className="h-140 rounded-3xl bg-neutral-900 border border-neutral-800 lg:col-span-6 xl:col-span-4"><Box3 /></div>
          <div className="order-5 h-120 bg-neutral-900 rounded-3xl border border-neutral-800 lg:order-4 lg:col-span-6 xl:col-span-7 flex items-center justify-center hover:bg-linear-to-t hover:from-neutral-800 hover:to-transparent transition duration-400 ease-in-out">
            <h1 className="text-neutral-500 italic font-display text-7xl max-w-2/3 cursor-pointer text-center">too lazy to complete</h1>
          </div>
          <div className="order-4 h-120 bg-neutral-900 rounded-3xl border border-neutral-800 lg:order-5 lg:col-span-3 xl:col-span-5"><Box4 /></div>
        </div>
      </div>
    </>
  );
};

export default Bento;
