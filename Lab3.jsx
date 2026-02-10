import { useState } from "react";
const App = () => {

  const styles = {
    container: {
      textAlign: "center",
      fontFamily: "Arial,sans-serif",
      marginTop: "50px",
     
    },
     button: {
        margin: "10px",
        padding: "10px 20px",
        fontSize: "16px",
        cursor: "pointer",
      },
      resetButton: {
        margin: "10px",
        padding: "10px 20px",
        fontSize: "16px",
        cursor: "pointer",
        color: "white",
        backgroundColor:"red"
      },
      input: { marginLeft: "10px", padding: "5px", fontSize: "16px" },
  };
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const increase = () => setCount(count + step);

  const decrease = () => setCount(count - step >= 0 ? count - step : 0);

  const reset = () => setCount(0);

  return (
    <div style={styles.container}>
      <h1>Counter Application</h1>
      <h2>Counter value :{count}</h2>
      <div>
        <label>Step Value: </label>
        <input
          type="number"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
          styles={styles.container}
        />
      </div>

      <div>
        <button onClick={increase} style={styles.button}>
          Increase
        </button>
        <button onClick={decrease} style={styles.button}>
          Decrease
        </button>
        <button onClick={reset} style={styles.resetButton}>
          Reset
        </button>
      </div>
    </div>
  );

  
};

export default App;
