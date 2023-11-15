import React from 'react'
import '/Users/joshuaguevara/expensetracker/src/Components/Main/Main.css'
import History from '/Users/joshuaguevara/expensetracker/src/Components/History/History.js'
import NewTransaction from '/Users/joshuaguevara/expensetracker/src/Components/NewTransaction/NewTransaction.js'
function Main() {
  return (
    <div className='main-container'>
        <div className='balance-container'>
          <h3>Balance</h3>
          <span className='balance-amount'>$400</span>
        
        </div>
        <hr/>
        <div>
          
          <History/>

        </div>
   
        <hr/>
        <div>
          <NewTransaction/>

        </div>

       
       </div>
  )
}

export default Main