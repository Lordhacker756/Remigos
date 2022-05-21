import {React, useState} from "react";
import "../index.css";

const Calculator = () => {

  // It holds all the conversion rate for the currencies
  const [currency, setCurrency] = useState({
    GBP:97.09,
    USD:77.52,
    CAD:60.61,
    AUD:54.64
  })

  // Used to store the current option selected
  const [selectedCurrency, setSelectedCurrency] = useState("GBP")

  //The current input by the user
  const [amount, setAmount] = useState(500000)

  //The recipient amount = (amount/currency[selectedCurrency]).toFixed(2) , we get the value with 2 places of decimal
  const [recipientAmt, setRecipientAmt] = useState(5104.10)

  return (
    <div className="calculator__container flex-col flex justify-center items-center h-[80vh]">
      <div className="elements__container">
        <div className="input__container w-[20rem]">
          <label className="input__label" htmlFor="amt">
            Amount transferred this year
          </label>
          <input className="input__box" type="text" id="amt" />
        </div>
        <div className="input__container__amt flex  mt-[0.75rem] w-[400px] rounded-[8px]">
          <div className="text_input flex-col flex w-[18rem]">
            <label className="input__label" htmlFor="sent">
              You send
            </label>
            <input className="input__box" type="text" id="sent" value={amount} onChange={(e)=>{
              setAmount(e.target.value)
            }} />
          </div>
          <div className="select__container flex">
            <select className="select__element" name="cars" id="cars">
              <option value="volvo">INR</option>
            </select>
          </div>
        </div>

        {/* Calculation part */}
        <div className="main__container flex flex-col w-full">
          <div className="row_element flex items-center justify-evenly justify-self-start">
            <div className="flex flex-col items-center">
              <div className="line h-3 bg-slate-400 w-1"></div>
              <div className="circle h-4 w-4 rounded-lg bg-slate-400 flex items-center justify-center text-2xl">
                -
              </div>
              <div className="line h-3 w-1 bg-slate-400"></div>
            </div>
            <div className="column__two ml-5 text-lg flex-1 ">4456.00</div>
            <div className="column__three ml-5 text-md flex-1 ">Our Fees</div>
          </div>

          <div className="row_element flex items-center justify-evenly justify-self-start">
            <div className="flex flex-col items-center">
              <div className="line h-3 bg-slate-400 w-1"></div>
              <div className="circle h-4 w-4 rounded-lg bg-slate-400 flex items-center justify-center text-2xl"></div>
              <div className="line h-3 w-1 bg-slate-400"></div>
            </div>
            <div className="column__two ml-5 text-lg flex-1 ">495544.00</div>
            <div className="column__three ml-5 text-md flex-1 ">
              Total Amount (Inc. GST)
            </div>
          </div>

          <div className="row_element flex items-center justify-evenly justify-self-start">
            <div className="flex flex-col items-center">
              <div className="line h-3 bg-slate-400 w-1"></div>
              <div className="circle h-4 w-4 rounded-lg bg-slate-400 flex items-center justify-center text-2xl">
                
              </div>
              <div className="line h-3 w-1 bg-slate-400"></div>
            </div>
            <div className="column__two ml-5 text-lg flex-1 ">495544.00</div>
            <div className="column__three ml-5 text-md flex-1 ">
              Amount we'll convert
            </div>
          </div>

          <div className="row_element flex items-center justify-evenly justify-self-start">
            <div className="flex flex-col items-center">
              <div className="line h-3 bg-slate-400 w-1"></div>
              <div className="circle h-4 w-4 rounded-lg bg-slate-400 flex items-center justify-center text-2xl">
              ÷
              </div>
              <div className="line h-3 w-1 bg-slate-400"></div>
            </div>
            <div className="column__two ml-5 text-lg flex-1 ">{currency[selectedCurrency]}</div>
            <div className="column__three ml-5 text-md flex-1 ">Exchange Rate</div>
          </div>
        </div>
      </div>

      <div className="input__container__amt flex w-[400px] rounded-[8px]">
        <div className="text_input flex-col flex w-[18rem]">
          <label className="input__label" htmlFor="sent">
            Recipient gets
          </label>
          <input className="input__box text-gray-600" disabled type="text" id="sent" value={recipientAmt.toFixed(2)} />
        </div>
        <div className="select__container flex">
          <select className="select__element" name="currency" id="currency" onChange={(e)=>{
            // Setting the selected currency as the user selects the option
              setSelectedCurrency(e.target.value) 
            // Setting the recipient amount as per the calculation
              setRecipientAmt(amount/currency[e.target.value])
          }}>
            <option value="GBP">GBP</option>
            <option value="USD">USD</option>
            <option value="CAD">CAD</option>
            <option value="AUD">AUD</option>
          </select>
        </div>

      </div>
      <button className="w-[400px] bg-green-300 font-bold hover:bg-green-300 mt-7 px-8 py-2 rounded-md text-black" >TRANSFER MONEY</button>
    </div>
  );
};

export default Calculator;
