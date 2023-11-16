import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Main from './Components/Main/Main';
import { FileContext } from '/Users/joshuaguevara/expensetracker/src/FileContext.jsx'
import History from './Components/History/History';
import RecentItem from './Components/RecentItem/RecentItem';
function App() {




  const [balance, setBalance] = useState(100)
  const [transactionList, setTransactionList] = useState([
    <RecentItem reason={"Grocery Store"} date={"11/20"} amount={-120.00}/>,
    <RecentItem reason={"Amazon Refund"} date={"11/18"} amount={75.00}/>,
    <RecentItem reason={"Starbucks"} date={"11/15"} amount={-15.00}/>,
    <RecentItem reason={"Electric Bill"} date={"11/10"} amount={-90.00}/>,
    
    <RecentItem reason={"Freelance Payment"} date={"11/8"} amount={250.00}/>,
    <RecentItem reason={"Netflix"} date={"11/5"} amount={-13.99}/>,
    <RecentItem reason={"Birthday Gift"} date={"11/3"} amount={-50.00}/>,
    <RecentItem reason={"Gym"} date={"11/1"} amount={-45.00}/>,
    
    <RecentItem reason={"Dentist"} date={"10/28"} amount={-200.00}/>,
    <RecentItem reason={"Pet Supplies"} date={"10/25"} amount={-80.00}/>,
    <RecentItem reason={"Car Insurance"} date={"10/22"} amount={-150.00}/>,
    <RecentItem reason={"Bonus Deposit"} date={"10/20"} amount={300.00}/>,
    
    <RecentItem reason={"Haircut"} date={"10/17"} amount={-35.00}/>,
    <RecentItem reason={"Restaurant"} date={"10/15"} amount={-60.00}/>,
    <RecentItem reason={"Cell Phone Bill"} date={"10/13"} amount={-85.00}/>,
    <RecentItem reason={"Train Ticket"} date={"10/10"} amount={-20.00}/>,
    
    <RecentItem reason={"Video Game"} date={"10/8"} amount={-60.00}/>,
    <RecentItem reason={"Yoga Class"} date={"10/6"} amount={-20.00}/>,
    <RecentItem reason={"Pharmacy"} date={"10/4"} amount={-30.00}/>,
    <RecentItem reason={"Laundry"} date={"10/2"} amount={-15.00}/>,
    
    <RecentItem reason={"Movie Tickets"} date={"9/30"} amount={-25.00}/>,
    <RecentItem reason={"Bakery"} date={"9/28"} amount={-20.00}/>,
    <RecentItem reason={"Water Bill"} date={"9/25"} amount={-70.00}/>,
    <RecentItem reason={"Sold Laptop"} date={"9/23"} amount={200.00}/>,
    
    <RecentItem reason={"Mcdonalds"} date={"11/19"} amount={-20.00}/>,
    <RecentItem reason={"Jackie's Venmo "} date={"11/9"} amount={25.00}/>,
    
    <RecentItem reason={"Gas"} date={"11/2"} amount={-60}/>,
    <RecentItem reason={"Payment"} date={"10/19"} amount={200.00}/>,
    
    <RecentItem reason={"Date night"} date={"11/19"} amount={-20.00}/>,
    <RecentItem reason={"Taco Bell"} date={"10/29"} amount={-40.00}/>,
    
    <RecentItem reason={"Halloween"} date={"10/31"} amount={-100.00}/>,
    <RecentItem reason={"Uber"} date={"11/22"} amount={-25.00}/>,
<RecentItem reason={"Book"} date={"11/21"} amount={-15.00}/>,
<RecentItem reason={"Gift Card"} date={"11/19"} amount={-30.00}/>,
<RecentItem reason={"Paycheck"} date={"11/17"} amount={1200.00}/>,
<RecentItem reason={"Groceries"} date={"11/16"} amount={-80.00}/>,
<RecentItem reason={"Cafe"} date={"11/14"} amount={-20.00}/>,
<RecentItem reason={"Shoes"} date={"11/12"} amount={-100.00}/>,
<RecentItem reason={"Rent"} date={"11/10"} amount={-1500.00}/>,
<RecentItem reason={"Gas"} date={"11/9"} amount={-50.00}/>,
<RecentItem reason={"Cable"} date={"11/7"} amount={-60.00}/>,
<RecentItem reason={"Insurance"} date={"11/5"} amount={-120.00}/>,
<RecentItem reason={"Uber Eats"} date={"11/3"} amount={-25.00}/>,
<RecentItem reason={"Flight"} date={"11/1"} amount={-200.00}/>,
<RecentItem reason={"Gym"} date={"10/30"} amount={-40.00}/>,
<RecentItem reason={"Refund"} date={"10/28"} amount={50.00}/>,
<RecentItem reason={"Pharmacy"} date={"10/26"} amount={-15.00}/>,
<RecentItem reason={"Dinner"} date={"10/24"} amount={-50.00}/>,
<RecentItem reason={"Coffee"} date={"10/22"} amount={-5.00}/>,
<RecentItem reason={"Car Repair"} date={"10/20"} amount={-300.00}/>,
<RecentItem reason={"Gift"} date={"10/18"} amount={-40.00}/>,
<RecentItem reason={"Bus"} date={"10/16"} amount={-3.00}/>,
<RecentItem reason={"App Subscription"} date={"10/14"} amount={-9.99}/>,
<RecentItem reason={"Taxi"} date={"10/12"} amount={-30.00}/>,
<RecentItem reason={"Parking"} date={"10/10"} amount={-10.00}/>,
<RecentItem reason={"Laundry"} date={"10/8"} amount={-20.00}/>,
<RecentItem reason={"Pizza"} date={"10/6"} amount={-15.00}/>,
<RecentItem reason={"Bar"} date={"10/4"} amount={-60.00}/>,
<RecentItem reason={"Haircut"} date={"10/2"} amount={-25.00}/>,
<RecentItem reason={"Donation"} date={"9/30"} amount={-50.00}/>,
<RecentItem reason={"Software"} date={"9/28"} amount={-100.00}/>,
<RecentItem reason={"Concert"} date={"9/26"} amount={-80.00}/>,
<RecentItem reason={"Furniture"} date={"9/24"} amount={-200.00}/>,
<RecentItem reason={"Hotel"} date={"9/22"} amount={-120.00}/>,
<RecentItem reason={"Train"} date={"9/20"} amount={-40.00}/>,
<RecentItem reason={"Utilities"} date={"9/18"} amount={-100.00}/>,
<RecentItem reason={"Freelance"} date={"9/16"} amount={500.00}/>,
<RecentItem reason={"Cinema"} date={"9/14"} amount={-12.00}/>,
<RecentItem reason={"Takeout"} date={"9/12"} amount={-20.00}/>,
<RecentItem reason={"Gardening"} date={"9/10"} amount={-30.00}/>,
<RecentItem reason={"Electricity"} date={"9/8"} amount={-75.00}/>,
<RecentItem reason={"Gas Bill"} date={"9/6"} amount={-55.00}/>,
<RecentItem reason={"Internet"} date={"9/4"} amount={-50.00}/>,
<RecentItem reason={"Tax"} date={"9/2"} amount={-150.00}/>,
<RecentItem reason={"Art Supplies"} date={"8/31"} amount={-45.00}/>,

    
    
    
  ])
  

  return (
    <FileContext.Provider value={{ balance, setBalance, transactionList, setTransactionList }}>

      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element = {<Main/>}/>
          <Route path="/history" element = {<History/>}/>

        </Route>

        

      </Routes>

    </FileContext.Provider>

  );
}

export default App;
