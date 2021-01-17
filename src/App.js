 import data from './data'
import List from './list'
import {useState} from 'react'
function App() {
 const [people, setPeople]= useState(data)
  return (
    <div className='main-container'  >
  <h4>{people.length} Birthdays today</h4>
<List people={people}/>
<button onClick={()=>{
      setPeople([])
  }} className="btn">Clear all</button>
    </div>
  );
}

export default App;
