import React from 'react'
import ListItem from './ListItem'

const ListGroup = ({transactions,deleteList,editList}) => {
  return (
   <ul className='list-group'>
    {
      transactions.map((transaction)=><ListItem key={transaction.id} transaction={transaction} deleteList={deleteList} editList={editList}/>)
    }
   </ul>
  )
}

export default ListGroup