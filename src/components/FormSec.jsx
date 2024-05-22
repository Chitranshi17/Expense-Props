import React, { useEffect, useState } from 'react'

const FormSec = ({saveTransactions , edit , updateTransactions}) => {

  const [text, setText] = useState('')
  const [amount , setAmount] = useState()

  const handleSubmit = (e) => {
    e.preventDefault();
    if(edit.editMode){
    updateTransactions(edit.transactions.id , {text , amount})
    }else{
    saveTransactions(text , amount)
  }
  setText("")
  setAmount("")
  }

  useEffect(()=>{
    setText(edit.transactions.text),
    setAmount(edit.transactions.amount)
  }, [edit])

  return (
    <div className="form-sec">
      <h4 className='text-light'>Track Your Budget</h4>
    <form action="" onSubmit={(e)=>handleSubmit(e)}>
      <input type="text"
      placeholder='Sallary,House-Rent,SIP'
      className='form-control rounded-0 p-3 border border-primary fs-5'
      required
      onChange={(e)=>setText(e.target.value)}
      value={text}
      />
     
      <input type="number"
      placeholder='Amount'
      required
      className='form-control rounded-0 p-3 border border-primary fs-5'
      onChange={(e)=>setAmount(e.target.value)}
      value={amount}/>
      <button className='w-100 btn btn-success p-3 rounded-0 border border-dark fs-5'>Make Transaction</button>
    </form>
  </div>
  )
}

export default FormSec
