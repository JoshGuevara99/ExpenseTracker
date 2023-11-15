import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Main from './Components/Main/Main';
import { FileContext } from '/Users/joshuaguevara/expensetracker/src/FileContext.jsx'
function App() {




  const [balance, setBalance] = useState(100)
  const [transactionList, setTransactionList] = []

  return (
    <FileContext.Provider value = {{balance,setBalance,transactionList,setTransactionList}}>
   
      <div className='App'>
        <Main />
      </div>
 
    </FileContext.Provider>

  );
}

export default App;
