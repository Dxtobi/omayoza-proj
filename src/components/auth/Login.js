import React, { useState } from 'react'
import { SignupInput } from '../../components'

function Login({ handleSubmit }) {
  console.log(handleSubmit)
  const [state, setState] = useState({
    email: '',
    password: '',

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
        <div className='flex flex-col md:flex-row gap-2 md:gap-4 justify-between'>
          <div className='md:w-1/2 w-full'>
            <img src="r101.png" alt="" className='w-[100%] max-h-[50vh] md:h-[100vh] object-cover' />
          </div>
          <div className='flex flex-col items-center gap-4 w-full md:w-1/2 justify-center  md:min-h-[100vh] mb-3 md:md-0'>
            <div className='font-bold text-2xl uppercase'>Login</div>
            <div className='w-full'>
              <div className='gap-4 flex flex-col w-[70%] items-center m-auto'>
                <SignupInput type='email' value={state.email} name='email' on_change={handleChange} placeholder='Email' />
                <SignupInput type='password' value={state.password} name='password' on_change={handleChange} placeholder='password' />
              </div>
            </div>
            <button className='text-gray-300 p-4 bg-[#85714D] w-1/2' onClick={on_submit}>Login</button>
            <div className='font-bold'>Or</div>

            <div className='flex flex-col gap-1'>
              <button className='text-gray-300 '>Login with Google</button>
              <button className='text-gray-300 '>Login with Facebook</button>
              <button className='text-gray-300 '>Login with Apple</button>
            </div>
          </div>


        </div>
      </section>
    </>
  )
}

export default Login