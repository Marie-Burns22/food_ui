import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'

export default function DailyFoodCard({dailyDiet, day}){
    
    return( 
        <Card style={{ width: '18rem' }}>
            <Card.Header>{day}</Card.Header>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Cras justo odio</ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
            </ListGroup>
        </Card>
    )
}