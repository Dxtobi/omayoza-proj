import React, { useState } from 'react'
import { SignupInput } from '../../components'

const OtherInfo = ({handleSubmit}) => {
    const [state, setState] = useState({
       
        first:'',
        middle:'',
        surname:'',
        location:'',
        address:'',
        postal_code:'',
        phone_number:'',
        nin:'',
        // Add more state variables as needed
      });
    
const handleChange = (event) => {
        const { name, value } = event.target;
        setState(prevState => ({
          ...prevState,
          [name]: value
        }));
      };

    const on_submit = () => {
        handleSubmit(state)
    }
  return (
    <>
      <section>
              <div className=' flex gap-4 justify-between'>
                <div className='w-1/2 min-h-[100vh]'>
                    <img src="r101.png" alt="" className='w-[100%] h-full object-cover'/>
                </div>
                <div className='flex flex-col items-center gap-3 w-1/2 px-10 justify-center'>
                <div className='font-bold text-2xl'>Sign Up</div>
                <div className='w-full '>
                      <div className='gap-4 flex items-center  justify-between my-4'>
                        <SignupInput type='text' value={state.email} name='first' on_change={handleChange} placeholder='first name'/>
                        <SignupInput type='text' value={state.password} name='middle' on_change={handleChange} placeholder='middle name'/>
                        <SignupInput type='text' value={state.password} name='surname' on_change={handleChange} placeholder='surname'/>
                      </div>
                      <div className='flex flex-col gap-4'>
                        <SignupInput type='text' value={state.email} name='location' on_change={handleChange} placeholder='location'/>
                          <SignupInput type='text' value={state.password} name='address' on_change={handleChange} placeholder='address'/>
                          <SignupInput type='text' value={state.email} name='postal_code' on_change={handleChange} placeholder='postal code'/>
                          <SignupInput type='text' value={state.password} name='phone_number' on_change={handleChange} placeholder='number'/>
                          <SignupInput type='text' value={state.email} name='nin' on_change={handleChange} placeholder='nin'/>
                        
                      </div>
                </div>
                <button className='text-gray-300 p-3 bg-[#85714D] px-8' onClick={on_submit}>Next</button>
                </div>
              </div>
      </section>
    </>
  )
}

export default OtherInfo