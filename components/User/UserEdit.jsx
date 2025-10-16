import React from 'react';
import { Link } from "@heroui/link";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';



export default function UserEdit() {

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
                <h3 className="text-[18px] font-semibold"> User Edit </h3>
                <div className="flex justify-end">
                    <p className="text-gray-600 text-[14px]"><Link href="/dashboard" className="text-[#3d7754] text-[14px] hover:text-gray-600 hover:underline">Dashboard /</Link> <Link href="/user/userListing" className="text-[#3d7754] text-[14px] hover:text-gray-600 hover:underline"> User Listing </Link> / User Edit</p>
                </div>
            </div>
            {/* // Breadcrumb section */}

            <div className="bg-[#fff] shadow-sm p-4 mt-3 rounded-md">
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="4" controlId="validationCustom01">
                            <Form.Label className="text-[14px]">First name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="First name" 
                                style={{ boxShadow: 'none', outline: 'none' }}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom02">
                            <Form.Label className="text-[14px]">Last name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Last name" 
                                style={{ boxShadow: 'none', outline: 'none' }}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                            <Form.Label className="text-[14px]">Username</Form.Label>
                            <InputGroup hasValidation>
                                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                <Form.Control
                                type="text"
                                placeholder="Username"
                                aria-describedby="inputGroupPrepend"
                                required
                                style={{ boxShadow: 'none', outline: 'none' }}
                                />
                                <Form.Control.Feedback type="invalid">
                                Please choose a username.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="4" controlId="validationCustom04">
                            <Form.Label className="text-[14px]">Phone</Form.Label>
                            <Form.Control
                            type="text"
                            placeholder="Phone"
                            required
                            style={{ boxShadow: 'none', outline: 'none' }}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid phone number.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom04">
                            <Form.Label className="text-[14px]">Address</Form.Label>
                            <Form.Control
                            type="text"
                            placeholder="Address"
                            required
                            style={{ boxShadow: 'none', outline: 'none' }}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid Address.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom05">
                            <Form.Label className="text-[14px]">City</Form.Label>
                            <Form.Control
                            type="text"
                            placeholder="City"
                            required
                            style={{ boxShadow: 'none', outline: 'none' }}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid city.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom06">
                            <Form.Label className="text-[14px]">State</Form.Label>
                            <Form.Control
                            type="text"
                            placeholder="State"
                            required
                            style={{ boxShadow: 'none', outline: 'none' }}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid state.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom07">
                            <Form.Label className="text-[14px]">Zip</Form.Label>
                            <Form.Control
                            type="text"
                            placeholder="Zip"
                            required
                            style={{ boxShadow: 'none', outline: 'none' }}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid zip.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Form.Group className="mb-3">
                        <Form.Check
                        required
                        label="Agree to terms and conditions"
                        feedback="You must agree before submitting."
                        feedbackType="invalid"
                        className="text-[14px]"
                        />
                    </Form.Group>
                    <Button type="submit" className="!bg-[#3d7754] border border-[#3d7754]-100 hover:!bg-[#000]">Submit form</Button>
                </Form>
            </div>
        </>
    )
}
