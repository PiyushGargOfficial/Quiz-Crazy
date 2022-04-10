import React, { useEffect, useState } from 'react'
import { useSelector} from 'react-redux'
import './Quiz.css'

const Quiz = () => {

  const [options, setOptions] = useState();
  const [currQues, setCurrQues] = useState(0)
  const [name, setName] = useState('')

  const Questions = useSelector((state)=> {
    return state.reducer.questions.results
  })

  const State = useSelector((state)=>{
    return state.reducer
  })


  useEffect(()=> {
    setOptions(Questions && handleRandom([Questions[currQues]?.correct_answer,...Questions[currQues]?.incorrect_answers]))
    setName(State.username)
  },[])

  const handleRandom = (optionss) => {
    return optionss.sort(()=> Math.random() - 0.5)
  }

  console.log(options)

  return (
    <div className='quiz'>
    <span className='subtitle'>
      Welcome, {name?name:''}
    </span>

    { Questions ? "Questions" : "Loading..." }
      

    </div>
  )
}

export default Quiz