import React from 'react'

const DownloadsResources = () => {
    const Download = [{
        form: "Certificate Form",
        title: "Birth Certificate Form",
        description: "Application form for bith Certificate",
        size: "225 KB"
    },
    {
        form: "Certificate Forms",
        title: "Marriage Certificate Form",
        description: "Application form for marriage Certificate",
        size: "225 KB"
    },
    {
        form: "Certificate Forms",
        title: "Marriage Certificate Form",
        description: "Application form for Citizenship Certificate",
        size: "321 KB"
    },
    {
        form: "Passport Forms",
        title: "Passport Application Forms",
        description: "Application form for passport Certificate",
        size: "188 KB"
    },
    {
        form: "Land Registration Forms",
        title: "Passport Application Form",
        description: "Application form for bith Certificate",
        size: "1.2 MB"
    }];

  return (
    <section className='mt-20  p-4'>
        <div className='mt-10 text-center'>
            <h2 className='text-4xl font-bold text-blue-800'>Downloads & Resources</h2>
            <p className='text-gray-600 mt-5 text-xl'>Download application forms, guidelines, and other important documents</p>
        </div>
        <div className='  grid grid-cols-1  md:grid-cols-3 gap-6 mt-10  '>
            {Download.map((items,idx)=>(
                <div
                    key={idx}
                    className='ml-10 p-6 bg-white roudned-lg shadow hover:shadow-lg transition rounded-2xl border border-gray-300 border-l-5 border-l-blue-700'>
                    
                    <h4 className='p-1 inline-block text-blue-700 font-semibold  bg-blue-100 rounded'>{items.form}</h4>
                    <h1 className='text-blue-800 font-bold mt-2'>{items.title}</h1>
                    <p className='text-gray-500 mt-1'>{items.description}</p>
                    <p className='text-sm text-gray-500'> {items.size}</p>
                    <div>
                        <button className='w-full border border-blue-800 text-blue-800 px-4 py-2 mt-5 rounded hover:bg-gray-100 transition'>Download PDF</button>
                    </div>

                </div>
            ))}
        </div>
    </section>
  )
}

export default DownloadsResources