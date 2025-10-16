import React from 'react';
import { Link } from "@heroui/link";
import Table from 'react-bootstrap/Table';
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";



export default function CategoryList() {
    return (
        <>
            {/* Breadcrumb section */}
            <div className="grid grid-cols-2">
                <h3 className="text-[18px] font-semibold"> Category Listing </h3>
                <div className="flex justify-end">
                    <p className="text-gray-600 text-[14px]"><Link href="/dashboard" className="text-[#3d7754] text-[14px] hover:text-gray-600 hover:underline">Dashboard /</Link> Category Listing </p>
                </div>
            </div>
            {/* // Breadcrumb section */}


            <div className="bg-[#fff] shadow-sm p-4 mt-3 rounded-md">
                <Table responsive>
                    <thead>
                        <tr>
                            <th className="text-[15px] font-medium">S.No.</th>
                            <th className="text-[15px] font-medium">Category Name</th>
                            <th className="text-[15px] font-medium">Description</th>
                            <th className="text-[15px] font-medium">Image Upload</th>
                            <th className="text-[15px] font-medium">Action</th> 
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="align-middle">
                            <td className="text-[14px]">1</td>
                            <td className="text-[14px]">Outdoor Activities</td>
                            <td className="text-[14px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</td> 
                            <td className="text-[14px]">
                                <img src="https://nmtdevserver.com/doodli/img1.png"
                                alt="image"
                                className="w-[80px] h-auto"
                                />
                            </td> 
                            <td className="text-[14px]">
                                <Link href="/category/addCategory"><MdEdit className="text-[#3d7754] hover:text-[#000] bg-[#3d775429] w-[25px] h-[25px] p-[4px] rounded-sm" /></Link> &nbsp; 
                                <Link href="#"><MdDelete className="text-[#3d7754] hover:text-[#000] bg-[#3d775429] w-[25px] h-[25px] p-[4px] rounded-sm" /></Link>
                            </td>
                        </tr>
                        <tr className="align-middle">
                            <td className="text-[14px]">1</td>
                            <td className="text-[14px]">Fitness Activities</td>
                            <td className="text-[14px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</td> 
                            <td className="text-[14px]">
                                <img src="https://nmtdevserver.com/doodli/img2.png"
                                alt="image"
                                className="w-[80px] h-auto"
                                />
                            </td> 
                            <td className="text-[14px]">
                                <Link href="/category/addCategory"><MdEdit className="text-[#3d7754] hover:text-[#000] bg-[#3d775429] w-[25px] h-[25px] p-[4px] rounded-sm" /></Link> &nbsp; 
                                <Link href="#"><MdDelete className="text-[#3d7754] hover:text-[#000] bg-[#3d775429] w-[25px] h-[25px] p-[4px] rounded-sm" /></Link>
                            </td>
                        </tr>
                        <tr className="align-middle">
                            <td className="text-[14px]">1</td>
                            <td className="text-[14px]">Outdoor Activities</td>
                            <td className="text-[14px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</td> 
                            <td className="text-[14px]">
                                <img src="https://nmtdevserver.com/doodli/img1.png"
                                alt="image"
                                className="w-[80px] h-auto"
                                />
                            </td> 
                            <td className="text-[14px]">
                                <Link href="/category/addCategory"><MdEdit className="text-[#3d7754] hover:text-[#000] bg-[#3d775429] w-[25px] h-[25px] p-[4px] rounded-sm" /></Link> &nbsp; 
                                <Link href="#"><MdDelete className="text-[#3d7754] hover:text-[#000] bg-[#3d775429] w-[25px] h-[25px] p-[4px] rounded-sm" /></Link>
                            </td>
                        </tr>
                        <tr className="align-middle">
                            <td className="text-[14px]">1</td>
                            <td className="text-[14px]">Fitness Activities</td>
                            <td className="text-[14px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</td> 
                            <td className="text-[14px]">
                                <img src="https://nmtdevserver.com/doodli/img2.png"
                                alt="image"
                                className="w-[80px] h-auto"
                                />
                            </td> 
                            <td className="text-[14px]">
                                <Link href="/category/addCategory"><MdEdit className="text-[#3d7754] hover:text-[#000] bg-[#3d775429] w-[25px] h-[25px] p-[4px] rounded-sm" /></Link> &nbsp; 
                                <Link href="#"><MdDelete className="text-[#3d7754] hover:text-[#000] bg-[#3d775429] w-[25px] h-[25px] p-[4px] rounded-sm" /></Link>
                            </td>
                        </tr>
                        <tr className="align-middle">
                            <td className="text-[14px]">1</td>
                            <td className="text-[14px]">Outdoor Activities</td>
                            <td className="text-[14px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</td> 
                            <td className="text-[14px]">
                                <img src="https://nmtdevserver.com/doodli/img1.png"
                                alt="image"
                                className="w-[80px] h-auto"
                                />
                            </td> 
                            <td className="text-[14px]">
                                <Link href="/category/addCategory"><MdEdit className="text-[#3d7754] hover:text-[#000] bg-[#3d775429] w-[25px] h-[25px] p-[4px] rounded-sm" /></Link> &nbsp; 
                                <Link href="#"><MdDelete className="text-[#3d7754] hover:text-[#000] bg-[#3d775429] w-[25px] h-[25px] p-[4px] rounded-sm" /></Link>
                            </td>
                        </tr>
                    </tbody>
                </Table> 
            </div>
        </>
    )
}
