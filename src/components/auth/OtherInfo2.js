import React, { useState } from 'react'
import { SignupInput } from '../../components'

const OtherInfo2 = ({ handleSubmit }) => {
    const [state, setState] = useState({

        account_number: '',
        account_name: '',
        bank_name: '',
        bvn: '',
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
                <div className=' flex flex-col md:flex-row gap-4 justify-between'>
                    <div className='h-[20vh] w-full md:w-1/2 md:min-h-[100vh]'>
                        <img src="r101.png" alt="" className='w-[100%] h-full object-cover' />
                    </div>
                    <div className='flex flex-col items-center gap-3 w-full py-5 md:py-0 md:w-1/2 px-5 md:px-10 justify-center'>
                        <div className='font-bold text-2xl'>Sign Up</div>
                        <div className='w-full '>
                            <div className='my-4 text-sm font-extralight'>Payment details</div>
                            <div className='flex flex-col gap-4'>
                                <SignupInput type='text' value={state.email} name='account_number' on_change={handleChange} placeholder='account number' />
                                <SignupInput type='text' value={state.password} name='account_name' on_change={handleChange} placeholder='account name' />
                                <SignupInput type='text' value={state.email} name='bank_name' on_change={handleChange} placeholder='bank name' />
                                <SignupInput type='text' value={state.password} name='bvn' on_change={handleChange} placeholder='bvn' />
                            </div>
                        </div>
                        <button className='text-gray-300 p-3 bg-[#85714D] px-8' onClick={on_submit}>Next</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OtherInfo2