import React, {Fragment, useState} from 'react';
import {Form, CardGroup, Button} from 'react-bootstrap'
import DailyFoodCard from './DailyFoodCard';

export default function DietLogForm(){
    const [monday, setMonday] = useState([]);
    const [tuesday, setTuesday] = useState([]);
    const [wednesday, setWednesday] = useState([]);
    const [thursday, setThursday] = useState([]);
    const [friday, setFriday] = useState([]);
    const [saturday, setSaturday] = useState([]);
    const [sunday, setSunday] = useState([]);
    const [selectedFood, setSelectedFood] = useState(null);
    const [selectedDay, setSelectedDay] = useState(null);
    const [servings, setServings] = useState(0);

    const foods = [{ name: "Cheese, natural, conventional, WI, USA", carbon: 9.84, category: "Dairy"}, {name: "Atlantic Salmon, farmed, Norway", carbon: 1.89, category: "Seafood"}];
    const days = ["Monday", "Tuesday", "Wednesday","Thursday", "friday", "saturday", "sunday"]

    function handleChangeFood(e) {
        const foodName = e.target.value;
        const food = foods.find(f => f.name === foodName);
        setSelectedFood(food);
    };

    function handleChangeDay(e) {
        setSelectedDay(e.target.value);
    };

    const addMonday = () => {
        let foodObject = makeFoodObject();
        let newMonday = [...monday, foodObject]
        console.log("in add Monday", foodObject);
        console.log("new Monday", newMonday);
        setMonday(newMonday);
        console.log(monday)
    }

    const makeFoodObject = () => {
        let foodObject = {};
        foodObject["food"] = selectedFood;
        foodObject["servings"] = servings;
        return foodObject;
        console.log("in makeFood", foodObject);
    }
    return(

        <Fragment>
            <Form className="container">
                <h1>Add Food to your Daily Food Logs</h1>
                <Form.Group controlId="foodForm.nameInput">
                    <Form.Label>Food</Form.Label>
                    <Form.Control
                        required 
                        as="select" 
                        onChange={handleChangeFood} 
                        multiple>
                        {foods.map(food => (
                            <option key={food.name} name='food' value={food.name}>{food.name}: {food.carbon} </option>
                        ))}
                    </Form.Control>
                </Form.Group>

                {/* <Form.Group controlId="foodForm.category" >
                    <Form.Label>Day of the Week</Form.Label>
                    <Form.Control
                        required
                        as="select"
                        onChange={handleChangeDay}
                        multiple>
                            {days.map(day => (
                                <option key={day} name='day' value={day}>{day}</option>
                            ))}
                    </Form.Control> */}
                {/* </Form.Group> */}

                <Form.Group controlId="foodForm.emissionsAmount" >
                    <Form.Label>Servings (examples: 0.5, 1, 1.25)</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        onChange={event => setServings(event.target.value)}
                        value={servings}
                    />
                </Form.Group>
                <Button variant="primary" onClick={addMonday} >
                    Add to Monday
                </Button>
            </Form>

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
        </Fragment>

    )
}

