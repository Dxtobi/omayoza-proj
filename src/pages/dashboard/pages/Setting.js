import React from 'react';
import OtherInfo from '../../../components/auth/OtherInfo';
import { SignupInput } from '../../../components';

function Setting(props) {
    console.log('settings')
    const state = ''
    const handleChange =() => {
        
    }
    return (
        <div>
            <div className='flex justify-between my-3'><div>SETTINGS</div></div>
            <p>General</p>
            <div className='my flex  gap-6'>
                <div className='w-[40%] '>
                    <div className='flex flex-col gap-3'>
                        <img src='/r101.png' alt='' className='w-40 h-40 object-cover' />
                        <button className='p-2 bg-[#827f31] w-1/2'>Change Password</button>
                    </div>
                    <div className='my-6'>Payment Details</div>
                    <div>
                    <div className='flex flex-col gap-4'>
                        <SignupInput type='text' value={state} name='account_number' on_change={handleChange} placeholder='account number'/>
                          <SignupInput type='text' value={state} name='account_name' on_change={handleChange} placeholder='account name'/>
                          <SignupInput type='text' value={state} name='bank_name' on_change={handleChange} placeholder='bank name'/>
                          <SignupInput type='text' value={state} name='bvn' on_change={handleChange} placeholder='bvn'/>
                      </div>
                    </div>
                </div>
                <div className='w-[40%]'>
                <div className='w-full '>
                      <div className='gap-4 flex items-center  justify-between my-4'>
                        <SignupInput type='text' value={state} name='first' on_change={handleChange} placeholder='first name'/>
                        <SignupInput type='text' value={state} name='middle' on_change={handleChange} placeholder='middle name'/>
                        <SignupInput type='text' value={state} name='surname' on_change={handleChange} placeholder='surname'/>
                      </div>
                      <div className='flex flex-col gap-4'>
                        <SignupInput type='text' value={state} name='location' on_change={handleChange} placeholder='location'/>
                          <SignupInput type='text' value={state} name='address' on_change={handleChange} placeholder='address'/>
                          <SignupInput type='text' value={state} name='postal_code' on_change={handleChange} placeholder='postal code'/>
                          <SignupInput type='text' value={state} name='phone_number' on_change={handleChange} placeholder='number'/>
                          <SignupInput type='text' value={state} name='nin' on_change={handleChange} placeholder='nin'/>
                        
                      </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Setting;