import { useState } from "react";
import "./App.css";
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';

const App = () => {

  // 지출 목록 추가!
  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState(0);

  // const [value, setValue] = useState("");
  // value : 변수 이름 getter
  // setValue : state를 정하는 함수 setter
  // useState : value, setValue를 리턴하고 초기 State 값을 정하는 Hook
  // this.state 제거
  const [expenses, setExpenses] = useState([
    { id: 1, charge: "렌트비", amount: 1600},
    { id: 2, charge: "교통비", amount: 400},
    { id: 3, charge: "식비", amount: 1200}
  ])

  // 지출 목록 추가!
  // ExpenseForm => onChange
  const handleCharge = (e) => {
    console.log(e.target.value)
    setCharge(e.target.value)
  }

  const handleAmount = (e) => {
    setAmount(e.target.valueAsNumber)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (charge !== "" && amount > 0) {
      const newExpense = {id: crypto.randomUUID(), charge, amount}

      // 불변성을 지켜주기 위해서 새로운 expense를 생성
      const newExpenses = [...expenses, newExpense];
      setExpenses(newExpenses);
      setCharge("");
      setAmount(0);
      
    }else {
      console.log('error')
    }
  }
  // // State 생성
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     expenses: [
  //       { id: 1, charge: "렌트비", amount: 1600},
  //       { id: 2, charge: "교통비", amount: 400},
  //       { id: 3, charge: "식비", amount: 1200}
  //     ]
  //   }
  // }

  // // ExpenseItem
  // initialExpenses = [
  //   { id: 1, charge: "렌트비", amount: 1600},
  //   { id: 2, charge: "교통비", amount: 400},
  //   { id: 3, charge: "식비", amount: 1200}
  // ]

  const handleDelete = (id) => {
    const newExpenses = expenses.filter(expense => expense.id !== id)
    console.log(newExpenses)
    // state update!
    setExpenses(newExpenses)
    // this.setState({ expenses: newExpenses });
  }

    return(
      <main className="main-container">
        <h1>예산 계산기</h1>

        <div style={{ width: '100%', backgroundColor: 'white', padding: '1rem' }}>
          {/* Expense Form */}
          {/* ExpenseForm에서 가져올 수 있게 state 내려주기 */}
          <ExpenseForm
            handleCharge = {handleCharge}
            charge = {charge}
            handleAmount = {handleAmount}
            amount = {amount}
            handleSubmit = {handleSubmit}
          />
        </div>

        <div style={{ width: '100%', backgroundColor: 'white', padding: '1rem' }}>
          {/* Expense List */}
          {/* Props 자녀 컴포넌트로 전달 */}
          {/* List에서도 내려줘야함 */}
          <ExpenseList 
            initialExpenses={expenses}
            handleDelete = {handleDelete} />
        </div>

        <div style={{ display: 'flex', justifyContent: 'end', marginTop: '1rem' }}>
          <p style={{ fontSize: '2rem' }}>
            총지출:
            <span>원</span>
          </p>
        </div>

      </main>
    )
  }


export default App;