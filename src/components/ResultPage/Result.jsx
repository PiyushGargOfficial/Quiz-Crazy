import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useLocation,useNavigate } from 'react-router-dom'

const Result = () => {

  const location = useLocation();
  const name = useSelector((state)=> {
        return state.reducer.username;
    })
const navigate = useNavigate();

const navigateHome = () => {
    navigate('/')
}

    useEffect(()=> {
        if(!name){
            navigateHome()
        }
    },[name,navigate])

  return (
    <div className='result'>
        <span className="title">Final Score: {location.state.score}</span>
        <button onClick={()=>{navigateHome()}}>Go to Homepage</button>
    </div>
  )
}

export default Result