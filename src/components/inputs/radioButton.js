import React, { useState } from 'react';

const SquareRadioInput = ({option, handleChange, selected}) => {
  //const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
     // setSelectedOption(event.target.value);
      console.log(option,',', handleChange,',', selected)
      handleChange(event.target.value)
  };

  return (
    <div>
      <label className="inline-flex items-center">
        <input
          type="radio"
          value={option}
          checked={selected === option}
          onChange={handleOptionChange}
          className="hidden"
        />
        <div className="w-6 h-6 border  bg-white transition-colors duration-150 cursor-pointer">
          {selected === option && (
            <div className="w-full h-full bg-black"></div>
          )}
        </div>
      </label>
    </div>
  );
};

export default SquareRadioInput;
