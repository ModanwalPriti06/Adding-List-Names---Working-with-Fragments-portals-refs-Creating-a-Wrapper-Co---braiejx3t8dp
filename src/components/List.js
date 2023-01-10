import React from 'react';
import ListItems from './ListItems';
//code here
 const List = ({listx}) =>{
   const numbers=listx;
   return(
    <>
    {numbers.map((i) =>
      <ListItems key={i.toString()}
                valuex={i.value} />
    )}
  </> 
    
  )
}

export default List;
