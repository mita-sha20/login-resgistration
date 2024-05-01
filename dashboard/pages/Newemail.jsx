import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';

const Newemail = () => {
  let params = useParams();
    useEffect(()=>{
        async function verify(){
          let data = await axios.post("http://localhost:8001/api/v1/auth/newresetemail",{
              token: params.token,
            }
            )
          
            console.log(data);  
        }
        verify();
      },[]);
  
  return (
   <>
 Successfull
   </>
  )
}

export default Newemail
