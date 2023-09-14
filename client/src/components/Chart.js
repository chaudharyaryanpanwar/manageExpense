import React from 'react'
import {Progress} from "antd"
const Chart = ({allTransection}) => {

    const categories = ['salary' , 'tip' ,'project' ,'food','movie' , 'bills' ,'medical' ,'fee' , 'tax']

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
        <div className='bg-light text-info'>
        <div className='d-flex justify-content-center'>
        <div className='col-md-4 p-5'>
            <div >
              <div className='card-header'>
                <h3 className='text-primary'>Total Transactions : {totalTransaction}</h3>
              </div>
              <div className='card-body'>
                <h5 className=''>Income : ₹{totalIncomeTurnover.toFixed(2)}</h5>
                <h5>Expense: ₹{totalExpenseTurnover.toFixed(2)}</h5>
                <div className='d-flex justify-content-center card'>
                  <Progress type="circle" strokeColor={'green'} percent={totalIncomeTurnoverPerecent.toFixed(0)} />
                  <span>Income Percent</span>
                </div>
               
                <div className='d-flex justify-content-center card'>
                  <Progress type="circle" strokeColor={'red'} percent={totalExpenseTurnoverPerecent .toFixed(0)} />
                  <span>Expense Percent</span>
                </div>
              </div>
            </div>
          </div>
            {/* <div className='col-md-4'>
                <div >
                    <div className='card-header'>
                        <h3 className='text-primary'>Total Transactions : {totalTransaction}</h3>
                    </div>
                    <div className='card-body'>
                        <h5 className=''>Income : {totalIncomeTransactions.length}</h5>
                        <h5>Expense: {totalExpenseTransactions.length}</h5>
                        <div className='d-flex justify-content-center card'>
                            <Progress  type= "circle" strokeColor={'green'} 
                                percent = {totalIncomePercent.toFixed(0)}/>
                                <span>Income</span>
                        </div>
                        <br/>
                        <div className='d-flex justify-content-center card'>
                            <Progress type= "circle" strokeColor={'red'} 
                                percent = {totalExpensePercent.toFixed(0)}/>
                                <span>Expense</span>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <div className='col-md-4'>
                <div >
                    <div >
                        <h4 className='text-primary'>
                        Total Total Turnover : {totalTurnover}</h4>
                    </div>
                    <div >
                        <h5>Income Turnover : {totalIncomeTurnover.length}</h5>
                        
                        
                        <div className='d-flex justify-content-center card'>
                            <Progress type= "circle" strokeColor={'green'} 
                                percent = {totalIncomeTurnoverPerecent.toFixed(0)}/>
                                <span>Income Turnover </span>
                        </div>

                            <br/>
                            <h5>Expense Turnover: {totalExpenseTurnover.length}</h5>
                        <div className='d-flex justify-content-center card' >
                            <Progress type= "circle" strokeColor={'red'} 
                                percent = {totalExpenseTurnoverPerecent.toFixed(0)}/>
                                <span>Expense Turnover</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-md-4'>
                <h4 className='text-primary'>Category Wise income</h4>
                {
                    category.map(category => {
                        const amount = allTransection
                            .filter(
                                (transaction) =>
                                 transaction.type === 'income' && 
                                 transaction.category === category
                                 )
                                 .reduce((acc ,transaction)=>acc+transaction.amount , 0)
                                 return (
                                    amount>0 && (
                                    <div className='card'>
                                        <div>
                                            <h5>{categories}</h5>
                                            <Progress percent={((amount/totalIncomeTurnover)*100).toFixed(0)} />
                                        </div>
                                    </div>
                                 )
                                 
                                 ) */}
            <div className='col-md-4 p-5'>
            <h4 className='text-primary'>Category Wise income</h4>
            <br/><br/><br/>
            {categories.map(category => {
              const amount = allTransection
                .filter(
                  (transaction) =>
                    transaction.type === 'income' &&
                    transaction.category === category
                )
                .reduce((acc, transaction) => acc + transaction.amount, 0)
              return (
                amount > 0 && (
                  <div className='card' key={category}>
                    <div>
                      <h5>{category}</h5>
                      <Progress percent={((amount / totalIncomeTurnover) * 100).toFixed(0)} />
                    </div>
                  </div>
                )
              )
            })}
            </div>



                   <div className='col-md-4 p-5'>
            <h4 className='text-primary'>Category Wise Expense</h4>
            <br/><br/><br/>
            {categories.map(category => {
              const amount = allTransection
                .filter(
                  (transaction) =>
                    transaction.type === 'expense' &&
                    transaction.category === category
                )
                .reduce((acc, transaction) => acc + transaction.amount, 0)
              return (
                amount > 0 && (
                  <div className='card' key={category}>
                    <div>
                      <h5>{category}</h5>
                      <Progress percent={((amount / totalExpenseTurnover) * 100).toFixed(0)} />
                    </div>
                  </div>
                )
              )
            })}
            
                   
                   
                   </div>

        </div>
        </div>
    </>
  )
}

export default Chart