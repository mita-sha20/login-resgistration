import React, { useState } from 'react';
import { Button, Checkbox, Form, Input , Alert, Space} from 'antd';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import "./style.css";


const Registration = () => {
     let [loading,setLoading] = useState(false);
  let [msg,setmsg] = useState("");
 let navigate = useNavigate();
  const onFinish = async (values) => {
    console.log('Success:', values);
    setLoading(true);

    let data = await axios.post("http://localhost:8001/api/v1/auth/registration",{
      name: values.username,
      email: values.email,
      password: values.password,
    },{
      headers:{
        Authorization:"3/7r8Ej/l5&'"
      }
    }
    )  
    console.log(data);
    setLoading(false);
  
    setmsg("Registration Successfull. PLease check your email")
    // setTimeout(()=>{
    //     navigate(`/otpVerification/${values.email}`);
    // },1500)
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
     {
      msg && <Alert message={msg} type="success" showIcon closable/>
    }
       <h1 className='headline'>This is the registration page.</h1>

       <picture>
                <img
                  className="register_pic"
                  src="./images/register.jpg"
                  alt="register"
                />
              </picture>

      <Form className='form_main'
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Username"
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Email"
      name="email"
      rules={[
        {
          required: true,
          message: 'Please input your email!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button className='btn' type="primary" htmlType="submit" loading={loading} disabled={loading}>
        Submit
      </Button>

     <div>
     <Link to="/forgotpass">Forget Password</Link>
     </div>

    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <div>
        <h4>If email is not send, then click to resend email.</h4>
      <Button className='btn' type="primary" htmlType="submit">
      <Link to="/resetemail"> Resend email</Link>
      </Button>
      </div>

     
    </Form.Item>
   
  </Form> 
    </>
  )
}

export default Registration;
