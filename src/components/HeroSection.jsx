
import React from 'react'
import LeftSection from './LeftSection'
import RightSec from './RightSec'

const HeroSection = ({transactions , deleteTransactions , saveTransactions , editTransactions , edit , updateTransactions}) => {
  return (
    <div className="HeroSection">
      <LeftSection transactions={transactions} deleteTransactions={deleteTransactions} saveTransactions={saveTransactions} editTransactions={editTransactions} edit={edit} updateTransactions={updateTransactions}/>
      <RightSec transactions={transactions}/>
    </div>
  )
}

export default HeroSection

