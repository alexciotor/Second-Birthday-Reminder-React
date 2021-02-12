
 import data from './data'
import List from './list'
import {useState, useEffect} from 'react'
function App() {
  const [btn, setBtn]= useState(false)
 const [people, setPeople]= useState(data)
 const attendedPpl=(id)=>{
setPeople(people.filter(item=>item.id !==id))
 }

 useEffect(()=>{
    if(people.length ===0){
   setBtn(true)
   
 }
 else{
   setBtn(false)
 }
 },[people.length])
  return (
    <div className='main-container'  >
  <h4>{people.length} Birthdays today</h4>
  <div className="list">
  {people.map(item=>{
    return <List attendedPpl={attendedPpl} item={item}/>
  })}

</div>
<button onClick={()=>{
      setPeople([])
  }} className="btn">Clear all</button>
  {btn && <button onClick={()=>{
      setPeople([])
  }} className="btn" onClick={()=>{
    setPeople(data)
  }}>think it through</button>}
    </div>
  );
}

export default App;
