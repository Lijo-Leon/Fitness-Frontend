import React from 'react'
import Header from '../components/Header'

function Pnf() {
    return (
        <div>
            <Header />
            <div className='w-full'>
                <div className="box bg-black w-full h-screen flex flex-col items-center justify-center">
                    <h1 className='text-amber-50 md:text-[200px] text-7xl font1'>ERROR 404</h1>
                    <h1 className='text-amber-50 md:text-7xl text-2xl font1 tracking-widest'>PAGE NOT FOUND</h1>
                </div>
            </div>
        </div>
    )
}

export default Pnf
