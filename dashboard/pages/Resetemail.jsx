import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Form, Input, Modal , Alert} from 'antd';


const Resetemail = () => {
  let [loading,setLoading] = useState(false);
  let [msg,setmsg] = useState("");
    const onFinish = async (values) => {
      console.log('Success:', values);
      setLoading(true);
      let data = await axios.post("http://localhost:8001/api/v1/auth/resetemail",{
        email: values.email,
      }
      )  
      console.log(data);
      setLoading(false);
      setmsg("Email resend. PLease check your email")
    };
  
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };

  return (
    <div>
  {
      msg && <Alert message={msg} type="success" showIcon closable/>
    }
<h3 className='headline'>This is the resend email page. Give your email here for resend the email</h3> 

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
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button className='btn' type="primary" htmlType="submit" loading={loading} disabled={loading}>
        Submit
      </Button>
     
    </Form.Item>
 
  </Form> 
    </div>
  )
}

export default Resetemail
