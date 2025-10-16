import React from 'react';
import { Link } from "@heroui/link";
import Table from 'react-bootstrap/Table';
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";



export default function InterestList() {
    return (
        <>
            {/* Breadcrumb section */}
            <div className="grid grid-cols-2">
                <h3 className="text-[18px] font-semibold"> Interest Listing </h3>
                <div className="flex justify-end">
                    <p className="text-gray-600 text-[14px]"><Link href="/dashboard" className="text-[#3d7754] text-[14px] hover:text-gray-600 hover:underline">Dashboard /</Link> Interest Listing </p>
                </div>
            </div>
            {/* // Breadcrumb section */}


            <div className="bg-[#fff] shadow-sm p-4 mt-3 rounded-md">
                <Table responsive>
                    <thead>
                        <tr>
                            <th className="text-[15px] font-medium">S.No.</th>
                            <th className="text-[15px] font-medium">Interest name</th>
                            <th className="text-[15px] font-medium">Interest Category</th> 
                            <th className="text-[15px] font-medium">Action</th> 
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-[14px]">1</td>
                            <td className="text-[14px]">Rock Climbing</td>
                            <td className="text-[14px]">Outdoor Activities</td> 
                            <td className="text-[14px]">
                                <Link href="/interest/addInterest"><MdEdit className="text-[#3d7754] hover:text-[#000] bg-[#3d775429] w-[25px] h-[25px] p-[4px] rounded-sm" /></Link> &nbsp; 
                                <Link href="#"><MdDelete className="text-[#3d7754] hover:text-[#000] bg-[#3d775429] w-[25px] h-[25px] p-[4px] rounded-sm" /></Link>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-[14px]">2</td>
                            <td className="text-[14px]">Gym Workouts</td>
                            <td className="text-[14px]">Fitness Activities</td> 
                            <td className="text-[14px]">
                                <Link href="/interest/addInterest"><MdEdit className="text-[#3d7754] hover:text-[#000] bg-[#3d775429] w-[25px] h-[25px] p-[4px] rounded-sm" /></Link> &nbsp; 
                                <Link href="#"><MdDelete className="text-[#3d7754] hover:text-[#000] bg-[#3d775429] w-[25px] h-[25px] p-[4px] rounded-sm" /></Link>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-[14px]">3</td>
                            <td className="text-[14px]">Community Service</td>
                            <td className="text-[14px]">Social Activities</td> 
                            <td className="text-[14px]">
                                <Link href="/interest/addInterest"><MdEdit className="text-[#3d7754] hover:text-[#000] bg-[#3d775429] w-[25px] h-[25px] p-[4px] rounded-sm" /></Link> &nbsp; 
                                <Link href="#"><MdDelete className="text-[#3d7754] hover:text-[#000] bg-[#3d775429] w-[25px] h-[25px] p-[4px] rounded-sm" /></Link>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-[14px]">4</td>
                            <td className="text-[14px]">Painting</td>
                            <td className="text-[14px]">Art Culture</td> 
                            <td className="text-[14px]">
                                <Link href="/interest/addInterest"><MdEdit className="text-[#3d7754] hover:text-[#000] bg-[#3d775429] w-[25px] h-[25px] p-[4px] rounded-sm" /></Link> &nbsp; 
                                <Link href="#"><MdDelete className="text-[#3d7754] hover:text-[#000] bg-[#3d775429] w-[25px] h-[25px] p-[4px] rounded-sm" /></Link>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-[14px]">5</td>
                            <td className="text-[14px]">Bird Watching</td>
                            <td className="text-[14px]">Outdoor Activities</td> 
                            <td className="text-[14px]">
                                <Link href="/interest/addInterest"><MdEdit className="text-[#3d7754] hover:text-[#000] bg-[#3d775429] w-[25px] h-[25px] p-[4px] rounded-sm" /></Link> &nbsp; 
                                <Link href="#"><MdDelete className="text-[#3d7754] hover:text-[#000] bg-[#3d775429] w-[25px] h-[25px] p-[4px] rounded-sm" /></Link>
                            </td>
                        </tr>
                    </tbody>
                </Table> 
            </div>
        </>
    )
}
