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
          className="absolute inset-0 h-full w-full z-0"
          style={{
            backgroundImage: `
              radial-gradient(120% 90% at 50% -30%, rgba(26,43,68,0.9) 0%, rgba(3,5,8,0.85) 60%, transparent 85%)
            `,
            backgroundColor: "#020305"
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
