import React, { useEffect, useState } from 'react'
import { Button, Checkbox, Form, Input, Select, Space } from 'antd';
import axios from 'axios';

const Selectproduct = () => {

  
  let [proid,setproid] = useState("")
  let [prolist,setprolist] = useState([]);

    const onFinish = async(values) => {
        console.log('Success:', values);
        let data = await axios.post("http://localhost:8001/api/v1/productroute/select",{
          name : values.name,
          description : values.description,
          categoryId : proid
        }
      )
      console.log(data)
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

      useEffect(()=>{
         async function allpro(){
          let data = await axios.get("http://localhost:8001/api/v1/productroute/allselect"
        )
         let prodata=[];
          data.data.map((item)=>{
            prodata.push({
              value:item._id,
              label:item.name,
            })
          })
          setprolist(prodata);
         }
         allpro()
      },[])

   let handleChange =(e)=>{
     setproid(e);
   }
  return (
   <>
   <Form
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
      label="Subcategory name"
      name="name"
      rules={[
        {
          required: true,
          message: 'Please write the category name!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item>
    <Select
      defaultValue=""
      style={{
        width: 120,
      }}
      onChange={handleChange}
      options={prolist}
    />
</Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
   </>
  )
}
export default Selectproduct;