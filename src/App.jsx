import { useState } from "react";
import Hero from "./components/Hero";
import Feature from "./components/Feature";
import Bento from "./components/Bento";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-col items-center justify-center bg-neutral-900">
        <Hero />
        <Feature />
        <Bento />
      </div>
    </>
  );
}

export default App;
