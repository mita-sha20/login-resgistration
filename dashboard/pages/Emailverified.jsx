import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Emailverified = () => {

    let param = useParams();
    let navigate = useNavigate();

    console.log(param.token);

    useEffect(()=>{
      async function verify(){
        let data = await axios.post("http://localhost:8001/api/v1/auth/linkverification",{
            token: param.token,
          }
          )
          navigate("/login");
          console.log(data);  
      }
      verify();
    },[]);

  return (
    <>
    Loading....
    </>
  )
}

export default Emailverified;
