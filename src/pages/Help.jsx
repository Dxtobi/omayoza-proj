import React from 'react'
import Email from '../assets/icons/email.svg'
import Phone from '../assets/icons/phone.svg'
import Send from '../assets/icons/send.svg'

const Help = () => {
  return (
    <>
        <section className="container mx-auto py-8 px-4">
            {/* bread crumb goes here */}
            <div className='mb-4'>Help / FAQs</div>

            <h1 className="big-display mb-4 uppercase">
                Help
            </h1>

            <div className='mb-4'>FAQs</div>

            <ol type='1' className='mb-32'>
                <li>
                    1. What is forex trading? Forex trading, also known as foreign exchange trading or currency trading, is the process of buying and selling currencies in the foreign exchange market. Traders aim to profit from fluctuations in exchange rates by speculating on the value of one currency against another.
                </li>

                <li>
                    2. How does forex trading work? Forex trading involves trading currency pairs, such as EUR/USD (Euro/US Dollar) or GBP/JPY (British Pound/Japanese Yen). Traders speculate on whether the value of a currency will rise or fall relative to the other currency in the pair. They make profits by buying a currency at a low price and selling it at a higher price, or vice versa.
                </li>
            
                <li>
                    3. What are the major currency pairs? The major currency pairs in forex trading are EUR/USD, GBP/USD, USD/JPY, USD/CHF, USD/CAD, AUD/USD, and NZD/USD. These pairs have the highest trading volumes and are generally more liquid and widely traded.
                </li>

                <li>
                    4. How can I start forex trading? To start forex trading, you'll need to follow these general steps: a. Educate yourself: Learn the basics of forex trading, including terminology, trading strategies, and risk management. b. Choose a reputable broker: Select a forex broker that offers a user-friendly trading platform, competitive spreads, reliable customer support, and appropriate regulatory oversight. c. Open a trading account: Complete the account registration process with your chosen broker and fund your trading account. d. Practice with a demo account: Most brokers provide demo accounts that allow you to trade with virtual money. Use this opportunity to practice your trading strategies and familiarize yourself with the platform. e. Develop a trading plan: Define your trading goals, risk tolerance, and strategies. Stick to your plan and avoid impulsive decisions. f. Start trading: Once you feel confident with your skills, you can begin trading with real money. Start with smaller positions and gradually increase your exposure as you gain experience.
                </li>

                <li>
                    5. What are the risks associated with forex trading? Forex trading involves risks, and it's important to be aware of them. Some common risks include: a. Market risk: Currency prices can be volatile and influenced by various factors such as economic indicators, geopolitical events, and central bank policies. b. Leverage risk: Forex trading often involves the use of leverage, which amplifies both profits and losses. While leverage can enhance potential gains, it can also lead to significant losses if not used responsibly. c. Counterparty risk: There is a risk that the broker you trade with may not fulfill its obligations due to bankruptcy or other financial difficulties. Choose a reputable and regulated broker to mitigate this risk. d. Operational risk: Technical issues, internet connectivity problems, or platform failures can disrupt your trading activities and result in losses.
                </li>

            </ol>


            <div className="grid md:grid-cols-2 gap-4 items-center">
                <div >
                    <div className='flex items-center gap-x-6 mb-6'>
                        <img src={Phone} alt="" />
                        09067583456
                    </div>

                    <div className='flex items-center gap-x-6 mb-6'>
                        <img src={Email} alt="" />
                        info@omayoza.com
                    </div>
                </div>

                <div className='order-first md:order-last mb-8 md:mb-0'>
                    <p className="base-text mb-8 ">Didn’t answer your question? Chat with us</p>
                    <form>
                        <div className="append ">
                            <input type="text" className='w-full p-3.5 px-4 pr-14' placeholder='send a message...' />
                            <button className='btn-send'>
                                <img src={Send} alt="" />
                            </button>
                        </div>
                        
                    </form>
                </div>
            </div>

        </section>
    </>
  )
}

export default Help