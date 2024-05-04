import React, { useEffect, useState } from 'react';
import "./style.css";
import { Button, Checkbox, Form, Input , Divider, Radio, Table , Select} from 'antd';
import { DeleteOutlined , CheckOutlined } from '@ant-design/icons';
import axios from 'axios';



const Homepage = () => {

 // add product
    const onFinish = async(values) => {
        console.log('Success:', values);
        let data = await axios.post("http://localhost:8001/api/v1/productroute/product",{
          name : values.name,
          description : values.description
        }
      )
      console.log(data)
      };

      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

// show product

let [prolist,setprolist] = useState([]);
const [selectionType, setSelectionType] = useState('checkbox');

useEffect(()=>{
    async function allpro(){
        let data = await axios.get("http://localhost:8001/api/v1/productroute/allproduct")
       let prodata=[];
        data.data.map((item)=>{
          prodata.push({
                key: item._id,
                name: item.name,
                description : item.description,
                delete : <DeleteOutlined/>
        
          })
        })
        setprolist(prodata);
       }
       allpro()
},[])

//select

let [proid,setproid] = useState("")


  const onFinish2 = async(values) => {
      console.log('Success:', values);
      let data = await axios.post("http://localhost:8001/api/v1/productroute/select",{
        name : values.name,
        description : values.description,
        categoryId : proid
      }
    )
    console.log(data)
    };
    const onFinishFailed2 = (errorInfo) => {
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

const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Description',
      dataIndex: 'description',
    },
    {
      title: 'Delete',
      dataIndex: '<DeleteOutlined/>',
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === 'Disabled User',
      name: record.name,
    }),
  };


  return (
    <>

   <div>
   <div className='home-main'>
       <div className='home-icon'>
       <picture>
                <img
                  className="icon_pic"
                  src="./images/Icon.png"
                  alt="register"
                />
              </picture>
       </div>
       <div className='home-txt'>
          <h2>List  of Taks</h2>
          <p>Facilite sua ida ao supermercado!</p>
          <picture>
                <img
                  className="separete_pic"
                  src="./images/Separator.png"
                  alt="register"
                />
              </picture>
       </div>
    </div>

    <div>
    <Form className='input'
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 1300,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Product name"
      name="name"
      rules={[
        {
          required: true,
          message: 'Please write the product name!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Description"
      name="description"
      rules={[
        {
          required: true,
          message: 'Please write the description!',
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
      <Button type="primary" htmlType="submit">
        +
      </Button>
    </Form.Item>
  </Form>
    
        {/* <div className='input-box'>
        <Input placeholder="Items" />
        </div>
        <div className='input-box'>
        <Input placeholder="Description" />
        </div>
        <div className='btn-box'>
        <Button type="primary">+</Button>
        </div> */}
    </div>
    
    
    <div>
      
    <Radio.Group className='items' 
        onChange={({ target: { value } }) => {
          setSelectionType(value);
        }}
        value={selectionType}
      >
        <Radio value="checkbox">Checkbox</Radio>
        <Radio value="radio">radio</Radio>
      </Radio.Group>

      <Table className='items' 
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        columns={columns}
        dataSource={prolist}
      />
      
    </div>

    {/* <div>
      <div className='items2'>
      <Radio><h5>Leite</h5></Radio> 
      <DeleteOutlined className='icon'/>
      <h6>3 caixas</h6>
      <picture>
                <img
                  className="line_pic"
                  src="./images/line.png"
                  alt="register"
                />
              </picture>
      </div>
      <div className='items2'>
      <Radio><h5>Maçã</h5></Radio> 
      <DeleteOutlined className='icon2'/>
      <h6>500g</h6>
      <picture>
                <img
                  className="line_pic"
                  src="./images/line.png"
                  alt="register"
                />
              </picture>
      </div>
      <div className='items2'>
      <Radio><h5>Amaciante</h5></Radio> 
      <DeleteOutlined className='icon3'/>
      <h6>200g</h6>
      <picture>
                <img
                  className="line_pic"
                  src="./images/line.png"
                  alt="register"
                />
              </picture>
      </div>
    </div> */}



    <div className='divider'>
    <picture>
                <img
                  className="separete_pic"
                  src="./images/Separator.png"
                  alt="register"
                />
              </picture>
    </div>
   
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
    onFinish={onFinish2}
    onFinishFailed={onFinishFailed2}
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
    <Select className='select'
      defaultValue="laptop"
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
  


     {/* <div className='last'>
      <h1>Completed Item</h1>
      <div className='items-last'>
      <CheckOutlined />
      <h5>Refrigerante</h5>
      <DeleteOutlined className='icon4'/>
      <h6>2 litros</h6>
      <picture>
                <img
                  className="line_pic"
                  src="./images/line.png"
                  alt="register"
                />
              </picture>
      </div>
      <div className='items-last'>
      <CheckOutlined />
      <h5>Refrigerante</h5>
      <DeleteOutlined className='icon5'/>
      <h6>2</h6>
      <picture>
                <img
                  className="line_pic"
                  src="./images/line.png"
                  alt="register"
                />
              </picture>
      </div>
    </div> 
      */}
   </div>
      
    </>
  )
}

export default Homepage
