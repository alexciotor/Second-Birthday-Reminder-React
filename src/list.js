const List = ({people})=>{
    
return <main>
 {people.map(item=>{
     const {id,name,age,image} =item;
     return <article className='article' >
     <img className='image' src={image} alt=""/>
     <header>
     <p>{name}</p>
     <p>{age}</p>
     </header>
     </article>
    
 })}
  
</main>
}


export default List