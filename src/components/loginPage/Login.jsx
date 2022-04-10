import React,{useState} from 'react'
import './login.css'
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {getCreds} from '../../redux/actions'
import Categories from '../../Data/Categories'


const Login = () => {

    const [nameField, setNameField] = useState('')
    const [category, setCategory] = useState('')

    const navigate = useNavigate();
    const dispatch = useDispatch()

    const handleChange = (e) => {
    setNameField(e.target.value)
}

const handleCategory = (e) => {
    setCategory(e.target.value)
}


    const setCreds = () => {
        let fullName = nameField;
        let selectedCategory = category;

        if(fullName && (selectedCategory !== -1) && selectedCategory){
            dispatch(getCreds(fullName,category))
            navigate('/quiz')
        }
    }

  return (
    <div className="mainBox">
    <div className="titleBox">Quiz Crazy</div>
    <div className='login'>
        <div className="infoBox">
            <div className="nameField divFlex">
                {/* <div className='legend'>Full Name:</div> */}
                <input type="text" value={nameField} placeholder="Full Name" onChange={(e)=>handleChange(e)} name='nameField'/>
            </div>
            <div className="categoryField divFlex">
                <select value={category} onChange={(e)=>handleCategory(e)}>
                    {Categories.map((category) => {
                        return <option value={category.value} key={category.value}>{category.category}</option>
                    })}
                </select>
            </div>
            <div className="startButton" onClick={()=>setCreds()}>Start Quiz</div>
        </div>
    </div>
    </div>
  )
}


export default Login