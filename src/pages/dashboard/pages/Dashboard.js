import React from 'react';
import Table from '../../../components/Table';

function DashboardComp(props) {
    return (
        <div className=''>
            <div className='flex justify-between mt-3'><div>DASHBOARD</div><button className='p-4 bg-[#8e7b3b]'>Withdraw</button></div>
            <div className='flex mb-10 gap-10'>
                <div className='w-[70%]'>
                    <Table />
                    <div className='flex w-full mt-4 gap-3'>
                        <div className='p-4 bg-[#b49f4a55] border border-[#b49f4a] flex flex-col gap-3'>
                            <h2>Upcoming Events</h2>
                            <img src='/r101.png' className='h-[200px] w-[200px] object-cover' alt='' />
                            <p>Join a live evaluation of the U.S. Dollar rise and fall </p>
                            <button className='p-3 bg-[#8e7b3b] w-1/2'>Join Live</button>
                        </div>
                        <div className='p-4 bg-[#b49f4a55] border border-[#b49f4a] flex flex-col gap-3'>
                            <h2>Trading History</h2>
                            <div className='bg-gray-400 p-4 flex flex-col gap-3'>
                                <div className='flex gap-2  items-center'>
                                    <div className='w-4 h-4 bg-black'/>
                                    <p>Completed transaction as Bronze Adventurer </p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <div className='w-4 h-4 bg-black'/>
                                    <p>Completed transaction as Bronze Adventurer  </p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <div className='w-4 h-4 bg-black'/>
                                    <p>Completed transaction as Bronze Adventurer </p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <div className='w-4 h-4 bg-black'/>
                                    <p>Completed transaction as Bronze Adventurer </p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <div className='w-4 h-4 bg-black'/>
                                    <p>Completed transaction as Bronze Adventurer </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[30%] p-3 mt-8 flex flex-col gap-3 bg-[#b49f4a55]'>
                    <div>Accounts</div>
                    <div className='bg-gray-500 flex flex-col justify-center items-center gap-4 h-[140px]'>
                        <p>Account Ballance</p>
                        <h2>7777777</h2>
                    </div>
                    <div className='bg-gray-500 flex flex-col justify-center items-center gap-4 h-[140px]'>
                        <p>Expected earning</p>
                        <h2>7777777</h2>
                    </div>
                    <div className='bg-gray-500 flex flex-col justify-center items-center gap-4 h-[140px]'>
                        <p>Initial capital invested</p>
                        <h2>7777777</h2>
                    </div>
                    <div className='bg-gray-500 flex flex-col justify-center items-center gap-4 h-[140px]'>
                        <p>Total Earning</p>
                        <h2>7777777</h2>
                    </div>
                    <div className='bg-gray-500 flex flex-col justify-center items-center gap-4 h-[140px]'>
                        <p>Term duration</p>
                        <h2>7777777</h2>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default DashboardComp;