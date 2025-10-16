import React from 'react';
import { Link } from "@heroui/link";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';



export default function AddInterest() {

    const [validated, setValidated] = useState(false);
    
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        }
    
        setValidated(true);
    };

    return (
        <>
            {/* Breadcrumb section */}
            <div className="grid grid-cols-2">
                <h3 className="text-[18px] font-semibold"> Add Interest </h3>
                <div className="flex justify-end">
                    <p className="text-gray-600 text-[14px]"><Link href="/dashboard" className="text-[#3d7754] text-[14px] hover:text-gray-600 hover:underline">Dashboard /</Link> Add Interest</p>
                </div>
            </div>
            {/* // Breadcrumb section */}

            <div className="bg-[#fff] shadow-sm p-4 mt-3 rounded-md">
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="validationCustom01">
                            <Form.Label className="text-[14px]">Interest Name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Interest name" 
                                style={{ boxShadow: 'none', outline: 'none' }}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationCustom02">
                            <Form.Label className="text-[14px]">Interest Category</Form.Label>
                            <Form.Select
                                required
                                defaultValue=""
                                style={{ boxShadow: 'none', outline: 'none' }}
                            >
                                <option value="" disabled>Select Category</option>
                                <option value="">Outdoor Activities</option>
                                <option value="">Fitness Activities</option>
                                <option value="">Social Activities</option>
                                <option value="">Art Culture</option>
                                <option value="">Hobbies</option>
                            </Form.Select>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group> 
                    </Row>
                      
                    <Button type="submit" className="!bg-[#3d7754] border border-[#3d7754]-100 hover:!bg-[#000]">Submit form</Button>
                </Form>
            </div>
        </>
    )
}
