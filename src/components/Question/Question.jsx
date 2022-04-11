import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Question.css'
import { setQuestions } from '../../redux/actions'
import { useDispatch } from 'react-redux'

const Question = ({ currQues,
  setCurrQues,
  questions,
  options,
  correct,
  setScore,
  score,
  }) => {

  const [selected, setSelected] = useState()
  const [error, setError] = useState(false)

  const navigate = useNavigate();
const dispatch = useDispatch()
  const handleSelect =( i )=> {
    if(selected === i && selected===correct){
      return "select"
    }
    else if(selected === i && selected!==correct){
      return "wrong"
    }
    else if(i===correct){
      return "select"
    }
  }

  const handleCheck = (i) => {
    setSelected(i);
    if(i === correct) setScore((prevState)=> prevState + 1);
    setError(false)
  }

  const handleQuit = () => {
    setCurrQues(0);
    dispatch(setQuestions())
  }

  const handleNext = () => {
    //current question is on 9, which is the last question
    if(currQues> 8){
      navigate('/result', {state: {score}})
    }
    else if(selected){
      setCurrQues(currQues + 1)
      setSelected()
    }
    else{
      setError("Please select an option.")
    }
  }

  return (
    <div className='question'>
      <h1>Question: {currQues + 1}</h1>

      <div className="singleQuestion">
        <h2>{questions[currQues].question}</h2>
        {error && (<div>{error}</div>)}
        <div className="options">
          
          {
            options && 
              options.map((i) => <button key={i} onClick={()=>{handleCheck(i)}} className={`singleOption ${selected && handleSelect(i)}`} disabled={selected}>{i}</button>)
          }
        </div>
        <div className="controls">
          <button
            onClick={() => handleQuit()}
          >
            Quit
          </button>
          <button
           
            onClick={()=> handleNext()}
          >
            {currQues > 8 ? "Submit" : "Next Question"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Question