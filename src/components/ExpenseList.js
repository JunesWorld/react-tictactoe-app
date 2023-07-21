import React from 'react'
import './ExpenseList.css'
import ExpenseItem from './ExpenseItem'
import { MdDelete } from 'react-icons/md'

const ExpenseList = ({ handleDelete, initialExpenses }) => {
    // 부모 컴포넌트(App.js)에서 Props 받아오기
    // console.log(props.initialExpenses)
    return (
      <>
        <ul className='list'>
          {/** Expnese Item */}
          {initialExpenses.map(expense => {
            return (
              <ExpenseItem
                expense={expense}
                key={expense.id}
                handleDelete={handleDelete} />
            )
          })}
        </ul>
        <button className='btn'>
          목록 지우기
          <MdDelete className='btn-icon' />
        </button>
      </>
    )
}

export default ExpenseList