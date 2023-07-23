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

- HOC란 무엇인가?
  - Higher Order Component
  - 컴포넌트를 인자로 받아 새로운 리액트 컴포넌트를 리턴하는 함수
- 너무나 많은 HOC를 사용하게 되면 Wrapper가 너무 많아지게 됩니다. 그걸 Hooks에서는 어떻게 처리하나요?
  - React Hooks에서는 HOC 대신에 따로 Custom Hooks를 이용해서 컴포넌트를 만들어서 처리해줍니다. 그로인해 Wrapper가 많아지는 일을 방지
- 생명주기를 위해서 Hooks에서는 어떠한 api를 사용하나요?
  - ComponentDidMount, ComponentDidUpdate, ComponentWillUnmount 모두를 Hooks에서는 useEffect를 이용해서 처리
- Hooks에서 state를 업데이트 해주려면 어떻게 해야하나요?
  - state를 정의해줄 때 `const[ name, setName ] = useState(""); 이런식으로 해줍니다. 여기서 setName을 이용해서 state를 업데이트 시켜 줄 수 있습니다.
- `const [value, setValue] = useState("");`
  - value : 변수 이름 getter
  - setValue : State를 정하는 함수 setter
  - useState : value, setValue를 리턴하고 초기 State 값을 정하는 Hook

## 구조 분해 할당(Destructuring)

배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 Javascript 표현식

```js
const week = ['monday', 'tuesday', 'wednesday', 'thurseday', 'friday'];
const [day1, day2, day3, day4, day5] = week;
```

## 지출 목록 추가 기능 생성하기

State 생성하기

- 입력할 때 값을 기억해줄 State가 필요합니다.
  ```js
  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState(0);
  ```
- Input 요소에 타이핑을 할 때 각 해당 state에 값을 업데이트해줘야 합니다.

## 자바스크립트 타입을 통한 불변성 의미 살펴보기

원시 타입 = 불변성
- Boolean, String, Number, null, undefined, Symbol
- 고정된 크기로 Call Stack 메모리에 저장, 실제로 데이터가 변수에 할당
- A가 있다면 B에 새로 생성!!

참조 타입 = 가변성
- Object, Array
- 데이터 크기가 정해지지 않고 Call Stack 메모리에 저장
- 데이터 값이 Heep에 저장되며 변수에 Heep 메모리의 주소값이 할당
- 실제로 변경!!

기본적으로 Javascript는 원시 타입에 대한 참조 및 값을 저장하기 위해 Call Stack 메모리 공간을 사용하지만 참조 타입의 경우 Heep이라는 별도의 메모리 공간을 사용합니다. 이경우 Call Stack은 개체 및 배열 값이 아닌 메모리에만 Heep 메모리 참조 ID를 값으로 저장합니다.

불변성을 지켜야 하는 이유?
- 참조 타입에서 객체나 배열의 값이 변할 때 원본 데이터가 변경되기에 이 원본 데이터를 잠조하고 있는 다른 객체에서 예상치 못한 오류가 발생할 수 있어 프로그램의 복잡도가 올라간다.
- 리액트에서 화면을 업데이트할 때 불변성을 지켜서 값을 이전 값과 비교해서 변경된 사항을 확인한 후 업데이트하기 때문에

지키는 방법?
- 참조 타입에서는 값을 바꿨을 때 Call Stack 주소 값은 같은데 Heep 메모리 값만 바꿔주기에 불변성을 유지할 수 없음으로 아예 새로운 배열을 반환하는 메소드 사용
- spread operator, map, filter, slice, reduce
- 원본 데이터를 변경하는 메소드 = splice, push

## 전개 연산자

배열 조합
```js
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const arr3 = [7, 8, 9]
const arrWrap = [...arr1, ...arr2, ...arr3]
```

객체 조합
- 객체 자체가 아닌 각각의 값이 할당 됨
```js
const obj1 = {
  a: 'A',
  b: 'B'
};
const obj2 = {
  c: 'C',
  d: 'D'
};
const objWrap = {...obj1, ...obj2};
console.log(objWrap)
{
  a: 'A',
  b: 'B',
  c: 'C',
  d: 'D'
}
```

기존 배열을 보존
```js
const arr1 = [1, 2, 3]
const arr2 = [...arr1].reverse();

console.log(arr1) // [1, 2, 3]
console.log(arr2) // [3, 2, 1]
```
