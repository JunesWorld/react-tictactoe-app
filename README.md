# React-tictactoe-app

## Install
```bash
npx create-react-app ./
```

## Components

App Component  
|- ExpenseForm  
|- ExpenseList/ExpenseItem  

## Extension

ES7 + React!
- rce + tab

## React Icon

react-icons 모듈 사용  
`npm install react-icons`

## Props를 통해 컴포넌트 간 데이터 정리하기

- Props는 Properties의 줄임말
- Props는 상속하는 부모 컴포넌트로부터 자녀 컴포넌트에 데이터등을 전달하는 방법
  - (App.js -> ExpenseList.js -> ExpenseItem.js)
- 읽기 전용(immutable)으로 자녀 컴포넌트 입장에서는 변하지 않는다.
  - 변하게 하고자 하면 부모 컴포넌트에서 state를 변경시켜줘야한다.
