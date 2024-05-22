import React from 'react'

const TopSec = ({transactions}) => {

  const TotalAmt = transactions.reduce((p,c)=> {
  return p + c.amount
}, 0)

console.log(TotalAmt)

  return (
    <div className="top-sec">         
          <div className="total-cost">
            <h2>Total Amount</h2>
            <h5>{TotalAmt}</h5>
          </div>
     </div>
  )
}

export default TopSec
