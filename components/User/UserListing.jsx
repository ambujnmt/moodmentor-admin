import React from 'react';
import { Link } from "@heroui/link";
import Table from 'react-bootstrap/Table';
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";



export default function UserListing() {
    return (
        <>
            {/* Breadcrumb section */}
            <div className="grid grid-cols-2">
                <h3 className="text-[18px] font-semibold"> User Listing </h3>
                <div className="flex justify-end">
                    <p className="text-gray-600 text-[14px]"><Link href="/dashboard" className="text-[#3d7754] text-[14px] hover:text-gray-600 hover:underline">Dashboard /</Link> User Listing </p>
                </div>
            </div>
            {/* // Breadcrumb section */}


            <div className="bg-[#fff] shadow-sm p-4 mt-3 rounded-md">
                <Table responsive>
                    <thead>
                        <tr>
                            <th className="text-[15px] font-medium">S.No.</th>
                            <th className="text-[15px] font-medium">First name</th>
                            <th className="text-[15px] font-medium">Last name</th>
                            <th className="text-[15px] font-medium">Username</th>
                            <th className="text-[15px] font-medium">Phone</th>
                            <th className="text-[15px] font-medium">Address</th>
                            <th className="text-[15px] font-medium">City</th>
                            <th className="text-[15px] font-medium">State</th>
                            <th className="text-[15px] font-medium">Zip</th>
                            <th className="text-[15px] font-medium">Action</th> 
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-[14px]">1</td>
                            <td className="text-[14px]">Ajay</td>
                            <td className="text-[14px]">Kumar</td>
                            <td className="text-[14px]">ajay@gmail.com</td>
                            <td className="text-[14px]">+91-0123456789</td>
                            <td className="text-[14px]">Noida Sector 63</td>
                            <td className="text-[14px]">Noida</td>
                            <td className="text-[14px]">Uttar Pradesh</td>
                            <td className="text-[14px]">201301</td>
                            <td className="text-[14px]">
                                <Link href="/user/userEdit"><MdEdit className="text-[#3d7754] hover:text-[#000] bg-[#3d775429] w-[25px] h-[25px] p-[4px] rounded-sm" /></Link> &nbsp; 
                                <Link href="#"><MdDelete className="text-[#3d7754] hover:text-[#000] bg-[#3d775429] w-[25px] h-[25px] p-[4px] rounded-sm" /></Link>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-[14px]">2</td>
                            <td className="text-[14px]">Ajay</td>
                            <td className="text-[14px]">Kumar</td>
                            <td className="text-[14px]">ajay@gmail.com</td>
                            <td className="text-[14px]">+91-0123456789</td>
                            <td className="text-[14px]">Noida Sector 63</td>
                            <td className="text-[14px]">Noida</td>
                            <td className="text-[14px]">Uttar Pradesh</td>
                            <td className="text-[14px]">201301</td>
                            <td className="text-[14px]">
                                <Link href="/user/userEdit"><MdEdit className="text-[#3d7754] hover:text-[#000] bg-[#3d775429] w-[25px] h-[25px] p-[4px] rounded-sm" /></Link> &nbsp; 
                                <Link href="#"><MdDelete className="text-[#3d7754] hover:text-[#000] bg-[#3d775429] w-[25px] h-[25px] p-[4px] rounded-sm" /></Link>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-[14px]">3</td>
                            <td className="text-[14px]">Ajay</td>
                            <td className="text-[14px]">Kumar</td>
                            <td className="text-[14px]">ajay@gmail.com</td>
                            <td className="text-[14px]">+91-0123456789</td>
                            <td className="text-[14px]">Noida Sector 63</td>
                            <td className="text-[14px]">Noida</td>
                            <td className="text-[14px]">Uttar Pradesh</td>
                            <td className="text-[14px]">201301</td>
                            <td className="text-[14px]">
                                <Link href="/user/userEdit"><MdEdit className="text-[#3d7754] hover:text-[#000] bg-[#3d775429] w-[25px] h-[25px] p-[4px] rounded-sm" /></Link> &nbsp; 
                                <Link href="#"><MdDelete className="text-[#3d7754] hover:text-[#000] bg-[#3d775429] w-[25px] h-[25px] p-[4px] rounded-sm" /></Link>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-[14px]">2</td>
                            <td className="text-[14px]">Ajay</td>
                            <td className="text-[14px]">Kumar</td>
                            <td className="text-[14px]">ajay@gmail.com</td>
                            <td className="text-[14px]">+91-0123456789</td>
                            <td className="text-[14px]">Noida Sector 63</td>
                            <td className="text-[14px]">Noida</td>
                            <td className="text-[14px]">Uttar Pradesh</td>
                            <td className="text-[14px]">201301</td>
                            <td className="text-[14px]">
                                <Link href="/user/userEdit"><MdEdit className="text-[#3d7754] hover:text-[#000] bg-[#3d775429] w-[25px] h-[25px] p-[4px] rounded-sm" /></Link> &nbsp; 
                                <Link href="#"><MdDelete className="text-[#3d7754] hover:text-[#000] bg-[#3d775429] w-[25px] h-[25px] p-[4px] rounded-sm" /></Link>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-[14px]">3</td>
                            <td className="text-[14px]">Ajay</td>
                            <td className="text-[14px]">Kumar</td>
                            <td className="text-[14px]">ajay@gmail.com</td>
                            <td className="text-[14px]">+91-0123456789</td>
                            <td className="text-[14px]">Noida Sector 63</td>
                            <td className="text-[14px]">Noida</td>
                            <td className="text-[14px]">Uttar Pradesh</td>
                            <td className="text-[14px]">201301</td>
                            <td className="text-[14px]">
                                <Link href="/user/userEdit"><MdEdit className="text-[#3d7754] hover:text-[#000] bg-[#3d775429] w-[25px] h-[25px] p-[4px] rounded-sm" /></Link> &nbsp; 
                                <Link href="#"><MdDelete className="text-[#3d7754] hover:text-[#000] bg-[#3d775429] w-[25px] h-[25px] p-[4px] rounded-sm" /></Link>
                            </td>
                        </tr>
                    </tbody>
                </Table> 
            </div>
        </>
    )
}
