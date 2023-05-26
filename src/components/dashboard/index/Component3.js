import React, { useState } from 'react';
import SquareRadioInput from '../../inputs/radioButton';


const Component3 = ({handleChangeComp, data}) => {
    const [state, setState] = useState({
        _invest_knowledge_data: [
            {
                top: '80%',
                bottom: '20%',
                type:'50k-100k'
            },
            {
                top: '80%',
                bottom: '20%',
                type:'100k-200k'
            },
            {
                top: '80%',
                bottom: '20%',
                type:'200k-500k'
            },
            {
                top: '80%',
                bottom: '20%',
                type:'500k-1M'
            },
            {
                top: '80%',
                bottom: '20%',
                type:'1M-Above'
            },
        ]
    })


    return (
        <div className='flex flex-col gap-10  mt-5  w-[80%]'>
            <div className='font-bold text-2xl'>RISK EVALUATION</div>
            <div className='flex flex-col gap-5 '>
                <p>What are you willing to risk?</p>

                <select className='w-full bg-transparent border border-[#85714d] p-4 '>
                    {state._invest_knowledge_data.map((data, index) => (
                        <option
                            key={index}
                            value={data.type}
                            className="text-gray-800 bg-white hover:bg-gray-200 w-1/3"
                            >
                            {data.type}
                            </option>
                    ))}
                </select>

                <div className="flex gap-4 w-full">
                {state._invest_knowledge_data.map((e, index) => (
                        <div key={index} className="flex flex-col gap-3 w-1/4">
                            <div className='bg-[#85714d] p-4 text-center'>
                                {e.top}
                            </div>
                            <div className='bg-[#0d0d0d] p-4 text-center'>
                                {e.bottom}
                            </div>
                            <SquareRadioInput option={e.type} handleChange={handleChangeComp} selected={ data?.comp3} />
                        </div>
                    ))}
               
                </div>
                
            </div>
            <div></div>
        </div>
    );
}

export default Component3;
