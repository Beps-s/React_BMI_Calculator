import { useState } from 'react';
import Slider from 'react-input-slider';
import './Calculator.module.css';

const Calculator = (props) => {

    const [ weight, setWeight ] = useState(20);
    const [ height, setHeight ] = useState(100);
    const [weightState] = useState({ x: 20, xmax: 300, xmin: 20 });
    const [heightState] = useState({ x: 100, xmax: 220, xmin: 100 });

    const submitHandler = (e) => {
        e.preventDefault();
        props.calcBMI(height,weight)
    }

    return (
        <form onSubmit={submitHandler}>
        <div className="weightInput">
          <label htmlFor="weightinput">Enter your weight (20kg - 300kg):</label>
          <br></br>
          <Slider
            axis="x"
            x={weight}
            xmax={weightState.xmax}
            xmin={weightState.xmin}
            onChange={({ x }) => setWeight(x)}
            />
          <input
            className='form-control-sm'
            name="weightInput"
            type="number"
            min="20"
            max="300"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            /> 
        </div>
        <br></br>
        <div className="heightInput">
          <label htmlFor="heightInput">Enter your height (100cm - 220cm):</label>
          <br></br>
          <Slider
            axis="x"
            x={height}
            xmax={heightState.xmax}
            xmin={heightState.xmin}
            onChange={({ x }) => setHeight(x)}
            />
          <input
          className='form-control-sm'
          name="heightInput"
          type="number"
          min="100"
          max="220"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          />
        </div> 
        <div className='buttons'>
          <button className='btn btn-light mb-3' type="submit">Calculate</button>
        </div>
      </form>
    )
}

export default Calculator;