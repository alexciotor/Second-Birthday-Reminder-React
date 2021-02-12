 import {GiConfirmed} from 'react-icons/gi'
 import React, {useState} from 'react'
const List = ({attendedPpl,item})=>{
const [attend, setAttend] = useState(false)
const[refuse,setRefuse] = useState(true)
     const {id,name,age,image} =item;
return <main>
 

       <article key={id} className='article' >
     <img className='image' src={image} alt={name}/>
     <header className='header' >
     <h4>{name}</h4>
     <p>{age} years</p>
     <div className="buttons">
     <button onClick={()=>{
         setAttend(!attend)
         setRefuse(!refuse)
     }} className="btns">{attend? <span className='span-attend' > <GiConfirmed/></span> : 'Attend'}</button>
      { refuse &&   <button onClick={()=>{
        attendedPpl(id)
    }} className="btns">refuse</button>}
     </div>
     </header>
     </article>
    

  
</main>
}


export default List