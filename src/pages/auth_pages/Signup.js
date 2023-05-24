import React, { useState } from 'react'

import SignupComp from '../../components/auth/SignUp';
import OtherInfo from '../../components/auth/OtherInfo';
import OtherInfo2 from '../../components/auth/OtherInfo2';
import FinalForm from '../../components/auth/FinalForm';

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
        {
          //TODO: use FRAMERMOTION.JS to animate form transition...
        }
        {state.next === 0 && <SignupComp handleSubmit={handleSubmit} />}
        {state.next === 1 && <OtherInfo handleSubmit={handleSubmit} />}
        {state.next === 2 && <OtherInfo2 handleSubmit={handleSubmit} />}
        {state.next === 3 && <FinalForm handleSubmit={handleSubmit} />}
       
      </section>
    </>
  )
}

export default Signup