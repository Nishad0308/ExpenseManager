import React from 'react'

const Card2 = ({transactions}) => {

    const balance = transactions.filter((transaction)=>{
        if(transaction.Amount > 0){
            return true
        }
    }).reduce((p,c)=>{
        return p + c.Amount;
    },0)
    //console.log(balance)
    const expense = transactions.filter((transaction)=>{
        if(transactions.Amount < 0){
            return true
        }
    }).reduce((p,c)=>{
        return p + c.Amount;
    },0)
    return (
        <div class="container px-4 text-center mt-5">
            <div class="row gx-5">
                <div class="col">
                    <div class="p-3">
                        <div class="card">
                            <div class="card-body">
                                <p className="h1 text-secondary fw-bold">Total Expenses: </p>
                                <p className="h3 text-danger fw-bold">Rs. {expense} </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="p-3"><div class="card">
                        <div class="card-body">
                            <p className="h1 text-secondary fw-bold">Total Credit: </p>
                            <p className="h3 text-warning fw-bold">Rs. {balance} </p>
                        </div>
                    </div></div>
                </div>
            </div>
        </div>
    )
}

export default Card2