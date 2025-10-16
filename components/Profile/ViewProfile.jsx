 
import Link from 'next/link';
import React from 'react';

export default function ViewProfile() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">User Management</h1>
          <p className="text-gray-600">Manage all user profiles and information</p>
        </div>

        {/* Users List */}
        <div className="space-y-4">
          {/* User 1 */}
            <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="p-4 sm:p-6">
                    <div className="flex flex-col lg:flex-row gap-6"> 
                        <div className="flex-shrink-0">
                            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-lg overflow-hidden bg-gray-200 mx-auto lg:mx-0">
                                <img 
                                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop" 
                                alt="Profile"
                                className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        <div className="flex-1 space-y-4">
                            <div className="grid grid-cols-12">
                                <div className="col-span-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-2">
                                        <div>
                                        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">First Name</label>
                                        <p className="text-base font-medium text-gray-900 mt-1">John</p>
                                        </div>
                                        <div>
                                        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Last Name</label>
                                        <p className="text-base font-medium text-gray-900 mt-1">Doe</p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2">
                                        <div>
                                        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Email</label>
                                        <p className="text-base text-gray-900 mt-1 break-all">john.doe@example.com</p>
                                        </div> 
                                    </div> 
                                </div>
                                <div className="col-span-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Address</label>
                                            <p className="text-base text-gray-900 mt-1">123 Main St, New York</p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Phone Number</label>
                                        <p className="text-base text-gray-900 mt-1">+1 234-567-8900</p>
                                        </div>
                                    </div>

                                    <div className="pt-2">
                                        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Biographical Info</label>
                                        <p className="text-base text-gray-700 mt-1 leading-relaxed">Software developer with 5 years of experience in web development.</p>
                                    </div>
                                </div>
                            </div> 

                            <div className="flex flex-wrap gap-3 pt-2"> 
                                <Link href="/profile/editProfile">
                                    <button className="px-4 py-2 bg-[#3d7754] hover:bg-[#234e34] text-white text-sm font-medium rounded-md transition-colors">
                                    Edit
                                    </button>
                                </Link>
                                <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md transition-colors">
                                Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  
            
        </div>
      </div>
    </div>
  );
}