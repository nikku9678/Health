import React from 'react'
import {Form, Input , message} from 'antd';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { showLoading , hideLoading } from '../redux/features/alertSlice';
import {Link , useNavigate} from 'react-router-dom'
import "../styles/LoginStyles.css"

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const onfinishHandler= async(values)=>{
        try {
            dispatch(showLoading())
            const res = await axios.post('http://localhost:8080/api/v1/user/login',values)
            window.location.reload()
            dispatch(hideLoading())
            if(res.data.success){
                localStorage.setItem("token",res.data.token);
                message.success('Login successful')
                navigate('/user-home')
            }
            else{
                message.error(res.data.message);
            }
        } 
        catch (error) {
            dispatch(hideLoading());
            console.log(error);
            message.error('Something Went Wrong');
        }
    }
  return (
    <>
    <div className='form-container'>
        <Form layout="vertical" onFinish={onfinishHandler} className='login-form'>
            <h3 className='text-center'>Login Form</h3>
            <Form.Item label="Email" name="email">
                <Input type="email" required/>
            </Form.Item>
            <Form.Item label="Password" name="password">
                <Input type="password" required/>
            </Form.Item>
            <Link to="/register" className="m-2">Click here to Register</Link>
            <button className='btn btn-primary' type="submit">
                Login
            </button>
        </Form>
    </div>
    </>
  )
}

export default Login