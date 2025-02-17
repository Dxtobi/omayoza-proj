import React, { useState } from 'react';
import Component1 from '../../../components/dashboard/index/component1';
import Component2 from '../../../components/dashboard/index/component2';
import Component3 from '../../../components/dashboard/index/Component3';
import Component4 from '../../../components/dashboard/index/Component4';
import Component5 from '../../../components/dashboard/index/Component';
import Modal from '../../../components/dashboard/Model';

function Investment(props) {


    const [activeIndex, setActiveIndex] = useState(0);
    const [isOpen, modelSeter] = useState(false);
    const [dataFromComps, setDataComps] = useState({
        comp1: null,
        comp2: null,
        comp3: null,
        comp4: null,    
        comp5: null
    });

   

    const components = [Component1, Component2, Component3, Component4, Component5 ];

    const handleSwipeLeft = () => {
      if (activeIndex < components.length - 1) {
        setActiveIndex(activeIndex + 1);
      }
    };

    const handleSwipeRight = () => {
        if (activeIndex > 0) {
          setActiveIndex(activeIndex - 1);
        }
      };
   
    const handleSubmit = (data) => {
        modelSeter(!isOpen)
      };
    
    const handleRadioChange = (data) => {
        console.log(data, dataFromComps )
        switch (activeIndex) {
            case 0:
                setDataComps(prevState => ({...prevState, comp1:data}));
                break;
            case 1:
                setDataComps(prevState => ({...prevState, comp2:data}));
                break;
            case 2:
                setDataComps(prevState => ({...prevState, comp3:data}));
                break;
            case 3:
                setDataComps(prevState => ({...prevState, comp3:data}));
                break;
            default:
                setDataComps(prevState => ({...prevState, comp5:data}));
                break;
        }
    }
  const ActiveComponent = components[activeIndex];
  const ComponentCount = components.length;
  return (
    <div className="flex flex-col gap-10">
      <div className="">
        <ActiveComponent handleChangeComp={handleRadioChange} data={dataFromComps}/>
      </div>
        <div className='flex justify-start gap-4 mb-10'>
        {activeIndex !== 0 && (
        <button onClick={handleSwipeRight} className='bg-[#85714D] py-3 px-5'>Previous</button>
      )}

      {activeIndex !== ComponentCount - 1 ? (
        <button onClick={handleSwipeLeft} className='bg-[#85714D] py-3 px-5'>Next</button>
      ) : (
        <button onClick={handleSubmit} className='bg-[#85714D] py-3 px-5'>Start Investing</button>
              )}  
              
              {
                  <Modal isOpen={isOpen} onClose={handleSubmit}/>
              }
     </div>
    </div>
  );
}

export default Investment;