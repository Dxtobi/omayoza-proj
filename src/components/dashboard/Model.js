import React from 'react';
import SignupInput from '../inputs/signup';

const Modal = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 ">
          <div className="fixed inset-0 bg-gray-500 opacity-50"></div>
          <div className="relative bg-black p-10 w-1/4 flex flex-col gap-4">
            {/* Modal Content */}
           
            <div className='flex flex-col gap-4'>
                <div>Deposit Funds</div>
                <SignupInput on_change={(e) => e} value={''} />  
                <div>How much would you like to invest?</div>          
            </div>
             <button
              className="bg-[#6e5725] w-[100px] p-3"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
