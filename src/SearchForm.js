import React from 'react'
import {Form, Col} from 'react-bootstrap'

export default function SearchForm({param, onParamsChange}) {
    return (
        <Form className="ml-3">
            <Form.Row className="align-items-end">
                <Form.Group as={Col}>
                    <Form.Label>Job Description</Form.Label>
                    <Form.Control onChange={onParamsChange} 
                    value={param.description} name="description" type="text" />
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Location</Form.Label>
                    <Form.Control onChange={onParamsChange} 
                    value={param.location} name="location" type="text" />
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Check onChange={onParamsChange}
                    value={param.full_time} name="full_time" id="full_time"
                    label="Only Full Time" type="checkbox" className="mb-2" />
                </Form.Group>
            </Form.Row>
        </Form>
        
    )
}
