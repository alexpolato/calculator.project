  import { useState } from 'react';

  function App() {
    const [calc, setCalc] = useState("");
    const [result, setResult] = useState("");

    const ops = ['/', '*', '+', '-', '.'];

    const updadeteCalc = value => {
      
      if(
        ops.includes(value) && calc === '' ||
        ops.includes(value) && ops.includes(calc.slice(-1))
      ){
        return;
      }
      
      setCalc(calc + value);
      if(!ops.includes(value)) {
        setResult(eval(calc + value).toString());
      }
    }
    const deleteCalc = () => {
      setResult("");
      setCalc("");

    }

    const equalCalc = () => {
      setCalc(eval(calc).toString());
      setResult("");
    }

    const creatDigits = () =>{
      const digits = [];

      for (let i = 9; i > 0; i--){
        digits.push(
          <button onClick={() => updadeteCalc(i.toString())}
          key={i}>{i}</button>
        )
      }
      return digits;
    }



    return (
      <div className="App">
        <div className="calculator">
          <div className="display">
            {result ? <span>{result}</span> : '' }
            { calc || "0" }
          </div>
          <div className="operators">
            <button onClick={() => updadeteCalc('/')}>/
            </button>
            <button onClick={() => updadeteCalc('*')}>*
            </button>
            <button onClick={() => updadeteCalc('+')}>+
            </button>
            <button onClick={() => updadeteCalc('-')}>-
            </button>

            <button onClick={() => deleteCalc()}>DEL
            </button>
          </div>
          <div className="digits">
            { creatDigits() }
            <button onClick={() => equalCalc()}>=</button>
            <button onClick={() => updadeteCalc('.')}>.</button>
            <button onClick={() => updadeteCalc('0')}>0</button>
            
            
          </div>

        </div>
      </div>
    );
  }

  export default App;
