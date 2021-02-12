 import {GiConfirmed} from 'react-icons/gi'
 import data from './data'
import List from './list'
import {useState} from 'react'
function App() {
 const [people, setPeople]= useState(data)
 const attendedPpl=(id)=>{
setPeople(people.filter(item=>item.id !==id))
 }
  return (
    <div className='main-container'  >
  <h4>{people.length} Birthdays today</h4>
<List attendedPpl={attendedPpl} people={people}/>
<button onClick={()=>{
      setPeople([])
  }} className="btn">Clear all</button>
    </div>
  );
}

export default App;
