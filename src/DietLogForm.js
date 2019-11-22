import React, {Fragment, useState} from 'react';
import {Form, Button} from 'react-bootstrap'
import DailyFoodCard from './DailyFoodCard';
import uuid from "uuid";

export default function DietLogForm(){
    const [monday, setMonday] = useState([]);
    const [tuesday, setTuesday] = useState([]);
    const [wednesday, setWednesday] = useState([]);
    const [thursday, setThursday] = useState([]);
    const [friday, setFriday] = useState([]);
    const [saturday, setSaturday] = useState([]);
    const [sunday, setSunday] = useState([]);
    const [selectedFood, setSelectedFood] = useState(null);
    const [servings, setServings] = useState(0);

    const foods = [{ name: "Cheese, natural, conventional, WI, USA", carbon: 9.84, category: "Dairy"}, {name: "Atlantic Salmon, farmed, Norway", carbon: 1.89, category: "Seafood"}];

    function handleChangeFood(e) {
        const foodName = e.target.value;
        const food = foods.find(f => f.name === foodName);
        setSelectedFood(food);
    };

    const addMonday = () => {
        let foodObject = makeFoodObject();
        let newMonday = [...monday, foodObject]
        setMonday(newMonday);
    }

    const addTuesday = () => {
        let foodObject = makeFoodObject();
        let newDayArray = [...tuesday, foodObject]
        setTuesday(newDayArray);
    }
    const addWednesday = () => {
        let foodObject = makeFoodObject();
        let newDayArray = [...wednesday, foodObject]
        setWednesday(newDayArray);
    }
    const addThursday = () => {
        let foodObject = makeFoodObject();
        let newDayArray = [...thursday, foodObject]
        setThursday(newDayArray);
    }
    const addFriday = () => {
        let foodObject = makeFoodObject();
        let newDayArray = [...friday, foodObject]
        setFriday(newDayArray);
    }
    const addSaturday = () => {
        let foodObject = makeFoodObject();
        let newDayArray = [...saturday, foodObject]
        setSaturday(newDayArray);
    }
    const addSunday = () => {
        let foodObject = makeFoodObject();
        let newDayArray = [...sunday, foodObject]
        setSunday(newDayArray);
    }
    const makeFoodObject = () => {
        let foodObject = {};
        foodObject["food"] = selectedFood;
        foodObject["servings"] = servings;
        foodObject["id"] = uuid.v4()
        return foodObject;
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
                <Button variant="info" onClick={addTuesday} >
                    Add to Tuesday
                </Button>
                <Button variant="success" onClick={addWednesday} >
                    Add to Wednesday
                </Button>
                <Button variant="secondary" onClick={addThursday} >
                    Add to Thursday
                </Button>
                <Button variant="danger" onClick={addFriday} >
                    Add to Friday
                </Button>
                <Button variant="warning" onClick={addSaturday} >
                    Add to Saturday
                </Button>
                <Button variant="dark" onClick={addSunday} >
                    Add to Sunday
                </Button>
            </Form>

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

        </Fragment>

    )
}

