 import {GiConfirmed} from 'react-icons/gi'
 import React, {useState} from 'react'
const List = ({attendedPpl,people})=>{
const [attend, setAttend] = useState(false)

return <main>
 {people.map((item,index)=>{
     const {id,name,age,image} =item;
     return <article key={index} className='article' >
     <img className='image' src={image} alt={name}/>
     <header className='header' >
     <h4>{name}</h4>
     <p>{age} years</p>
     <div className="buttons">
         <button onClick={()=>{
        attendedPpl(id)
    }} className="btns">refuse</button>
     </div>
     </header>
     </article>
    
 })}
  
</main>
}


export default List