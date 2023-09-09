import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './todo'
import Actor from './Actor'
import Singer from './Singer'

function App() {
  const actors = ['Sakib', 'Ferdous', 'Nisho', 'Salman shah'];
  const singers =[
    {id: 1, name: 'Dr. Mahafuzer Rahman', age: 67},
    {id: 2, name: 'Dr. Mahafuzer Rahman', age: 67},
    {id: 3, name: 'Dr. Mahafuzer Rahman', age: 67}
  ]
  return (
    <>
      <h1>Vite + React</h1>
      <Actor name={"Bappa Raj"}></Actor>
      {
        actors.map(actor => <Actor name={actor}></Actor>)
      }

      {
        singers.map(singer => <Singer singer={singer}></Singer>)
      }

      {/* <Todo task="heading three" isDone={true}></Todo>
      <Todo task="Learn html" isDone={true}></Todo>
      <Todo task="Learn react" isDone={false}></Todo> */}
      {/* <Device name="laptop" price="450"></Device>
      <Device name="mobile" price="60"></Device>
      <Person></Person>
      <Student grade="5" score="890"></Student>
      <Student grade="7" score="780"></Student>
      <Student></Student>
      <Developer></Developer> */}
    </>
  )
}
function Device(props){
  //console.log(props);
  return <h2>This device: {props.name} {props.price}</h2>
}
function Person(){
  const age = 25;
  const day = 10;
  const person = {name: 'salini', age: 12};
  return <h3>I am {person.name} my age {age + day}</h3>
}
const {grade, score} = {grade: "7", score: 780};
function Student({grade = 0, score = 0}){
  return(
    <div className='student'>
      <h3>This is student</h3>
      <p>point: {grade}</p>
      <p>score: {score}</p>
    </div>
  )
}
function Developer(){
  const developerStyles = {
    margin: '20px',
    padding: '10px',
    border: '2px solid purple',
    borderRadius: '20px'
  }
  return(
    <div style={developerStyles}>
      <h3>Develop Website</h3>
    <p>Coding:</p>
    </div>
  )
}
export default App
