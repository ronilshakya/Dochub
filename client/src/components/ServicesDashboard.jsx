import React from 'react'

const ServicesDashboard = () => {
    const Service = [{
        icon: "🏥",
        title: "Birth Certificate",
        description: "Apply for or renew your birth certificate online"
    },
    {
        icon: "💍",
        title: "Marriage Certificate",
        description: "Register your marriage and get official certificate"
    },
    {
        icon: "🆔",
        title: "National ID (NID)",
        description: "Apply for new National Identity card"
    },
    {
        icon: "👤",
        title: "Citizenship Renewal",
        description: "Renew your citizenship certificate"
    },
    {
        icon: "📘",
        title: "Passport Application",
        description: "Apply for new passport or renewal"
    },
    {
        icon: "🏞️",
        title: "Land/Malpot Services",
        description: "Land registration and property services"
    }];
    return (
        <div className='mt-20 text-center p-4'>
            <h1 className='text-blue-800 font-bold text-4xl'>
                Government Services
            </h1>
            <p className='text-gray-700 max-w-2xl mx-auto text-lg text-center mt-5'>
                Accesss essential government services online.Apply for certificate,track applications,and manage your documents digitally.
            </p>
            <div className='grid grid-cols-1  md:grid-cols-3 gap-6 mt-10 text-center '>
                {Service.map((items, idx) => (
                    <div    
                        key={idx}
                        className=' ml-10 p-6 bg-white roudned-lg shadow hover:shadow-lg transition text-cernter rounded-2xl border border-gray-300 border-l-5 border-l-red-700'>
                        <div className='text-5xl mb-4'>{items.icon}</div>
                        <h2 className='text-xl font-semibold text-blue-800'>{items.title}</h2>
                        <p className='text-gray-600 mt-2'>{items.description}</p>
                        <div className='flex flex-col space-y-2 mt-6'>
                            <button className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-900 transition">
                                Upload Now
                            </button>
                            <button className="border border-blue-800 text-blue-800 px-4 py-2 rounded hover:bg-gray-100 transition">
                                Check Status
                            </button>
                        </div>

                    </div>
                ))}
            </div>

        </div>
    )
}

export default ServicesDashboard