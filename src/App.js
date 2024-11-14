import { useState } from 'react'
import './App.css'

function App() {
  const [display, setDisplay] = useState('0')
  const [equation, setEquation] = useState('')
  const [hasError, setHasError] = useState(false)

  const handleNumber = (num) => {
    setHasError(false)
    if (display === '0' || display === 'Error') {
      setDisplay(num)
    } else {
      setDisplay(display + num)
    }
  }

  const handleOperator = (operator) => {
    setHasError(false)
    setEquation(display + ' ' + operator + ' ')
    setDisplay('0')
  }

  const handleEqual = () => {
    try {
      const result = eval(equation + display)
      if (!isFinite(result)) {
        throw new Error('Division by zero')
      }
      setDisplay(String(result))
      setEquation('')
    } catch (error) {
      setDisplay('Error')
      setEquation('')
      setHasError(true)
    }
  }

  const handleClear = () => {
    setDisplay('0')
    setEquation('')
    setHasError(false)
  }

  return (
    <div className="calculator">
      <div className="display">
        <div className="equation">{equation}</div>
        <div className={`result ${hasError ? 'error' : ''}`}>{display}</div>
      </div>
      <div className="buttons">
  
  <button onClick={() => handleNumber('1')} className="number">1</button>
  <button onClick={() => handleNumber('2')} className="number">2</button>
  <button onClick={() => handleNumber('3')} className="number">3</button>
  <button onClick={handleClear} className="clear">AC</button>

  <button onClick={() => handleNumber('4')} className="number">4</button>
  <button onClick={() => handleNumber('5')} className="number">5</button>
  <button onClick={() => handleNumber('6')} className="number">6</button>
  <button onClick={() => handleNumber('.')} className="number">.</button>

  <button onClick={() => handleNumber('7')} className="number">7</button>
  <button onClick={() => handleNumber('8')} className="number">8</button>
  <button onClick={() => handleNumber('9')} className="number">9</button>
  <button onClick={() => handleNumber('0')} className="zero">0</button>

  <button onClick={() => handleOperator('*')} className="operator">×</button>
  <button onClick={() => handleOperator('+')} className="operator">+</button>
  <button onClick={() => handleOperator('-')} className="operator">−</button>
  <button onClick={() => handleOperator('/')} className="operator">÷</button>


  <button onClick={handleEqual} className="equal">=</button>
</div>

    </div>
  )
}

export default App;