import React, { useState } from 'react'

const ApplicationTracking = () => {
    const [applicationNumber, setApplicationNumber] = useState("");
    const [trackingResult, setTrackingResult] = useState(null);

    const HandleTrackApplication = () => {
        const statuses = ["Pending", "Under Review", "Approved", "Rejected"];
        const randomStatus = statuses[Math.floor(Math.random() * statuses.length)]

        setTrackingResult({
            applicationId: applicationNumber,
            status: randomStatus,
            submittedDate: "August 27, 2025",
            estimatedCompletion: "Setember 10,2025"

        })
    }
    return (
        <section
            className='text-center mt-20 mb-20'
        >
            <div>
                <h2
                    className='text-5xl text-blue-800 font-semibold '>
                    Track Your Application
                </h2>
                <p
                    className='text-xl mt-5 text-gray-600'>
                    Enter your application number to check the current status
                </p>
            </div>

            <div
                className=' mt-10 shadow-lg px-20 py-6 rounded-lg max-w-4xl mx-auto border border-gray-100'>
                <h3
                    className='text-2xl font-bold text-blue-800'>
                    Application Status Inquiry
                </h3>
                <div className='flex gap-6 mt-6'>
                    <input
                        type="text"
                        name='ApplicationID'
                        value={applicationNumber}
                        placeholder='Enter the Application Number(e.g.,APP12344)'
                        onChange={(e) => setApplicationNumber(e.target.value)}
                        className='flex-1 border px-3 border-gray-200 shadow rounded'
                    />
                    <button
                        variant="government" className='px-6 bg-blue-800 py-3 rounded-xl text-white shadow hover:bg-blue-900'
                        onClick={HandleTrackApplication}>
                        Check Stauts
                    </button>
                    
                </div>
                {/* tracking result */}
                <div>
  <h1>Application Details</h1>
  <div>
    {trackingResult ? (
      <>
        <div>
          <p>Application ID</p>
          <p>{trackingResult.applicationId}</p>
        </div>
        <div>
          <p>Status</p>
         <span
                  className={`px-3 py-1 rounded-lg font-semibold ${
                    trackingResult.status === "Approved"
                      ? "bg-green-100 text-green-700"
                      : trackingResult.status === "Rejected"
                      ? "bg-red-100 text-red-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
            {trackingResult.status}
          </span>
        </div>
      </>
    ) : (
      <p>No application data found.</p>
    )}
  </div>
</div>


            </div>

            
            <div>

            </div>
        </section>
    )
}

export default ApplicationTracking