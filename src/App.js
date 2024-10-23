import React from "react";

function App() {
  return (
    <div className="w-full mx-auto max-w-7xl bg-white">
      <header className="">
      <nav>
        <div className="hidden md:flex justify-between items-center">
        <a href="#" className="font-bold" >Logo</a>
        <ul className="flex">
          <li className="p-4"><a href="3">Home</a></li>
          <li  className="p-4"><a href="3">About</a></li>
          <li  className="p-4"><a href="3">Services</a></li>
          <li  className="p-4"><a href="3">Contact</a></li>

        </ul>
        </div>

        <div className="fixed bg-red-200 justify-between items-center md:hidden">
        <a href="#" className="font-bold" >Logo</a>
        <ul className="pt-5 left-0 top-0">
          <li className="p-4"><a href="3">Home</a></li>
          <li  className="p-4"><a href="3">About</a></li>
          <li  className="p-4"><a href="3">Services</a></li>
          <li  className="p-4"><a href="3">Contact</a></li>

        </ul>
        </div>
      </nav>
     
      </header>
    </div>
  );
}

export default App;
