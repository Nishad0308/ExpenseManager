import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Card1 from './Components/Card1'
import Card2 from './Components/Card2'
import ListGroup from './Components/ListGroup'

const App = () => {

  const [transactions, setTransactions] = useState([
    { id: 1, text: "Salary", Amount: 25000 },
    { id: 2, text: "Rent", Amount: -5000 },
    { id: 3, text: "Market", Amount: 10000 },
    { id: 4, text: "Shopping", Amount: -6000 }
  ])

  const [edit, setEdit] = useState({
    transaction: {},
    editMode: false
  })

  const deleteList = (id) => {
    setTransactions(transactions.filter((transactions) => {
      if (transactions.id !== id) {
        return true
      }
    }))
  }

  const addList=(text,Amount)=>{

  }

  const editList = (transaction) => {
    setEdit({
      transaction: transaction,
      editMode: true
    })
  }
  return (
    <>
      <Navbar />
      <div className="container">
        <Card1 transactions={transactions} edit={edit}/>
        <Card2 transactions={transactions} />
        <ListGroup transactions={transactions} deleteList={deleteList} editList={editList} />
      </div>
    </>
  )
}

export default App