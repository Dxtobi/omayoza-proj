import React, { useState } from 'react'
import LoginForm from '../../components/auth/Login';



const Signup = () => {
    const [state, setState] = useState({
       
      loading: false,
      next: 0,
      data:{}
        // Add more state variables as needed
      });
    
  
  const handleSubmitFunc = (data) => {
    setState(prevState => ({ ...prevState, loading: true, data:{...state.data, ...data} }));
   
  
   
  }


  return (
    <>
      <section>
        
        <LoginForm handleSubmit={handleSubmitFunc} />
      </section>
    </>
  )
}

export default Signup