import React from 'react'

const ListItemSec = ({transaction , deleteTransactions , editTransactions}) => {
  return (
    <>
              <li className='list-group-item bg-success-subtle rounded-0 my-1'>
                <div className="text">
                <h4>{transaction.text}</h4>
                <h6 className={transaction.amount > 0 ? 'text-success' : 'text-danger'}>{transaction.amount}</h6>
                </div>
                <span className='float-end'>
                  <button className="btn btn-warning btn-sm rounded-0"
                  onClick={()=>editTransactions(transaction)} >Edit</button>
                  <button className="btn btn-danger btn-sm rounded-0" 
                  onClick={() => deleteTransactions(transaction.id)}>Delete</button>
                </span>
              </li>
    </>
  )
}

export default ListItemSec
