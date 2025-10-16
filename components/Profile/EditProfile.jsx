import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import React from 'react';

export default function EditProfile() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">

        {/* Breadcrumb section */}
            <div className="grid grid-cols-2">
                <h3 className="text-[18px] font-semibold"> Profile </h3>
                <div className="flex justify-end">
                    <p className="text-gray-600 text-[14px]"><Link href="/dashboard" className="text-[#3d7754] text-[14px] hover:text-gray-600 hover:underline">Dashboard /</Link> Edit Profile </p>
                </div>
            </div>
            {/* // Breadcrumb section */}

      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
          {/* Left Column - Account Management */}
          <div className="lg:col-span-1">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Account Management</h2>
            
            {/* Profile Image */}
            <div className="relative mb-6">
              <div className="bg-pink-100 rounded-lg overflow-hidden aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
                <button className="absolute top-3 right-3 bg-gray-400 hover:bg-gray-500 text-white rounded-full p-1.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <button className="w-full mt-4 py-2.5 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">
                Upload Photo
              </button>
              <Link href="/profile/viewProfile" className='no-underline'>
                <Button type="submit" className="!bg-[#3d7754] border border-[#3d7754]-100 hover:!bg-[#000] mt-3 d-block m-auto">View Profile</Button>
              </Link>
            </div> 
          </div>

          {/* Right Column - Profile Information */}
          <div className="lg:col-span-2">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Profile Information</h2>
            
            <div className="space-y-6">
              {/* Username and First Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> 
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input 
                    type="text"  
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div> 
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div> 
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div> 
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div> 
              </div>
  
 
              {/* About the User Section */}
              <div className="pt-4">
                <h3 className="text-base font-semibold text-gray-900 mb-4">About the User</h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Biographical Info</label>
                  <textarea 
                    rows={5} 
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}