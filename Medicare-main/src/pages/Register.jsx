import React from 'react'
import {Form, Input , message} from 'antd';
import axios from 'axios'
import {  useDispatch } from 'react-redux';
import { showLoading , hideLoading } from '../redux/features/alertSlice';
import {Link , useNavigate} from 'react-router-dom'
import "../styles/RegisterStyles.css"

const Register = () => {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const onfinishHandler= async (values)=>{
        try {
            dispatch(showLoading());
            const res = await axios.post('http://localhost:8080/api/v1/user/register',values)
            dispatch(hideLoading());
            if(res.data.success){
                message.success('Registered successfully');
                navigate('/login')
            }
            else{
                message.error(res.data.message);
            }
        } catch (error) {
            dispatch(hideLoading());
            console.log(error);
            message.error('Something went wrong')
        }
    }
  return (
    <>

    <div className='form-container'>
        <Form layout="vertical" onFinish={onfinishHandler} className='register-form'>
            <h3 className='text-center'>Register Form</h3>
            <Form.Item label="Name" name="name">
                <Input type="text" required/>
            </Form.Item>
            <Form.Item label="Email" name="email">
                <Input type="email" required/>
            </Form.Item>
            <Form.Item label="Password" name="password">
                <Input type="password" required/>
            </Form.Item>
            <Link to="/login" className="m-2">Already user Login here</Link>
            <button className='btn btn-primary' type="submit">
                Register
            </button>
        </Form>
    </div>
    </>
  )
}

export default Register