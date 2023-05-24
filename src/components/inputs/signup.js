import React from 'react'

const SignupInput = ({type, value, on_change, name, placeholder=''}) => {
  return (
   
          <input className='bg-transparent p-3 w-full border border-[#85714D] outline-none' type={type} value={value} onChange={on_change} name={name}  placeholder={placeholder?.toUpperCase()} />
  )
}

export default SignupInput