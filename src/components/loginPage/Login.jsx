import React,{useState} from 'react'
import './login.css'

const Login = () => {

    const [nameField, setNameField] = useState('')
    const [category, setCategory] = useState('')


    const handleChange = (e) => {
    setNameField(e.target.value)
}

  return (
    <div className='login'>
        <div className="infoBox">
            <div className="nameField divFlex">
                {/* <div className='legend'>Full Name:</div> */}
                <input type="text" value={nameField} placeholder="Full Name" onChange={(e)=>handleChange(e)} name='nameField'/>
            </div>
            <div className="categoryField divFlex">
                <select value={category} onChange={(e)=>setCategory(e.target.value)}>
                    <option value="science">Science</option>
                    <option value="farming">Farming</option>
                    <option value="sports">Sports</option>
                </select>
            </div>
            <div className="startButton" >Start Quiz</div>
        </div>
    </div>
  )
}

export default Login