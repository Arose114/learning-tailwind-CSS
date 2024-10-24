import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full mx-auto max-w-[1200px] bg-white">
      <Navbar/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
