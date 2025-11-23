import React from 'react'

const Hero = () => {
    const data = [
        { number: "50,000", label: "Applications Processed" },
        { number: "24/7", label: "Online Services" },
        { number: "15", label: "Government offices Connected" },
    ];
    return (
        <section className='bg-gray-100 text-center py-20 px-6'>
            <h1 className='text-6xl font-bold text-blue-800 mx-auto'>
                Welcome to the Online Government <span>Services</span>
            </h1>
            <p className='text-gray-700 mt-3 mb-6 max-w-2xl mx-auto'>
                Apply for certificates,track application and access offical resources
                Your gateway to efficient and transparent Government services.
            </p>
            <div className='space-x-4'>
                <button className='bg-blue-800 text-white px-6 py-2 rounded shadow hover:bg-blue-900 cursor-pointer'>
                    Get Started
                </button>
                <button className='border border-blue-800 px-6 py-2 rounded hover:bg-gray-50 cursor-pointer'>
                    View Notices
                </button>
            </div>

            <div className='bg-gray-100 grid grid-cols-1 md:grid-cols-3 gap-6 py-16 px-12 text-center'>
                {data.map((items, idx) => (
                    <div
                        key={idx}
                        className=' bg-white p-8 rounded-lg shadow hover:shadow-lg transition'>
                        <h2 className='text-red-600 text-3xl font-bold'>{items.number}</h2>
                        <p className='mt-2 text-gray-700'>{items.label}</p>
                    </div>
                ))}
            </div>
        </section>

    )
}

export default Hero