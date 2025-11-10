import { useState } from "react";
import Hero from "./components/Hero";
import Feature from "./components/Feature";
import GeniusFeature from "./components/GeniusFeature";
import Bento from "./components/Bento";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {

  return (
    <>
      <div className="min-h-screen md:w-screen bg-neutral-950 relative overflow-hidden">
        <div
          className="absolute h-1/5 inset-0 z-0 mask-b-from-70% pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(64,64,64,0.2) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(64,64,64,0.2) 1px, transparent 1px),
              radial-gradient(140% 80% at 50% -10%, rgba(59,130,246,0.25) 0%, rgba(26,43,68,0.25) 60%, transparent 75%)
            `,
            backgroundSize: "88px 88px, 88px 88px, 100% 100%, 100% 100%",
          }}
        />
        <div className="relative z-10 mx-auto flex max-w-full md:max-w-4xl xl:max-w-7xl flex-col items-center justify-center">
          <Header />
          <Hero />
          <Feature />
          <Bento />
          <GeniusFeature />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
