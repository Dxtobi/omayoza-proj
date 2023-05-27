import React from 'react'
import Bronze from '../assets/images/bronze-img.svg'
import Silver from '../assets/images/silver-img.svg'
import Gold from '../assets/images/gold-img.svg'

const Quest = () => {
    return (
        <>
            <section className='quest flex items-center px-10'>
                {/* section one */}
                <div className="container mx-auto py-8 px-4">
                    <h1 className="big-display uppercase mb-7">
                        Join our quests
                    </h1>

                    <h6 className="heading-six md:w-2/4">
                        We know that investing can sometimes feel like a daunting challenge, especially if you're new to the game. That's why we've created a system of user classes to help guide you along the way. Each class comes with its own set of perks and privileges, so you can choose the level of support that's right for you.
                    </h6>
                </div>
            </section>

            <section>
                {/* section two */}
                <div className="container mx-auto py-8 px-10">
                    <div className="grid md:grid-cols-3 items-center grid-cols-1 md:gap-x-8 mb-20">
                        <div className='single-quest col-span-2'>
                            <img src={Bronze} alt="" className='mb-7' />
                            <h5 className="heading-five">
                                As a Bronze Adventurer, you'll have access to the basic tools and resources you need to start your investment journey. You can open up to 3 concurrent investment contracts at once, giving you the chance to explore different opportunities and see which ones work best for you.
                            </h5>
                        </div>

                        <div className=' order-first md:order-last'>
                            <h1 className="big-display text-center md:text-right" >
                                Bronze <br className='hidden md:block' /> Adventurer
                            </h1>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 items-center grid-cols-1 md:gap-x-8 mb-20">
                        <div className=''>
                            <h1 className="big-display text-center md:text-right mr-20">
                                Silver <br className='hidden md:block' /> Explorer
                            </h1>
                        </div>

                        <div className='single-quest col-span-2'>
                            <img src={Silver} alt="" className='mb-7' />
                            <h5 className="heading-five">
                                If you're ready to take your adventure to the next level, the Silver Explorer class is for you. You'll have access to more advanced tools and resources, and you can open up to 5 concurrent investment contracts at once. This means you'll have even more opportunities to explore and discover new paths to success.
                            </h5>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 items-center md:gap-x-8 mb-12">
                        <div className='single-quest col-span-2'>
                            <img src={Gold} alt="" className='mb-7' />
                            <h5 className="heading-five">
                                Are you a true adventurer at heart? Then the Gold Trailblazer class is where you belong. With access to the most powerful tools and resources, you'll be able to open up to 7 concurrent investment contracts at once. This gives you the freedom to blaze your own trail and chart your own course to financial success.
                            </h5>
                        </div>

                        <div className=' order-first md:order-last'>
                            <h1 className="big-display text-center md:text-right">
                                Gold <br className='hidden md:block' /> Trailblazer
                            </h1>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Quest