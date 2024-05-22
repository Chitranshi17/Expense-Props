import React from 'react'

const bottomSec = ({transactions}) => {

  const Income = transactions.filter(transaction => transaction.amount > 0).reduce((p,c)=>{
    return p + c.amount;
  }, 0)

  const Expense = transactions.filter(transactions => transactions.amount < 0).reduce((p,c)=>{
    return p + c.amount;
  }, 0)

  return (
    <div className="bottom-sec">
        <div className="card-c p-3 d-flex align-items-center justify-content-center">
                <h3 className='text-success'>Income</h3>
                <h6>{Income}</h6>
            </div>
           
            <div className="card-c p-3 d-flex align-items-center justify-content-center">
                <h3 className='text-danger'>Expense</h3>
                <h6>{Expense}</h6>
            </div>
        </div>
  )
}

export default bottomSec;
