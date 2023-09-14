import React,{useState,useEffect} from 'react'
import {Form,Input,message} from "antd"
import {Link,useNavigate} from "react-router-dom"
import Spinner from '../components/Spinner'
import axios from "axios"
import "./Login.css"
const Login = () => {
    
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const submitHandler = async(values) => {
        try{
            setLoading(true)
            const {data} = await axios.post("/users/login",values)
            setLoading(false)
            message.success("login success")
            localStorage.setItem("user" , JSON.stringify({...data,password:""}))
            navigate("/")
        } catch (error){
            setLoading(false)
            message.error("something went wrong")
        }
    }
    
    useEffect(()=>{
        if(localStorage.getItem("user")){
            navigate("/")
        }},[navigate]);
  return (
    <>
    <div className='bady'>
    <div className='register-page '>
        <div className='container'>
            <div className='card'>
        {loading && <Spinner />}
           <Form layout="vertical" onFinish={submitHandler}>
                <h2>Login Form</h2>
                
                <Form.Item label = "Email" name = "email"> 
                    <Input type = "email" />
                </Form.Item>
                <Form.Item label = "Password" name = "password"> 
                    <Input type = "password"/>
                </Form.Item>
                <div className='d-flex justify-content-between'>
                    <Link to ="/register">not a user</Link>
                    <button className='btn btn-primary'>Login</button>
                </div>

           </Form>
           </div>
           </div>
    </div>
    </div>
    </>
  )
}

export default Login
