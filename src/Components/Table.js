import React, { useState } from 'react'
import './Table.css';

function Table() {

  const [amount1, setAmount1] = useState("");
  const [amount2, setAmount2] = useState("");
  const [amount3, setAmount3] = useState("");
  const [amount4, setAmount4] = useState("");
  

  const handleamount1Change = (e) => {
    setAmount1(e.target.value)
  }

  const handleamount2Change = (e) => {
    setAmount2(e.target.value)
  }

  const handleamount3Change = (e) => {
    setAmount3(e.target.value)
  }

  const handleamount4Change = (e) => {
    setAmount4(e.target.value)
  }

  const objInfo = {
   amount1,
   amount2,
   amount3,
   amount4
  }

  const handleSubmit = (e) => {
    console.log(objInfo)
 
   
    e.preventDefault();
    }

  
  return (
    <>

    <div className='btnnm'>
      <button className='btn1'>Insert New Row</button>
      <button className='btn1'>Clear Row</button>
      <button onSubmit={handleSubmit} className='btn1'>Submit Row</button>
    </div>
    <br></br>
    <div>
    <table>
  <tbody><tr>
      <th>Item Name</th>
      <th>Amount</th>
      <th>Action</th>
    </tr>
    <tr>
    <td>Item 1</td>
      <td>  <input value={amount1} name="amount1" onChange={handleamount1Change} placeholder="Enter Amount"/></td>
      <td> <button>Delete</button></td>
    </tr>
    <tr>
       <td>Item 2</td>
      <td>  <input value={amount2} name="amount2" onChange={handleamount2Change} placeholder="Enter Amount"/></td>
      <td> <button>Delete</button></td>
    </tr>
    <tr>
    <td>Item 3</td>
      <td> <input value={amount3} name="amount3" onChange={handleamount3Change} placeholder="Enter Amount"/></td>
      <td> <button>Delete</button></td>
    </tr>
    <tr>
    <td>Item 4</td>
      <td>  <input value={amount4} name="amount4" onChange={handleamount4Change} placeholder="Enter Amount"/></td>
      <td> <button>Delete</button></td>
    </tr>
 
   
  </tbody></table>


    </div>
    </>
  )
}

export default Table
