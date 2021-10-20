import {useState} from 'react'

function ATM(){

    const [amount, setAmount] = useState(0)
    const [balance, setBalance] = useState(0)

    const [amountSavings, setAmountSavings] = useState(0)
    const [balanceSavings, setBalanceSavings] = useState(0)


    const handleDeposit = () =>{
        
        setBalance(Number(balance) + Number(amount))
        setAmount(0)
    }    

    const handleWithdraw = () =>{
        if (balance < amount){
            setAmount(0)
            return
        } else if ( balance >= amount){
            setBalance(Number(balance) - Number(amount))
            setAmount(0)
        }
    }

    const handleDepositSavings = () =>{
        
        setBalanceSavings(Number(balanceSavings) + Number(amountSavings))
        setAmountSavings(0)
    }    

    const handleWithdrawSavings = () =>{
        if (balanceSavings < amountSavings){
            setAmountSavings(0)
            return
        } else if ( balanceSavings >= amountSavings){
            setBalanceSavings(Number(balanceSavings) - Number(amountSavings))
            setAmountSavings(0)
        }
    }

    const handleTransferToSavings = () => {
        if (balance < amount){
            setAmount(0)
            return
    } else if (balance > amount) {
        setBalance(Number(balance) - Number(amount))
        setAmount(0)
        setBalanceSavings(Number(balanceSavings) + Number(amount))
    }
    }

    const handleTransferToChecking = () =>{
        if (balanceSavings < amountSavings){
            setAmount(0)
            return
        }else if (balanceSavings >= amountSavings){
            setBalanceSavings(Number(balanceSavings) - Number(amountSavings))
            setBalance(Number(balance) + Number(amountSavings))
            setAmountSavings(0)
        }
    }

    return(
        <div>
            <h1>Checking</h1>
            <h2>Balance : {balance}</h2>
            <h2>Amount: {amount} </h2>
            <input 
            type="text" 
            value={amount}
            onChange={ e => setAmount(e.target.value) }
            />
            <button
            onClick={handleDeposit}
            >Deposit</button>
            <button
            onClick={handleWithdraw}
            >Withdrawal</button>
            <button
            onClick={handleTransferToSavings}>Transfer</button>


            <h1>Savings</h1>
            <h2>Balance : {balanceSavings}</h2>
            <h2>Amount: {amountSavings} </h2>
            <input 
            type="text" 
            value={amountSavings}
            onChange={ e => setAmountSavings(e.target.value) }
            />
            <button
            onClick={handleDepositSavings}
            >Deposit</button>
            <button
            onClick={handleWithdrawSavings}
            >Withdrawal</button>
            <button
            onClick={handleTransferToChecking}>Transfer</button>

        </div>

    )
}

export default ATM