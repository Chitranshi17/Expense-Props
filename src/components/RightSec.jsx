
import React from 'react'
import BottomSec from './BottomSec'
import TopSec from './TopSec';

const RightSec = ({transactions}) => {
  return (
    <div className="right-sec">
        <TopSec transactions={transactions}/>
        <BottomSec transactions={transactions}/>
    </div>
  )
}

export default RightSec;
