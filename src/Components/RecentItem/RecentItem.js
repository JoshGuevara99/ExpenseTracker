import React, { useEffect } from 'react'
import './RecentItem.css'
import { useState } from 'react'

function RecentItem(props) {

  const [change,setChange]= useState("")
  useEffect(()=>{
    
    let itemChange =  props.amount > 0 ? "positive" : "negative";
    setChange(itemChange)
   

  },[])
  
  const formatCurrency = (number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(number);
  };
  



  return (
    <div className='history-item-container'>
        <span>{props.reason}</span>
        <span>{props.date}</span>
        <span className={`item-amount-${change}`}>{formatCurrency(props.amount)}</span>

    </div>
  )
}

export default RecentItem