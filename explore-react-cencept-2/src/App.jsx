import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
import Team from './Team'
import Users from './Users'
import Friends from './friends'

function App() {
  // function handleClick(){
  //   alert('clicked by Click Me');
  // }
  // const handleHere = () =>{
  //   alert('Information here');
  // }

  // const clickMore = (num) =>{
  //   alert(num + 5);
  // }

  return (
    <>
      <h1>React core concepts</h1>
      <Users></Users>
      <Counter></Counter>
      <Team></Team>
      <Friends></Friends>
      {/* <button onClick={handleClick}>Click Me</button>
      <button onClick={handleHere}>Here</button>
      <button onClick={() => {alert('Go Now solution')}}>Got It</button>
      <button onClick={() => clickMore(3)}>More</button> */}
    </>
  )
}

export default App
