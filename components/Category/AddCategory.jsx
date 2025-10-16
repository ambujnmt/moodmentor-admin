import React, { useCallback, useState } from 'react';
import { Link } from "@heroui/link";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'; 
import { useDropzone } from 'react-dropzone';
import { IoCloudUploadOutline } from "react-icons/io5";




export default function AddCategory() {

    const [validated, setValidated] = useState(false);
    const [uploadedFiles, setUploadedFiles] = useState([]);

    // This is for form validation
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
        console.log("Uploaded Files:", uploadedFiles);
    };
    // // This is for form validation


    // This is for file upload
    const onDrop = useCallback((acceptedFiles) => {
        setUploadedFiles((prev) => [...prev, ...acceptedFiles]);
    }, []);

    const handleDelete = (indexToRemove) => {
        setUploadedFiles((prev) => prev.filter((_, index) => index !== indexToRemove));
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            'image/png': [],
            'image/jpeg': [],
            'image/gif': [],
        },
        multiple: true
    });
    // // This is for file upload

    return (
        <>
            {/* Breadcrumb section */}
            <div className="grid grid-cols-2">
                <h3 className="text-[18px] font-semibold">Add Category</h3>
                <div className="flex justify-end">
                    <p className="text-gray-600 text-[14px]">
                        <Link href="/dashboard" className="text-[#3d7754] text-[14px] hover:text-gray-600 hover:underline">Dashboard /</Link> Add Category
                    </p>
                </div>
            </div>

            {/* Form section */}
            <div className="bg-[#fff] shadow-sm p-4 mt-3 rounded-md">
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="validationCustom01">
                            <Form.Label className="text-[14px]">Category Name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Category name"
                                style={{ boxShadow: 'none', outline: 'none' }}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} md="6" controlId="validationCustom02">
                            <Form.Label className="text-[14px]">Description</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Description"
                                style={{ boxShadow: 'none', outline: 'none' }}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                    </Row>

                    {/* ==== File Upload Section here ===== */}
                    <div className="mb-4">
                        <h5 className="text-[14px]">Image Upload</h5> 
                        <div
                            {...getRootProps()}
                            className="border border-dotted rounded p-5 text-center"
                            style={{ cursor: 'pointer', background: '#f8f9fa' }}
                        >
                            <input {...getInputProps()} />
                            {
                                isDragActive ? (
                                    <p>Drop the files here ...</p>
                                ) : (
                                    <div>
                                        <IoCloudUploadOutline className="block m-auto text-[30px] text-gray-500" />
                                        <p className="mt-2 text-[23px] font-medium mb-1">Drop your images here, or click to browse</p>
                                        <small className="text-[13px] text-gray-500">(1600 x 1200 (4:3) recommended. PNG, JPG and GIF files are allowed)</small>
                                    </div>
                                )
                            }
                        </div>

                        {/* Show preview with delete */}
                        <div className="mt-4 space-y-2">
                            {uploadedFiles.map((file, index) => (
                                <div
                                    key={index}
                                    className="d-flex justify-between items-center border rounded p-2"
                                    style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between' }}
                                >
                                    <div className="d-flex align-items-center gap-3" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <img
                                            src={URL.createObjectURL(file)}
                                            alt="preview"
                                            height="40"
                                            className="rounded border w-[17%] h-auto"
                                        />
                                        <div>
                                            <div className="fw-semibold">{file.name}</div>
                                            <div className="text-muted text-sm">
                                                {(file.size / 1024).toFixed(2)} KB
                                            </div>
                                        </div>
                                    </div>
                                    <Button variant="danger" size="sm" onClick={() => handleDelete(index)}>
                                        Delete
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* ==== // File Upload Section here ===== */}

                    <Button type="submit" className="!bg-[#3d7754] border border-[#3d7754]-100 hover:!bg-[#000]">
                        Submit form
                    </Button>
                </Form>
            </div>
        </>
    );
}
