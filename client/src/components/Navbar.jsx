import React from 'react'

const Navbar = () => {
    return (
        <header className="bg-blue-800 text-white px-12 py-4 border border-b-5 border-b-red-700">
            
           
            <div className="flex items-center justify-between">
              
                <div className="flex items-center space-x-3">
                    <img src="/logo.png" alt="logo" className="w-10 h-10" />
                    <div>
                        <h1 className="font-bold text-lg">DOCHUB</h1>
                        <p className="text-sm">Citizen Service Portal</p>
                    </div>
                </div>

                
                <div className="flex space-x-2">
                    <button className="bg-white text-blue-800 px-3 py-1 rounded hover:bg-gray-200 cursonr-pointer">Sign in</button>
                    <button className="bg-white text-blue-800 px-3 py-1 rounded hover:bg-gray-200 cursonr-pointer ">Login</button>
                </div>
            </div>

            
            <nav className="mt-4 border-t border-blue-600 pt-2">
                <ul className="flex  flex-col md:flex-row md:space-x-8 font-normal font-bold">
                    <li className="py-1 md:py-0 hover:text-red-600 cursor-pointer">Home</li>
                    <li className="py-1 md:py-0 hover:text-red-600 cursor-pointer">Services</li>
                    <li className="py-1 md:py-0 hover:text-red-600 cursor-pointer">Notices</li>
                    <li className="py-1 md:py-0 hover:text-red-600 cursor-pointer">Contact</li>
                    <li className="py-1 md:py-0 hover:text-red-600 cursor-pointer">About</li>
                </ul>
            </nav>

        </header>
    )
}

export default Navbar
