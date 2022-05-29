import React, { useState } from 'react';
import './App.css';
import WeightList from './components/WeightList';
import Calculator from './components/Calculator';

function App() {
  const [bmi, setBmi] = useState();
  const [bmiDesc, setBmiDesc] = useState();

  const calcBmi = (enteredHeight, enteredWeight) => {

    let curBmi = (Math.round(((enteredWeight / (enteredHeight / 100) ** 2) * 10)) / 10);

    if (curBmi === Infinity || curBmi === 0){
      setBmi('NaN');
      setBmiDesc('');
    } else {
      setBmi('Your BMI is: ' + curBmi)

    if (curBmi < 18.5) {
      setBmiDesc('You are underweight')
    } else if (curBmi >= 18.5 && curBmi < 25) {
      setBmiDesc('You are normal weight')
    } else if (curBmi >= 25 && curBmi < 30) {
      setBmiDesc('You are overweight')
    } else {
      setBmiDesc('You are obese')
    }
  }
  };


  return (
    <div className="App">
      <div className='App-back'>
        <h1>BMI Calculator</h1>
        <br></br>
        <Calculator calcBMI={calcBmi}/>
        <h1>{bmi}</h1>
        <h1>{bmiDesc}</h1>
        <WeightList/>
      </div>
    </div>
  );
}

export default App;