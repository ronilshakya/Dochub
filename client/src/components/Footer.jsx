import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-blue-900 text-white py-10">
            <div className="max-w-7xl mx-auto px-10 lg:px-20 grid grid-cols-1 md:grid-cols-3 gap-x-20 gap-y-10">
                {/* Left Section */}
                <div>
                    <h2 className="text-xl font-bold mb-3">Government of Nepal</h2>
                    <p className="text-sm mb-4">
                        Official online portal for government services. Providing efficient,
                        transparent, and accessible services to all citizens of Nepal.
                    </p>
                    <div className="flex items-center space-x-2 mb-1">
                        <span role="img" aria-label="email">📧</span>
                        <a href="mailto:info@gov.np" className="hover:underline">info@gov.np</a>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span role="img" aria-label="phone">📞</span>
                        <a href="tel:014211234" className="hover:underline">01-4211234</a>
                    </div>
                </div>

                {/* Center Section */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:underline">Prime Minister's Office</a></li>
                        <li><a href="#" className="hover:underline">Ministry of Home Affairs</a></li>
                        <li><a href="#" className="hover:underline">Department Registry</a></li>
                        <li><a href="#" className="hover:underline">Help & Support</a></li>
                    </ul>
                </div>

                {/* Right Section */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Services</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:underline">Birth Certificate</a></li>
                        <li><a href="#" className="hover:underline">Marriage Certificate</a></li>
                        <li><a href="#" className="hover:underline">Passport Services</a></li>
                        <li><a href="#" className="hover:underline">Land Services</a></li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-blue-800 mt-10 pt-6 text-sm text-center px-6">
                <p>© 2025 Nepal Government | All Rights Reserved</p>
                <div className="mt-2 space-x-4">
                    <a href="#" className="hover:underline">Privacy Policy</a>
                    <a href="#" className="hover:underline">Terms of Service</a>
                    <a href="#" className="hover:underline">Accessibility</a>
                </div>
            </div>
        </footer>

    )
}

export default Footer