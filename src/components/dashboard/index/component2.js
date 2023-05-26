import React, { useState } from 'react';
import SquareRadioInput from '../../inputs/radioButton';


const Component2 = ({handleChangeComp, data}) => {
    const [state, setState] = useState({
        _invest_knowledge_data: [
            {
                img: '/r18.png',
                text: 'Future needs',
                selected: false,
            },
            {
                img: '/r16.png',
                text: 'Short term',
                selected: false,
            },
            {
                img: '/r61.png',
                text: 'Additional source of income',
                selected: false,
            },
            {
                img: '/r61.png',
                text: 'Saving for a goal',
                selected: false,
            },
        ]
    })


    return (
        <div className='flex flex-col gap-10  mt-5  '>
            <div className='font-bold text-2xl'>PURPOSE OF INVESTING</div>
            <div className='flex flex-col gap-5 bg-[#85714d37] p-5'>
                <p>Set a target with Omayoza</p>
                <div className='flex flex-col md:flex-row  gap-4 justify-start md:justify-between'>
                    {
                        state._invest_knowledge_data.map((e, i) => (
                            <div key={e.text} className='w-full md:w-1/3 flex flex-rol md:flex-rol gap-3'>
                                <img src={e.img} alt={e.img} className='w-[160px] object-cover h-[160px]' />
                                <div className='flex w-full gap-5 items-start mt-5 md:flex-col'>
                                    <SquareRadioInput option={e.text} handleChange={handleChangeComp} selected={ data?.comp2} />
                                    <p>{e.text}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                    
            </div>
            <div></div>
        </div>
    );
}

export default Component2;
