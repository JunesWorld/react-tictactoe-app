import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert"
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';

const App = () => {

  // 지출 목록 추가!
  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState(0);
  const [alert, setAlert] = useState({ show: false });
  const [id, setId] = useState('');
  const [edit, setEdit] = useState(false);

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

  const clearItems = () => {
    setExpenses([])
  }

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
      if (edit) {
        const newExpenses = expenses.map(item => {
          // Edit 시 id 같으면 override
          return item.id === id ? {...item, charge, amount} : item
        })

        setExpenses(newExpenses)
        setEdit(false)
        handleAlert({ type: 'success', text: "아이템이 수정되었습니다."})
      }else {
        const newExpense = {id: crypto.randomUUID(), charge, amount}
        // 불변성을 지켜주기 위해서 새로운 expense를 생성
        const newExpenses = [...expenses, newExpense];
        setExpenses(newExpenses);
        handleAlert({ type: "success", text: "아이템이 생섣되었습니다."})
      }
      setCharge("");
      setAmount(0);
    }else {
      console.log('error');
      handleAlert({
        type: 'danger',
        text: 'charge는 빈 값일 수 없으며 amount는 0보다 커야 합니다.'
      })
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
    handleAlert({ type: 'danger', text: '아이템이 삭제되었습니다.'})
  }

  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text })
    setTimeout(() => {
      setAlert({ show: false })
    }, 7000)
  }

  // List & Item 컴포넌트에 내려주기
  const handleEdit = id => {
    const expense = expenses.find(item => item.id === id);
    const { charge, amount } = expense;
    setId(id);
    setCharge(charge);
    setAmount(amount);
    setEdit(true); 
  }

    return(
      <main className="main-container">
        {/* alert.show가 true 일 때 Alert 컴포넌트를 보여주고 아닐 때는 null */}
        {alert.show ? <Alert type={alert.type} text={alert.text} /> : null }
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
            edit = {edit}
          />
        </div>

        <div style={{ width: '100%', backgroundColor: 'white', padding: '1rem' }}>
          {/* Expense List */}
          {/* Props 자녀 컴포넌트로 전달 */}
          {/* List에서도 내려줘야함 */}
          <ExpenseList 
            expenses = {expenses}
            handleDelete = {handleDelete}
            handleEdit = {handleEdit}
            clearItems = {clearItems}
          />
        </div>

        <div style={{ display: 'flex', justifyContent: 'end', marginTop: '1rem' }}>
          <p style={{ fontSize: '2rem' }}>
            총지출:
            {/* 총 비용 계산하기 reduce */}
            <span>
              {expenses.reduce((acc, curr) => {
                return (acc += curr.amount);
              }, 0)}
              원
            </span>
          </p>
        </div>

      </main>
    )
  }


export default App;