import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'

export default function DailyFoodCard({dailyDiet, day}){
    
    return( 
        <Card style={{ width: '35rem' }} key={day}>
            <Card.Header>{day}</Card.Header>
            <ListGroup className="list-group-flush">
                {dailyDiet.map(entry => (
                    <ListGroupItem key={entry.id}>Food:{entry.food.name}, Servings: {entry.servings}</ListGroupItem>
                ))}
            </ListGroup>
        </Card>
    )
}