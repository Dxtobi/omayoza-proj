import React, { useState } from 'react';
import SquareRadioInput from '../../inputs/radioButton';


const Component1 = ({handleChangeComp, data}) => {
    const [state, setState] = useState({
        _invest_knowledge_data: [
            {
                img: '/r18.png',
                text: 'Academic degree in financial field',
                selected: false,
            },
            {
                img: '/r16.png',
                text: 'Professional certificate or relevant experience',
                selected: false,
            },
            {
                img: '/r61.png',
                text: 'Attended trainings/courses',
                selected: false,
            },
        ]
    })


    return (
        <div className='flex flex-col gap-10  mt-5  '>
            <div className='font-bold text-2xl'>INVESTMENT KNOWLEDGE</div>
            <div className='flex flex-col gap-5 bg-[#85714d37] pb-20 p-5'>
                <p>Forex investment involves investing currencies. The best investment platforms offer investments in dozens of different currencies. If you’re new to investing, it’s best to start with a small number of currencies in order to minimize risks and keep your investment account manageable.</p>
                <div className='flex flex-col md:flex-row  gap-4 justify-start md:justify-between'>
                    {
                        state._invest_knowledge_data.map((e, i) => (
                            <div key={e.text} className='w-full md:w-1/3 flex flex-rol md:flex-rol gap-3'>
                                <img src={e.img} alt={e.img} className='w-[160px] object-cover h-[160px]' />
                                <div className='flex w-full gap-5 items-start mt-5 md:flex-col'>
                                    <SquareRadioInput option={e.text} handleChange={handleChangeComp} selected={ data?.comp1} />
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

export default Component1;
