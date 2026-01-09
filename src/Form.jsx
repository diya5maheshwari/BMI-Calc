import "./App.css";
import { useState } from "react";
function Form() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [message, setMessage] = useState("");
  const [bmi, setBmi] = useState("");

  const calculate = (event) => {
    event.preventDefault();

    const w = parseFloat(weight);
    const h = parseFloat(height);

    if (w == 0 || h == 0) {
      alert("please enter the valid weight and height");
    } else {
      const heightInMeters = h * 0.0254;
      // const bmi = (w / (h * h)) * 703;
      const bmi = w / (heightInMeters * heightInMeters);

      setBmi(bmi.toFixed(1));

      if (bmi < 18.5) {
        setMessage("You are underweight");
      } else if (bmi >= 18.5 && bmi < 25) {
        setMessage("You have a healthy weight");
      } else if (bmi >= 25 && bmi < 30) {
        setMessage("You are overweight");
      } else {
        setMessage("You are obese");
      }
    }
  };

  const reload = () => {
    window.location.reload();
  };

  return (
    <div >
      <h2>BMI Calculater</h2>

      <form action="" onSubmit={calculate}>
        <label htmlFor="">Weight (kg): </label>
        <input
          className="input"
          type="number"
          name="name"
          placeholder="Enter Weight value"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <br /> <br />
        <label htmlFor="">Height (in): </label>
        <input
          className="input"
          type="number"
          name="name"
          placeholder="Enter Height value"
          onChange={(e) => setHeight(e.target.value)}
        />
        <br /> <br />
        <button className="btn">Submit</button>
        <button className="btn-reload" type="button" onClick={reload}>
          Reload
        </button>
      </form>
      <div>
        <h3>Your BMI is : {bmi}</h3>
        <p>{message}</p>
      </div>
    </div>
  );
}
export default Form;
