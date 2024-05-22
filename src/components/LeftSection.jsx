
import React from 'react'
import FormSec from './FormSec'
import UlSection from './UlSection'

const LeftSection = ({transactions , deleteTransactions , saveTransactions , editTransactions , edit , updateTransactions}) => {
  return (
    <div className="left-sec">
          <FormSec saveTransactions={saveTransactions} edit={edit} updateTransactions={updateTransactions}/>
          <UlSection transactions={transactions} deleteTransactions={deleteTransactions} editTransactions={editTransactions}/>
    </div>
  )
}

export default LeftSection
