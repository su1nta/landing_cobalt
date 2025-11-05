import { useState } from "react";
import Hero from "./components/Hero";
import Feature from "./components/Feature";
import GeniusFeature from "./components/GeniusFeature";
import Bento from "./components/Bento";
import Header from "./components/Header";

function App() {

  return (
    <>
      <div className="min-h-sceeen w-screen bg-neutral-950">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center">
          <Header />
          <Hero />
          <Feature />
          <Bento />
          <GeniusFeature />
        </div>
      </div>
    </>
  );
}

export default App;
