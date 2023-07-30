import React, { useState }  from 'react'
import './BmiCalculator';
const BmiCalculator = () => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmiResult, setBmiResult] = useState(null);
  
    const calculateBMI = () => {
      if (!weight || !height) {
        alert('Please enter weight and height.');
        return;
      }
  
      const heightInMeters = height / 100;
      const bmi = weight / (heightInMeters * heightInMeters);
      setBmiResult(bmi.toFixed(2));
    };
  
  
//function BmiCalculator() {
  return (
    <div>
      <h2>Body Mass Index (BMI) Calculator</h2>
      <div>
        <label>Weight (kg):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <div>
        <label>Height (cm):</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <button onClick={calculateBMI}>Calculate BMI</button>

      {bmiResult && (
        <div>
          <h3>Your BMI Result:</h3>
          <p>{bmiResult}</p>
        </div>
      )}
    </div>
  );
};


  


export default BmiCalc