import './App.css'
import { InputForm } from './Form'
import {useState} from "react";

function App() {
    const [showResult, setShowResult] = useState(true);
    const [result, setResult] = useState(0);

    const setResultProp = (result: number) => {
        setShowResult(false);
        setResult(result);
    }

  return (
      <>
          <p className="text-2xl font-bold">Saturacion Pediatrica Media</p>
          <p className="text-2xl font-bold">(2800 msnm)</p>
          <InputForm showResult={setResultProp}/>
          <div hidden={showResult} className="mt-4">
              <p className="font-bold">Media de saturación es:</p>
              <p>{result.toFixed(2)}</p>
              <p className="font-bold">Intervalos de confianza:</p>
              <p>(-2) {(result - 2).toFixed(2)} | {(result + 2).toFixed(2)} (+2)</p>
          </div>
      </>
  )
}

export default App
