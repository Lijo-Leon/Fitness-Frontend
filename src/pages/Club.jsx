import React from 'react'
import Header from '../components/Header'
import { MoveUpRight, Users } from 'lucide-react'
import Swal from 'sweetalert2'

function Club() {
    const submit = () => {
        Swal.fire({
            title: "Good job!",
            text: "Submitted Successfully!",
            icon: "success",
            background:"beige"
        });
    }

    return (
        <div className='relative bg-amber-50 min-h-screen w-full'>
            <Header />

            <section className='pt-32 px-6 md:px-20 text-center w-full flex items-center justify-center flex-col'>
                <h1 className='font1 text-5xl md:text-7xl font-bold text-black tracking-wider'>
                    Join The <span className='text-amber-600'>FitNex</span> Community
                </h1>
                <p className='mt-4 text-gray-800 text-lg md:text-xl max-w-3xl mx-auto tracking-wide'>
                    Connect with passionate individuals who share your drive for fitness, growth, and transformation.
                    Together, we inspire, track, and achieve milestones — one rep at a time.
                </p>
                <a href="#joinform" className='mt-9'>
                    <button className='lets-start flex items-center justify-center gap-4 bg-black text-amber-50 hover:bg-amber-50 hover:text-black transition duration-300 font-semibold border-2 border-black pl-5 pr-1 h-12 rounded-full'>
                        Let's Start
                        <MoveUpRight strokeWidth={2} className='btn1 bg-amber-50 text-black rounded-full h-9 w-9 p-2' />
                    </button>
                </a>
            </section>

            <section className='mt-20 px-6 md:px-20 flex flex-col md:flex-row justify-center items-center md:gap-10 gap-3'>
                <div className='bg-black text-amber-50 rounded-3xl p-8 w-full md:w-1/3 flex flex-col items-center shadow-lg'>
                    <h2 className='text-3xl font-bold'>10K+</h2>
                    <p className='uppercase tracking-wide text-sm'>Active Members</p>
                </div>
                <div className='bg-black text-amber-50 rounded-3xl p-8 w-full md:w-1/3 flex flex-col items-center shadow-lg'>
                    <h2 className='text-3xl font-bold'>500+</h2>
                    <p className='uppercase tracking-wide text-sm'>Transformation Stories</p>
                </div>
                <div className='bg-black text-amber-50 rounded-3xl p-8 w-full md:w-1/3 flex flex-col items-center shadow-lg'>
                    <h2 className='text-3xl font-bold'>100+</h2>
                    <p className='uppercase tracking-wide text-sm'>Events & Challenges</p>
                </div>
            </section>

            <section id='joinform' className='md:mt-20 mt-15 px-6 md:px-20 pb-20'>
                <div className='bg-black text-amber-50 rounded-3xl p-10 md:p-16 max-w-3xl mx-auto'>
                    <h2 className='font1 text-4xl mb-8 text-center font-bold tracking-wider'>Be Part of the Movement</h2>
                    <form className='flex flex-col gap-5 '>
                        <input
                            type='text'
                            placeholder='Full Name'
                            className='bg-amber-50/10 border border-amber-50/30 rounded-lg px-4 py-3 text-amber-50 focus:outline-none focus:border-amber-50'
                        />
                        <input
                            type='email'
                            placeholder='Email Address'
                            className='bg-amber-50/10 border border-amber-50/30 rounded-lg px-4 py-3 text-amber-50 focus:outline-none focus:border-amber-50'
                        />
                        <textarea
                            placeholder='Why do you want to join our community?'
                            className='bg-amber-50/10 border border-amber-50/30 rounded-lg px-4 py-3 text-amber-50 focus:outline-none focus:border-amber-50 min-h-[120px]'
                        ></textarea>
                        <div className='w-full flex items-center justify-center'>
                            <button type='button' onClick={submit} className='lets-start flex items-center justify-center gap-4 bg-amber-50 text-black hover:bg-amber-50/85 w-64 hover:text-black transition duration-300 font-semibold border-2 border-black pr-1 h-12 rounded-full'>
                                Submit
                            </button>
                        </div>
                </form>
        </div>
            </section >
        </div >
    )
}

export default Club
