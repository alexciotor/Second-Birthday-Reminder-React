const List = ({people})=>{
    
return <main>
 {people.map((item,index)=>{
     const {id,name,age,image} =item;
     return <article key={index} className='article' >
     <img className='image' src={image} alt={name}/>
     <header>
     <h4>{name}</h4>
     <p>{age} years</p>
     </header>
     </article>
    
 })}
  
</main>
}


export default List