import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FoodForm from './FoodForm';
import FoodList from './FoodList';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        
      </header> */}
      <FoodForm />
      <FoodList />
    </div>
  );
}

export default App;
