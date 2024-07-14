import React from 'react'

const ListItem = ({transaction,deleteList,editList}) => {
    return (
        <li className='list-group-item d-flex justify-content-between mt-5'>
            <span>
                <p className='h3 text-secondary'>{transaction.text} </p>
                <p className={transaction.Amount > 0 ? 'h4 text-success' : 'h4 text-danger'}>Rs. {transaction.Amount} </p>
            </span>
            <span>
                <button className="btn btn-danger btn-sm float-end mt-4" onClick={()=>deleteList(transaction.id)}>Delete</button>
                <button className="btn btn-warning btn-sm float-end mt-4" onClick={()=>editList(transaction)}>Edit</button>
            </span>
        </li>
    )
}

export default ListItem