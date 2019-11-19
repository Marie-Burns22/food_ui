import React, { Component } from 'react'
import { Form } from 'react-bootstrap'

export default class FoodForm extends Component {
    render() {
        return (
            <Form className="container">
                <h1>Add Emission Data for Food</h1>
                <Form.Group controlId="foodForm.nameInput">
                    <Form.Label>Food Name</Form.Label>
                    <Form.Control
                        required 
                        type="text" 
                        placeholder="Food Name"
                    />
                </Form.Group>

                <Form.Group controlId="foodForm.category" >
                    <Form.Label>Food Category</Form.Label>
                    <Form.Control 
                        required
                        type="text"
                        placeholder="Food Category"
                    />
                </Form.Group>

                <Form.Group controlId="foodForm.emissionsAmount" >
                    <Form.Label>Emissions Data</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Emissions Data"
                    />
                </Form.Group>

            </Form>
        )
    }
}