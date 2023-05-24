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
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {state._invest_knowledge_data.map((e, i) => (
                    <div key={e.text} className="flex flex-col  ">
                    <img src={e.img} alt={e.img} className="w-full h-[200px] object-cover" />
                    <div className="flex items-center my-5 gap-3">
                        <SquareRadioInput option={e.text} handleChange={handleChangeComp} selected={data?.comp2} />
                        <p>{e.text}</p>
                    </div>
                    </div>
                ))}
                </div>
                    
            </div>
            <div></div>
        </div>
    );
}

export default Component2;
