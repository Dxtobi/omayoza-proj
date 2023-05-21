import React from 'react'

const Careers = () => {
  return (
    <>
        <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 container mx-auto pt-24 md:pt-0 px-0 md:px-4 about-header">
          <div>
            {/* bread crumb goes here */}
            <div className='mb-4 px-4 md:px-0 pt-16'>About us / Careers</div>

            <h1 className="big-display mb-4 px-4 md:px-0 uppercase">
                Careers
            </h1>

            <div style={{backgroundColor : '#3E3D3D'}}>
            <p className=" px-4 md:px-0 base-text mb-4 leading-8 font-regular">
            No careers available
            </p>

            </div>
            
          </div>
          <div className='about-bg hidden order-first md:order-last md:block bg-fixed bg-cover bg-no-repeat'>
            
          </div>
        </div>
      </section>
    </>
  )
}

export default Careers