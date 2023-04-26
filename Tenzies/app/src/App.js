import React from 'react';
import './App.css';
import Die from './components/die';
import {nanoid} from 'nanoid';
import Confetti from "react-confetti"
function App() {

  const [dice, setDice] = React.useState(allNewDice())
  const [tenzies,setTenzies] = React.useState(false)

  React.useEffect(()=>{
    const sameIsHeld = dice.every(die => die.isHeld)
    const sameValue = dice.every(die => die.value === dice[0].value)
    if(sameIsHeld && sameValue){
      setTenzies(true)
    }
  },[dice])

  function generateDiceObject(){
    return {
        value : Math.ceil(Math.random() * 6),
        isHeld : false,
        id : nanoid()
    }
  }

  function allNewDice(){
    const newDice = []
    for(let i = 0; i < 10; i++){
      newDice.push(generateDiceObject())
    }
    return newDice
  }

  function holdDice(id){
    setDice(prevDice => prevDice.map(dis=>{
      return dis.id===id ?
      {...dis , isHeld: !dis.isHeld}
      :dis
    }))
  }
  // here prop holdDice = {()=> holdDice(die.id)} is doing jo ke maping ke wqt e die.id pass ho rha hai
  const DiceMap = dice.map(die =>(<Die key={die.id} value={die.value} isHeld={die.isHeld} holdDice={()=> holdDice(die.id)}/>))

  function rollDice(){
    if(!tenzies){
      setDice(prevDice =>prevDice.map(die => {
        return die.isHeld ?
        die : 
        generateDiceObject()
      }))
    }
    else{
      setTenzies(false)
      setDice(allNewDice())
    }
    
  }
  return (
    <main className='main--section'>
      {tenzies && <Confetti />}
      <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className='die--container'>
        {DiceMap}
      </div>
      <button className="roll-dice" onClick={rollDice}>
        {tenzies ? "Play Again" : "Roll"}
        </button>
      
    </main>
  );
}

export default App;
