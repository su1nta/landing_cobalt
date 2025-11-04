import { useState } from "react";
import Hero from "./components/Hero";
import Feature from "./components/Feature";
import Bento from "./components/Bento";

function App() {

  return (
    <>
      <div className="min-h-sceeen w-screen bg-neutral-900">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center">
          <Hero />
          <Feature />
          <Bento />
        </div>
      </div>
    </>
  );
}

export default App;
