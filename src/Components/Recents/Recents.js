import React from 'react'
import RecentItem from '../RecentItem/RecentItem'
import './Recents.css'
import { useContext } from 'react'
import { FileContext } from '../../FileContext'
function Recents() {

  const {transactionList,setTransactionList} = useContext(FileContext)
  return (
    <div className='history-container'>
      <h5>Recents</h5>
      <div className="history-items-section">
        {transactionList.slice(0,19)}
        {/* <RecentItem reason={"Mcdonalds"} date={"11/19"} amount={-20.00}/>
        <RecentItem reason={"Jackie's Venmo "} date={"11/9"} amount={25.00}/>


        <RecentItem reason={"Gas"} date={"11/2"} amount={-60}/>
        <RecentItem reason={"Payment"} date={"10/19"} amount={200.00}/>

        <RecentItem reason={"Date night"} date={"11/19"} amount={-20.00}/>
        <RecentItem reason={"Taco Bell"} date={"10/29"} amount={-40.00}/>

        <RecentItem reason={"Halloween"} date={"10/31"} amount={-100.00}/> */}




      </div>


    </div>
  )
}

export default Recents