import React, { useState } from 'react'

import Login from '../../components/auth/Login';

const Signup = () => {
    const [state, setState] = useState({
       
      loading: false,
      next: 0,
      data:{}
        // Add more state variables as needed
      });
    
  
  const handleSubmit = (data) => {
    setState(prevState => ({ ...prevState, loading: true, data:{...state.data, ...data} }));
    console.log(data)
    //on success
    if (state.next === 3) {
      //submit //all data would be in state.data
      console.log(state.data)
      return
    }
    setState(prevState => ({...prevState, loading:false, next:state.next+1}));
  }


  return (
    <>
      <section>
              <Login handleSubmit={handleSubmit} />
       
      </section>
    </>
  )
}

export default Signup