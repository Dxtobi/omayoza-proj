import React, { useState } from 'react'
//import { SignupInput } from '../../components'

const FinalForm = ({ handleSubmit }) => {
    const [state, setState] = useState({

        valid_id: {},
        selected: ''
        // Add more state variables as needed
    });




    const handleChange = (event) => {
        const fileList = event.target.files;
        const imageURL = URL.createObjectURL(fileList[0]);

        // Do something with the selected file(s

        console.log(fileList, imageURL)

        setState(prevState => ({
            ...prevState,
            valid_id: fileList,
            selected: imageURL
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
                            <div className='my-4 text-sm font-extralight'>Valid ID</div>
                            <div className='flex flex-col gap-4'>

                                <label htmlFor="valid_id" className="relative block border border-[#544444] w-full h-[300px]">
                                    <input id="valid_id" name="valid_id" hidden type="file" multiple={false} onChange={handleChange} />

                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-gray-500">Click to Upload Image</span>
                                    </div>

                                    {state.selected && (
                                        <img src={state.selected} alt="Uploaded" className="absolute inset-0 object-cover w-full h-full" />
                                    )}
                                </label>


                            </div>
                        </div>
                        <button className='text-gray-300 p-3 bg-[#85714D] px-8' onClick={on_submit}>Next</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FinalForm