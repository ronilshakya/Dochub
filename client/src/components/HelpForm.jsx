import React from 'react'

const HelpForm = () => {
  return (
    <section className='mt-20 mb-20 px-8 py-3 text-center bg-gray-100 ml-10 mr-10 rounded-2xl' >
        <div className='mt-10 mb-10'>
            <h1 className='text-blue-800 text-bold mb-3 text-3xl'>Need Help with Forms?</h1>
            <p className='text-gray-500 mb-3'>Contact our help desk for assistance with form filling and application process</p>
            <div className='flex space-x-3 text-center justify-center '>
                <button className=' font-semibold px-4 py-2 text-white border bg-blue-800 hover:bg-blue-900 transition rounded-xl '>Call Help Desk</button>
                <button className='font-semibold px-4 py-2 border border-2 border-blue-800 rounded-xl text-blue-800 bg-white hover:bg-gray-100'>Live Chat Support</button>
            </div>
        </div>
    </section>
  )
}

export default HelpForm