import React from 'react'
import FaqImage from '../assets/images/faq-img.svg'

const Faqs = () => {
  return (
    <>
      <section className="container mx-auto py-8 px-4 md:px-0">
            {/* bread crumb goes here */}
            <div className='mb-11'>Help / FAQs</div>

            <h1 className="big-display mb-11">
                FAQs
            </h1>

            <h5 className='heading-five font-semibold mb-11'>How to open an account</h5>

            <ol type='1' className='mb-16'>
              <li>
                1. Choose the type of quest: Omayoza offer different types of quest, Bronze, silver and gold. Select the account type that suits your trading preferences and financial capabilities.
              </li>
              <li>
              2. Fill out the application form: Complete the broker's application form with your personal information, including your name, address, email, phone number, and any other required details.
              </li>
              <li>
              3. Verify your identity: Brokers are required to verify the identity of their clients for regulatory purposes. You will likely need to provide scanned copies or photos of your identification documents, such as a passport or driver's license, as well as proof of address, such as a utility bill or bank statement.
              </li>
              <li>
              4. Fund your account: After your application and identity verification are approved, you'll need to deposit funds into your trading account. Brokers usually have various payment methods available, such as bank transfer, credit/debit cards, or electronic payment systems. Choose the method that suits you best and follow the instructions to make a deposit 
              </li>

            </ol>

            <button className="btn btn-primary mb-16">Sign up</button>

            <h5 className='heading-five font-semibold mb-11'>What are the risk involved</h5>

            <p className='mb-8'>
            Forex trading, like any form of financial trading, carries certain risks that traders should be aware of. Here are some of the key risks involved in forex trading:
            </p>

            <ol type='1' className='mb-16'>
              <li>
                1. Market Risk: Forex markets are highly volatile and can experience rapid price fluctuations due to various factors such as economic news, geopolitical events, and market sentiment. Prices can move against your positions, leading to potential losses.
              </li>
              <li>
              2. Leverage Risk: Forex trading often involves the use of leverage, which allows traders to control larger positions with a smaller amount of capital. While leverage can amplify profits, it can also magnify losses. If the market moves against you, the losses can exceed your initial investment.
              </li>
              <li>
              3. Counterparty Risk: Forex transactions are typically conducted through brokers or financial institutions. There is a risk that the counterparty may default on their obligations or become insolvent, leading to potential loss of funds.
              </li>
              <li>
              4. Liquidity Risk: Forex markets are generally liquid, but during certain times or in volatile market conditions, liquidity can decrease. This can make it challenging to execute trades at desired prices, potentially leading to slippage or delays.
              </li>
              <li>
              5. Country and Political Risk: Currency exchange rates can be influenced by political events, government policies, economic instability, or changes in regulations. These factors can create uncertainties and volatility in forex markets.
              </li>
              <li>
              6. Interest Rate Risk: Forex rates are influenced by interest rate differentials between countries. Changes in interest rates, monetary policies, or central bank actions can impact currency values and affect trading positions.
              </li>
              <li>
              7. Technical Risks: Technical issues such as platform failures, connectivity problems, or data feed disruptions can occur during forex trading. These issues can lead to missed trading opportunities, execution delays, or inaccurate price quotes
              </li>

            </ol>


            <h5 className='heading-five font-semibold mb-11'>How to Deposit</h5>

            <p className='mb-8'>
            To deposit funds into a Forex trading account, you typically follow these general steps:
            </p>

            <ol type='1' className='mb-16'>
              <li>
                1. Choose a Forex Broker: Select a reputable Forex broker that meets your trading requirements. Consider factors such as regulation, trading platform, available currency pairs, fees, and customer support.
              </li>
              <li>
              2. Open an Account: Complete the account opening process with your chosen broker. This usually involves providing personal information, verifying your identity, and agreeing to the broker's terms and conditions.
              </li>
              <li>
              3. Choose a Deposit Method: Once your account is opened, you need to choose a deposit method. Forex brokers offer various options, including bank wire transfers, credit/debit cards, e-wallets, and sometimes even cryptocurrencies. Select the method that is most convenient for you.
              </li>
              <li>
              4. Verify Your Account (if necessary): Some brokers may require additional verification steps before allowing deposits. This could involve submitting identification documents, proof of address, or other supporting materials. Follow the broker's instructions to complete the verification process.
              </li>
              <li>
              5. Access the Deposit Section: Log in to your Forex trading account and navigate to the deposit section. Brokers typically have a dedicated area within their platform where you can initiate deposits.
              </li>
              <li>
              6. Enter Deposit Details: Specify the amount you wish to deposit and select your chosen deposit method. Follow the instructions provided by the broker to proceed with the deposit.
              </li>
              <li>
              7. Complete the Deposit: Depending on the deposit method you chose, you may be redirected to a secure payment gateway or instructed to transfer funds to a specific account. Follow the provided instructions carefully, double-checking all details before confirming the transaction.
              </li>
              <li>
                8. Await Confirmation: After initiating the deposit, allow some time for the transaction to process. The time required for funds to appear in your trading account varies depending on the deposit method and the broker's policies.
              </li>
              <li>
                9. Start Trading: Once the funds are credited to your Forex trading account, you can start trading. Ensure you understand the risks involved and have a trading strategy in place.
              </li>

            </ol>

            <p className='mb-8'>
            Note: The specific steps and procedures may vary slightly among brokers. Always refer to your broker's official documentation, support resources, or customer service if you encounter any issues or have specific questions regarding the deposit process.
              </p>


            <div className="grid md:grid-cols-2 gap-4 items-center">
              <div>

              <h5 className='heading-five font-semibold mb-11'>How to Deposit</h5>

                <p className='mb-4'>
                  The process to withdraw with Omayoza is quite simple, here is a scenario that explains the process
                </p>

                <p>
                Scenario: Tom, a Silver Explorer, has a six-month investment contract that he wants to withdraw from. He logs in to his account and navigates to the investment page. He selects the contract he wants to withdraw from and enters the amount he wants to withdraw. The system confirms that the withdrawal request has been submitted and informs Tom of the penalties that apply. Tom confirms that he wants to proceed with the withdrawal, and the system processes the request. Tom receives a notification when the funds are transferred to his account.
                </p>
              </div>
              <div>
                <img src={FaqImage} alt="" className='w-full' />
              </div>
            </div>
        </section>
    </>
  )
}

export default Faqs