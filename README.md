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

## JSX Key 속성 이해하기

리액트에서 요소의 리스트를 나열할 때는 Key를 넣어줘야합니다.  
키는 React가 변경, 추가 또는 제거된 항목을 식별하는데 도움이 됩니다.  
요소에 안정적인 ID를 부여하려면 배열 내부의 요소에 키를 제공해야 합니다.  
