import React, { useState } from 'react';
import SquareRadioInput from '../../inputs/radioButton';
import SignupInput from '../../inputs/signup';


const Component3 = ({handleChangeComp, data}) => {
    const [state, setState] = useState({
        _invest_knowledge_data: [
            'salary', 'business', 'others'
        ],
        annual_income: '',
        company:''
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setState(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
    return (
        <div className='flex flex-col gap-10  mt-5   w-full md:w-[80%]'>
            <div className='font-bold text-2xl'>FINANCIAL STATUS</div>
            <div className='flex flex-col gap-5 '>
             

                <select className='w-full bg-transparent border border-[#85714d] p-4 '>
                    {state._invest_knowledge_data.map((data, index) => (
                        <option
                            key={index}
                            value={data}
                            className="text-gray-800 bg-white hover:bg-gray-200 w-1/3"
                            >
                           {data}
                        </option>
                    ))}
                </select>
                <select className='w-full bg-transparent border border-[#85714d] p-4 '>
                <option
                    value=''
                            className="text-gray-800 bg-white hover:bg-gray-200 w-1/3"
                            >
                            
                              Occupation=
                            </option>
                    {state._invest_knowledge_data.map((data, index) => (
                        <option
                            key={index}
                            value={data}
                            className="text-gray-800 bg-white hover:bg-gray-200 w-1/3"
                            >
                         {data}
                            </option>
                    ))}
                </select>
                
                <SignupInput on_change={handleChange} name='company' type='text'  placeholder='Salary' value={state.company}/>

                <SignupInput on_change={handleChange} name='annual_income' type='text'  placeholder='Net Annual Income' value={state.annual_income}/>
                
            </div>
            <div></div>
        </div>
    );
}

export default Component3;
