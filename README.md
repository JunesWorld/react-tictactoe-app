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

## React State란?

React에서 데이터가 변할 때 화면을 다시 렌더링 해주기 위해서는 React State를 사용해야 합니다.
- 컴포넌트의 렌더링 결과물에 영향을 주는 데이터를 갖고 있는 객체입니다.
- State가 변경되면 컴포넌트는 리랜더링됩니다. 또한 State는 컴포넌트 안에서 관리됩니다.

## Super

React Component 객체가 생성될 때 props 속성을 초기화하기 위해 부모 컴포넌트에게 props를 전달
- 생성자 내부에서도 this.props를 정상적으로 사용할 수 있도록 보장하기 위함

## State VS Props

Props
- A부모 컴포넌트
  - state = {a:"a"}
- <B컴포넌트 aProps={this.state.a} />
 - B 자식 컴포넌트
   - a state 필요
   - this.props.aProps
   ```js
   <ChatMessages
      message={message}
      currentMember={member}
   />
   ```  
State 
- A 컴포넌트
  ```js
  state = {a:"a"}
  this.state.a
  ```
  ```js
  state = {
    message: '',
    attachFile: undefined,
    openMenu: false,
  };
  ```

  ## React Hooks(Functional Component)

  ReactConf 2018에서 발표된, 클래스 없이 state를 사용할 수 있는 기능.  
  [React Component]  
  |- Class Component : 더 많은 기능 | 더 긴 코드 양 | 더 복잡한 코드 | 더딘 성능  
  |- Functional Component : 더 적은 기능 | 짧은 코드 양 | 심플한 코드 | 빠른 성능
