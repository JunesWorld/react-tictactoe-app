import React, { Component } from 'react'
import './ExpenseList.css'
import ExpenseItem from './ExpenseItem'
import { MdDelete } from 'react-icons/md'

export class ExpenseList extends Component {
  render() {
    // 부모 컴포넌트(App.js)에서 Props 받아오기
    console.log(this.props.initialExpenses)
    return (
      <>
        <ul className='list'>
          {/** Expnese Item */}
          {this.props.initialExpenses.map(expense => {
            return (
              <ExpenseItem
                expense={expense}
                key={expense.id}
                handleDelete={this.props.handleDelete} />
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
}

export default ExpenseList