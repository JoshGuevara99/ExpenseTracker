import React from 'react'
import HistoryItem from '../HistoryItem/HistoryItem'
import './History.css'
function History() {
  return (
    <div className='history-container'>
      <h5>History</h5>
      <div className="history-items-section">
        <HistoryItem reason={"Mcdonalds"} date={"11/19"} amount={-20.00}/>
        <HistoryItem reason={"Jackie's Venmo "} date={"11/9"} amount={25.00}/>


        <HistoryItem reason={"Gas"} date={"11/2"} amount={-60}/>
        <HistoryItem reason={"Payment"} date={"10/19"} amount={200.00}/>

        <HistoryItem reason={"Date night"} date={"11/19"} amount={-20.00}/>
        <HistoryItem reason={"Taco Bell"} date={"10/29"} amount={-40.00}/>

        <HistoryItem reason={"Halloween"} date={"10/31"} amount={-100.00}/>




      </div>


    </div>
  )
}

export default History