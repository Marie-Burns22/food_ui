import React, {useState} from 'react';
import {Form, CardGroup, Card, ListGroup, ListGroupItem} from 'react-bootstrap'
import DailyFoodCard from './DailyFoodCard';

export default function DietLogForm(){
    const [monday, setMonday] = useState([]);
    const [tuesday, setTuesda] = useState([]);
    const [wednesday, setWednesday] = useState([]);
    const [thursday, setThursday] = useState([]);
    const [friday, setFriday] = useState([]);
    const [saturday, setSaturday] = useState([]);
    const [sunday, setSunday] = useState([]);

    return(
        <CardGroup>
            <DailyFoodCard day="Sunday" dailyDiet={sunday} />
            <br />
            <DailyFoodCard day="Monday" dailyDiet={monday} />
            <br />
            <DailyFoodCard day="Tuesday" dailyDiet={tuesday} />
            <br />
            <DailyFoodCard day="Wednesday" dailyDiet={wednesday} />
            <br />
            <DailyFoodCard day="Thursday" dailyDiet={thursday} />
            <br />
            <DailyFoodCard day="Friday" dailyDiet={friday} />
            <br />
            <DailyFoodCard day="Saturday" dailyDiet={saturday} />
            <br />
        </CardGroup>

    )
}

