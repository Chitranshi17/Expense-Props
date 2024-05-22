import React, { useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'

const App = () => {

  const [transactions , setTransactions ] = useState([
    {id : 1 , text : "Salary" , amount : 100000},
    {id : 2 , text : "Rent" , amount : -8000},
  ])

  // Delete Transactions

  const deleteTransactions = (id) => {
    setTransactions(transactions.filter(transaction => transaction.id !== id))
  }


  // Save Transactions

  const saveTransactions = (text, amount) => {
    const newTransactions = {
      id : crypto.randomUUID(),
      text,
      amount : parseInt(amount),
    }
    setTransactions([newTransactions, ...transactions])
  }


  // Edit Transactions 

  const [edit , setEdit] = useState({
    transactions : {},
    editMode : false,
  })

  const editTransactions = (oldTransactions) => {
    setEdit({
      transactions : oldTransactions,
      editMode : true,
    })
  }

  // Update Transactions

  const updateTransactions = (oldID, newTransactions) => {
    setTransactions(transactions.map(item => item.id === oldID ? {...item , text : newTransactions.text , amount : +newTransactions.amount} : item))
    setEdit({
      transactions : {},
      editMode : false,
    })
  }
 


  return (
  <>
      <Navbar/>
      <HeroSection transactions={transactions} deleteTransactions={deleteTransactions} saveTransactions={saveTransactions} editTransactions={editTransactions} edit={edit} updateTransactions={updateTransactions}/>
  </>
  )
}

export default App
