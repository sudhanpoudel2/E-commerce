import React from 'react';
import sdata from './Array';
import Card from './Card';
const Parkhai = () =>{
return(
    <Card key={sdata[1].id}
    sname = {sdata[1].sname}
    imgsrc= {sdata[1].imgsrc}
    title= {sdata[1].title}
    link= {sdata[1].link}/> 
  
);
};

export default Parkhai;