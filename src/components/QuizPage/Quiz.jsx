import React, { useEffect, useState } from 'react'
import { useSelector} from 'react-redux'
import './Quiz.css'
import Question from '../Question/Question'

const Quiz = () => {

  const [options, setOptions] = useState('');
  const [currQues, setCurrQues] = useState(0)
  const [name, setName] = useState('')
  const [score, setScore] = useState(0)


  const Questions = useSelector((state)=> {
    return state.reducer.questions.results
  })

  const State = useSelector((state)=>{
    return state.reducer
  })


  useEffect(()=> {
    setOptions(Questions && handleRandom([Questions[currQues]?.correct_answer,...Questions[currQues]?.incorrect_answers]))
    setName(State.username)
  },[Questions])

  const handleRandom = (optionss) => {
    return optionss.sort(()=> Math.random() - 0.5)
  }
  console.log(options)

  return (
    <div className='quiz'>

    <span className='subtitle'>
      Welcome, {name?name:''}
    </span>
    { Questions ? (<>
      <div className="quizInfo">
        <span>{Questions[currQues].category}</span>
        <span>Score: {score}</span>
      </div>

      <Question 
        currQues={currQues}
        setCurrQues={setCurrQues}
        questions={Questions}
        options={options}
        correct={Questions[currQues]?.correct_answer}
        score={score}
        setScore={setScore}
      />
    </>) : "Loading..." }
      

    </div>
  )
}

export default Quiz