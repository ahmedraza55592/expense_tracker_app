import React , { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const AddTransaction = () => {
    const [description, setDescription] = useState('');
    const [transactionAmount, setTransactionAmount] = useState('');

    const { addTransaction } = useContext(GlobalContext); 

    const onSubmit = (e) => {
        e.preventDefault();

        const newTransaction = {
            id: new Date().getTime(),
            description,
            transactionAmount: +transactionAmount
        }

        addTransaction(newTransaction);
    }
    return (
        <div>
            <h3>Add New Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="descripion">Text</label>
                    <input type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter text ..."></input>
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br /> (negative - expense, positive - income)</label>
                    <input type="number" id="amount" value={transactionAmount} onChange={(e) => setTransactionAmount(e.target.value)} placeholder="Enter amount ..."></input>
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </div>
    )
}
