import React from 'react'
import {Progress} from "antd"
const Chart = ({allTransection}) => {
    const totalTransaction  = allTransection.length
    const totalIncomeTransactions = allTransection.filter(transaction => transaction.type === 'income')
    const totalExpenseTransactions = allTransection.filter(transaction => transaction.type === 'expense')
    const totalIncomePercent = (totalIncomeTransactions.length / totalTransaction) *100
    const totalExpensePercent = (totalExpenseTransactions.length / totalTransaction) *100

    const totalTurnover = allTransection.reduce((acc ,transaction)=>acc + transaction.amount , 0);
    const totalIncomeTurnover = allTransection.filter((transaction) => transaction.type === 'income')
        .reduce((acc,transaction) =>acc + transaction.amount , 0)
    const totalExpenseTurnover = allTransection.filter((transaction) => transaction.type === 'expense')
        .reduce((acc,transaction) =>acc + transaction.amount , 0)
    const totalIncomeTurnoverPerecent = (totalIncomeTurnover / totalTurnover)*100
    const totalExpenseTurnoverPerecent = (totalExpenseTurnover / totalTurnover)*100
    
  return (
    < >
        <div className='d-flex justify-content-center'>
            <div className='col-md-4'>
                <div >
                    <div className='card-header'>
                        Total Transactions : {totalTransaction}
                    </div>
                    <div className='card-body'>
                        <h5>Income : {totalIncomeTransactions.length}</h5>
                        <h5>Expense: {totalExpenseTransactions.length}</h5>
                        <div className='d-flex justify-content-center'>
                            <Progress  type= "circle" strokeColor={'green'} 
                                percent = {totalIncomePercent.toFixed(0)}/>
                                <span>Income</span>
                        </div>
                        <br/>
                        <div className='d-flex justify-content-center'>
                            <Progress type= "circle" strokeColor={'red'} 
                                percent = {totalExpensePercent.toFixed(0)}/>
                                <span>Expense</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-md-4'>
                <div >
                    <div className=''>
                        Total Total Turnover : {totalTurnover}
                    </div>
                    <div >
                        <h5>Income Turnover : {totalIncomeTurnover.length}</h5>
                        <h5>Expense Turnover: {totalExpenseTurnover.length}</h5>
                        <div className='d-flex justify-content-center'>
                            <Progress type= "circle" strokeColor={'green'} 
                                percent = {totalIncomeTurnoverPerecent.toFixed(0)}/>
                                <span>Income Turnover </span>
                        </div>
                            <br/>
                        <div className='d-flex justify-content-center' >
                            <Progress type= "circle" strokeColor={'red'} 
                                percent = {totalExpenseTurnoverPerecent.toFixed(0)}/>
                                <span>Expense Turnover</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </>
  )
}

export default Chart