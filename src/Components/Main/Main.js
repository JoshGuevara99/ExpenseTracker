import React from 'react'
import '/Users/joshuaguevara/expensetracker/src/Components/Main/Main.css'
import Recents from '/Users/joshuaguevara/expensetracker/src/Components/Recents/Recents.js'
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
          
          <Recents/>

        </div>
   
        <hr/>
        <div>
          <NewTransaction/>

        </div>

       
       </div>
  )
}

export default Main