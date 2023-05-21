import React from 'react'
import Bronze from '../assets/images/bronze-img.svg'
import Silver from '../assets/images/silver-img.svg'
import Gold from '../assets/images/gold-img.svg'
import RandomImage from '../assets/images/random-img.png'


const Home = () => {
  return (
    <>
        {/* section one */}
        <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 container mx-auto pt-24 md:pt-0 px-0 md:px-4 about-header">
          <div>
            {/* bread crumb goes here */}
            
            <div className='pt-16 mb-8 px-4 md:px-0'>
                    <h2 className='heading-two mb-6'> We believe that investing should be a journey filled with excitement and adventure!</h2> 
                    <h6 className="heading-six mb-9">
                    That's why we've created three different levels of "growth quests" for you to embark on, each with its own unique challenges and rewards.
                    </h6>

                    <button className="btn btn-primary">Sign Up</button>
                </div>
            
          </div>
          <div className=' imageone hidden order-first md:order-last md:block bg-fixed bg-cover bg-no-repeat'>
            
          </div>
        </div>
      </section>


        {/* section two */}
        <section className="container mx-auto py-8 px-4">
            <h1 className="big-display uppercase text-center primary-color mb-4">Start Here</h1>
            <h6 className="heading-six text-center mb-14">
                We know that investing can sometimes feel like a daunting challenge, especially if you're new to the game. That's why we've created a system of user classes to help guide you along the way. Each class comes with its own set of perks and privileges, so you can choose Bronze Adventurer the level of support that's right for you.
            </h6>

            <div className="grid md:grid-cols-3 grid-cols-1 gap-16">
                <div className="card py-14 px-5">
                    <h6 className="heading-six text-center font-semibold mb-14">Bronze Adventurer</h6>
                    <img src={Bronze} alt="" />
                    <p className="base-text mt-14">
                        As a Bronze Adventurer, you'll have access to the basic tools and resources you need to start your investment journey. You can open up to 3 concurrent investment contracts at once, giving you the chance to explore different opportunities and see which ones work best for you.
                    </p>
                </div>

                <div className="card py-14 px-5">
                    <h6 className="heading-six text-center font-semibold mb-14">Silver Explorer</h6>
                    <img src={Silver} alt="" />
                    <p className="base-text mt-14">
                    If you're ready to take your adventure to the next level, the Silver Explorer class is for you. You'll have access to more advanced tools and resources, and you can open up to 5 concurrent investment contracts at once. This means you'll have even more opportunities to explore and discover new paths to success.
                    </p>
                </div>

                <div className="card py-14 px-5">
                    <h6 className="heading-six text-center font-semibold mb-14">Gold Trailblazer</h6>
                    <img src={Gold} alt="" />
                    <p className="base-text mt-14">
                    Are you a true adventurer at heart? Then the Gold Trailblazer class is where you belong. With access to the most powerful tools and resources, you'll be able to open up to 7 concurrent investment contracts at once. This gives you the freedom to blaze your own trail and chart your own course to financial success.
                    </p>
                </div>
            </div>

        </section>

        <section className='container mx-auto py-8 px-4'>
            {/* random image */}
            <img src={RandomImage} alt="" />
        </section>

        <section className="container mx-auto py-8 px-4 bg-alt-color">
            {/* section four */}
            <h1 className="big-display uppercase text-center primary-color">Learn with Omayoza</h1>

            {/* slider goes here */}
        </section>

        <section className="px-8 pt-16 py-80 bg-black text-white">
            <div className="container mx-auto">
                <h6 className="heading-six mb-12">
                    So which adventurer are you? Whether you're just starting out or you're a seasoned explorer, we've got a user class that's just right for you. Join us today and let's start blazing trails together!
                </h6>
                <button className="btn btn-primary">Invent with us now</button>
            </div>
            
        </section>
    </>
  )
}

export default Home