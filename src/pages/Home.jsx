import React from 'react'
import { Button } from "flowbite-react";
import Header from '../components/Header';
import { ArrowDown, MoveUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';


function Home({ addDetails, setAddDetails }) {
  return (
    <div className='w-full relative'>
      <Header />
      <div id='main' className="main pt-20 bg-amber-50 h-screen flex justify-center">
        <div className="title text-center">
          <h1 className='md:text-[18px] text-[12px] mt-17 font-bold tracking-wide'>ACHIEVE YOUR FITNESS GOAL</h1>
          <h1 className='font1 md:text-[170px] text-[80px] md:-mt-8  font-black tracking-[5px]'>UNLEASH <br />
            <p className='md:-mt-20 -mt-10 tracking-[2px]'>YOUR POWER</p>
          </h1>
          <div className=" flex flex-col md:flex-row items-center justify-center gap-5 mt-10 md:mt-0">
            <h1 className='uppercase tracking-wide text-[14px] font-semibold md:px-0 px-10'>Every <b>rep</b> , every <b>bite</b> , every <b>step</b> counts — start your transformation today</h1>

            <Link to={'/dashboard'}>
              <button className='lets-start flex items-center justify-center gap-4 bg-black text-amber-50 hover:bg-amber-50 hover:text-black transition duration-300 font-semibold border-2 border-black  pl-5 pr-1 h-12 rounded-full'>
                Let's Start
                <MoveUpRight strokeWidth={2} className='btn1 bg-amber-50 text-black rounded-full h-9 w-9 p-2' />
              </button>
            </Link>



          </div>
          <div className='mt-10'>
            <h1 className='flex items-center justify-center gap-3 font-semibold'>SCROLL DOWN <ArrowDown size={28} strokeWidth={2} className='border-2 rounded-full p-1' /></h1>
          </div>
        </div>
      </div>


      <div className="main bg-amber-50 w-full md:h-screen h-auto flex md:flex-row flex-col gap-8 pb-10 md:px-18 px-5 pt-20 items-center md:mt-0 -mt-20">
        <div className="left md:h-full md:w-[25%] w-full flex flex-col gap-10 ">
          <div className="box bg-black md:h-full h-[600px] w-full rounded-4xl overflow-hidden relative">
            <h1 className='uppercase font1 mt-8 tracking-wider text-amber-50 font-bold text-[62px] mx-8 flex flex-col'><span>Track</span><span>Train</span><span>Transform</span></h1>
            <h1 className='uppercase mt-3 tracking-wider text-amber-50 font-bold text-[1  8px] mx-8'>Everything in one place</h1>
            <h1 className=' mt-5 tracking-wider text-amber-50 text-justify text-[14px] mx-8'>Your healthy   fitness journey starts with small, powerful steps. Track your meals, monitor your workouts, and see your progress come to life. Stay committed, stay consistent, and let every effort bring you closer to your goals.</h1>

            <Link to={'/dashboard'}>
              <button className='lets-start absolute left-8 bottom-8 flex items-center justify-center gap-4 bg-amber-50 text-black hover:bg-amber-50/90 transition duration-300 font-semibold border-2 border-black  pl-5 pr-1 h-12  rounded-full'>
                Let's Start
                <MoveUpRight strokeWidth={2} className='btn1 bg-black text-amber-50 rounded-full h-9 w-9 p-2' />
              </button>
            </Link>
          </div>
        </div>
        <div className="right h-full md:w-[75%] w-full flex flex-col gap-10">
          <div className="box bg-black h-full w-full rounded-4xl overflow-hidden relative">
            <img src="https://images.pexels.com/photos/4162491/pexels-photo-4162491.jpeg" alt="" />
            <div className="overlay w-full absolute top-0 right-0 h-full bg-black/50"></div>
            <p className='font1 uppercase tracking-wide z-10 absolute md:top-8 top-3 md:right-9 right-4 text-amber-50 md:text-6xl text-3xl text-right'>Transform Routine<br />Transform Yourself</p>
          </div>
        </div>
      </div>




      <div className="main bg-amber-50 w-full flex gap-8 pb-10 md:px-18 px-5 pt-1 items-center ">
        <div className="box bg-black h-[600px] w-full rounded-4xl overflow-hidden relative flex md:flex-row flex-col gap-10 md:px-10 px-5 py-10">
          <div className="left md:w-[65%] w-full h-full bg-amber-50 rounded-xl overflow-hidden relative">
            <img src="https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg" className='md:h-auto h-full' alt="" />
            <div className="overlay w-full absolute top-0 right-0 h-full bg-black/60"></div>
            <div className="texts absolute md:top-16 top-1">
              <h2 className="md:text-7xl text-2xl font-bold text-amber-50 md:mb-8 font1 tracking-wide text-shadow-2xs text-shadow-black md:ml-10 ml-3">Ready to Begin Your Transformation?</h2>
              <p className='text-amber-50 py-2 md:mt-57 mt-11 md:text-[16px] text-[13px] md:px-10 px-3 text-justify text-shadow-2xs text-shadow-black'>We believe in real progress — not shortcuts. Our platform is designed to guide you through
                every stage of your transformation with smart tracking tools, personalized insights,
                and a supportive community that keeps you accountable.
              </p>
            </div>
          </div>

          <div className="right md:w-[35%] w-full h-full rounded-xl bg-black flex flex-col gap-5">
            <div className="top w-full h-[65%] rounded-xl bg-amber-50 overflow-hidden relative">
              <img src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg" className='md:w-full w-87 md:h-full h-auto' alt="" />
              <div className="overlay w-full absolute top-0 right-0 h-full bg-black/40"></div>
              <div className="down absolute md:bottom-3 bottom-1 w-full flex flex-col items-center gap-3">
                <h1 className='text-amber-50 md:text-3xl text-2xl w-full font-bold font1 tracking-widest bg-white/10 backdrop-blur-2xl py-2 text-center'>Join Our Fitness Club</h1>
                <Link to="/joinclub">
                  <button className='scale-70 md:scale-100 lets-start flex items-center w-38 justify-center gap-4 bg-amber-50 text-black hover:bg-amber-50/90 transition duration-300 font-semibold pl-5 pr-1 h-12 md:ml-65 ml-46 rounded-full'>
                    Join Now
                    <MoveUpRight strokeWidth={2} className='btn1 bg-black text-amber-50 rounded-full h-9 w-9 p-2' />
                  </button>
                </Link>
              </div>
            </div>

            <div className="bottom w-full h-[35%] rounded-xl bg-black flex gap-5">
              <div className="left w-1/2 h-full bg-amber-50/30 rounded-xl overflow-hidden relative flex items-center justify-center">
                <img src="https://images.pexels.com/photos/13583539/pexels-photo-13583539.jpeg" className='absolute top-0 min-h-full min-w-full' alt="" />
                <div className="overlay w-full absolute top-0 right-0 h-full bg-black/20"></div>
                {/* <h1 className='text-amber-50 text-3xl w-full font-bold font1 tracking-widest absolute bottom-0 pl-3 py-2 text-left'>Workout</h1> */}
              </div>
              <div className="left w-1/2 h-full bg-amber-50/30 rounded-xl overflow-hidden relative flex items-center justify-center">
                <img src="https://images.pexels.com/photos/34433963/pexels-photo-34433963.jpeg" className='absolute top-0 min-h-full md:min-w-70 min-w-1' alt="" />
                <div className="overlay w-full absolute top-0 right-0 h-full bg-black/20"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="div flex md:justify-end items-center justify-center w-full  bg-amber-50 pb-10 md:pb-10 px-20">
        <Link to={"/dashboard"}>
          <button className='scale-90 md:scale-100 lets-start flex items-center md:w-39 w-[400px] justify-center gap-4 bg-amber-50 text-black hover:bg-amber-100/60 border-2 transition duration-300 font-semibold pl-5 pr-5 md:pr-1 h-12 md:ml-0  rounded-full'>
            Start Now
            <MoveUpRight strokeWidth={2} className='btn1 hidden md:flex bg-black text-amber-50 rounded-full h-9 w-9 p-2' />
          </button>
        </Link>

      </div>
    </div>
  )
}

export default Home
