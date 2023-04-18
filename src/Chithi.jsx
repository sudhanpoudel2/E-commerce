import React from 'react';
import sdata from './Array';
import Card from './Card';
const Chithi = () =>{
return(
    <Card key={sdata[2].id}
    sname = {sdata[2].sname}
    imgsrc= {sdata[2].imgsrc}
    title= {sdata[2].title}
    link= {sdata[2].link}/> 
  
);
};

export default Chithi;
