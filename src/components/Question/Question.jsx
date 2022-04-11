import React, { useState } from 'react'
import './Question.css'

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
    if(i === correct) setScore(score + 1);
    setError(false)
  }

  return (
    <div className='question'>
      <h1>Questions: {currQues + 1}</h1>

      <div className="singleQuestion">
        <h2>{questions[currQues].question}</h2>
        <div className="options">
          {error && {error}}
          {
            options && 
              options.map((i) => <button key={i} onClick={()=>{handleCheck(i)}} className={`singleOption ${selected && handleSelect(i)}`} disabled={selected}>{i}</button>)
          }
        </div>
        {/* <div className="controls"> */}
          {/* <Button
            variant="contained"
            color="secondary"
            size="large"
            style={{ width: 185 }}
            href="/"
            onClick={() => handleQuit()}
          >
            Quit
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ width: 185 }}
            onClick={handleNext}
          >
            {currQues > 20 ? "Submit" : "Next Question"}
          </Button>
        </div> */}
      </div>
    </div>
  )
}

export default Question