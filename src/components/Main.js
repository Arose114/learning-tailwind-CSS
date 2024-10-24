import React from 'react'
import  { ReactTyped } from 'react-typed'

const Main = () => {
  return (
    <div>
        <div className="w-full bg-cover h-[635px] max-h-screen max-w[1024px] bg-[url('https://cdn.pixabay.com/photo/2021/06/17/08/23/shell-6343027_1280.jpg')]">
        <h1 className='text-center text-slate-100 text-4xl p-4'> Welcome to our website !!! </h1>
        <div className='flex justify-center text-3xl'>
        <ReactTyped
      strings={[
        "Howdy",
        "My name is",
        "Roseline",
      ]}
      typeSpeed={100}
      backSpeed={120}
      loop
     className='text-slate-100 text-center p-3'></ReactTyped>
     </div>
    <p className='text-center text-slate-100 text-xl'>I am learning Tailwing CSS</p>
    <button className='flex justify-center mx-auto w-60 p-3 mt-4 shadow-lg hover:bg-gray-300 ease-in-out duration-500 rounded bg-stone-50'>Learn more</button>

        </div>
    </div>
  )
}

export default Main