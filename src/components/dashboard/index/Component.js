import React, { useState } from 'react';
import SquareRadioInput from '../../inputs/radioButton';


const Component5 = ({handleChangeComp, data}) => {
    const [state, setState] = useState({
        _invest_knowledge_data: [
            {
                img: '/r18.png',
                text: 'Bronze',
                selected: false,
            },
            {
                img: '/r16.png',
                text: 'Silver',
                selected: false,
            },
            {
                img: '/r61.png',
                text: 'Gold',
                selected: false,
            },
        ],
        months: [
            {
                img: '/r18.png',
                text: '3 month',
                selected: false,
            },
            {
                img: '/r16.png',
                text: '6 month',
                selected: false,
            },
            {
                img: '/r61.png',
                text: '12 month',
                selected: false,
            },
        ]
    })


    return (
        <div className='flex flex-col gap-5  mt-5  '>
            <div className='font-bold text-2xl'>QUEST LEVEL</div>
            <div className='flex flex-col gap-5 pb-20'>
                <p>We know that investing can sometimes feel like a daunting challenge, especially if you're new to the game. That's why we've created a system of user classes to help guide you along the way. Each class comes with its own set of perks and privileges, so you can choose the level of support that's right for you.</p>
                <div className='flex flex-col md:flex-row  gap-4 justify-start md:justify-between'>
                    {
                        state._invest_knowledge_data.map((e, i) => (
                            <div key={e.text} className='w-full md:w-1/3 flex flex-rol md:flex-rol gap-3'>
                                <img src={e.img} alt={e.img} className='w-[160px] object-cover h-[160px]' />
                                <div className='flex w-full gap-5 items-start mt-5'>
                                    <SquareRadioInput option={e.text} handleChange={handleChangeComp} selected={ data?.comp5} />
                                    <p>{e.text}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div></div>

            <div className='font-bold text-2xl uppercase'>Tear</div>
            <div className='flex flex-col gap-5 pb-20'>
                <p>Chose fair</p>
                <div className='flex flex-col md:flex-row  gap-4 justify-start md:justify-between'>
                    {
                        state.months.map((e, i) => (
                            <div key={e.text} className='w-full md:w-1/3 flex flex-rol md:flex-rol gap-3'>
                                <img src={e.img} alt={e.img} className='w-[160px] object-cover h-[160px]' />
                                <div className='flex w-full gap-5 items-start mt-5'>
                                    <SquareRadioInput option={e.text} handleChange={handleChangeComp} selected={ data?.comp5} />
                                    <p>{e.text}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Component5;
