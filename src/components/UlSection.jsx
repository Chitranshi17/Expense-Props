import React from 'react'
import ListItemSec from './ListItemSec'
const UlSection = ({transactions , deleteTransactions , editTransactions}) => {
  return (
    <div className="ul-sec">
           <ul className='list-group'>
            {
              transactions.map(transaction => <ListItemSec key={transaction.id} transaction={transaction} deleteTransactions={deleteTransactions} editTransactions={editTransactions}/>)
            }
            </ul>
           </div>
  )
}

export default UlSection
