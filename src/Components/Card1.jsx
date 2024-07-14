import React, { useEffect, useState } from 'react'

const Card1 = ({ transactions, edit, addList }) => {
    const total = transactions.reduce((p, c) => {
        return p + c.Amount
    }, 0)

    const[texts,setTexts]=useState("")
    const [amounts,setAmounts]=useState("")

    const handleSubmit=(e)=>{
        e.preventdefault();
        addList("Hello",25000)
    }

    const [text, setText] = useState('')
    const [Amount, setAmount] = useState('')
    useEffect(() => {
        setText(edit.transaction.text)
        setAmount(edit.transaction.Amount)
    }, [edit])

    return (
        <div class="container px-4 text-center mt-5">
            <div class="row gx-5">
                <div class="col">
                    <div class="p-3">
                        <div class="card">
                            <div class="card-body">
                                <p className="h1 text-secondary fw-bold">Total Balance: </p>
                                <p className="h3 text-success fw-bold">Rs. {total} </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="p-3">
                        <div class="card">
                            <div class="card-body">
                                <form action="" onSubmit={(e)=>handleSubmit(e)}>
                                    <input type="text" className="form-control" value={text} onChange={(e) => setText(e.target.value)} placeholder='Enter narration: ' required />
                                    <input type="text" className="form-control mt-3" value={Amount} onChange={(e) => setAmount(e.target.value)} placeholder='Enter amount: ' required />
                                    <button className="btn btn-success w-100 mt-3">Add item</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card1