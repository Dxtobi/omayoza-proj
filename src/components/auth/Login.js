import React, { useState } from 'react'
import { SignupInput } from '../../components'

const Login = ({handleSubmit}) => {
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
              <div className='flex gap-4 justify-between'>
                <div className='w-1/2'>
                    <img src="r101.png" alt="" className='w-[100%] h-[100vh] object-contain'/>
                </div>
                <div className='flex flex-col items-center gap-4 w-1/2 justify-center min-h-[100vh]'>
                  <div className='font-bold text-2xl uppercase'>Login</div>
                    <div className='w-full'>
                        <div className='gap-4 flex flex-col w-[70%] items-center m-auto'>
                            <SignupInput type='email' value={state.email} name='email' on_change={handleChange} placeholder='Email'/>
                            <SignupInput type='password' value={state.password} name='password' on_change={handleChange} placeholder='password'/>
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