import React from "react";
import ReactDOM from "react-dom";
import Chithi from "./Chithi";
import "./index.css";
import Parkhai from "./Parkhai";


const favSong = "Parkhai";
/*const FavS  =() =>{
 if(favSeris === "Parkhai"){
    return <Parkhai/>;
 }else{
    return <Chithi></Chithi>;
 }
}*/


ReactDOM.render(
   <>
   <h1 className="heading_style">Sajan Raj Vaidya Song Collection</h1>
   {favSong === "Chithi"? <Chithi/>:<Parkhai/>}
 </>,
    document.getElementById('root')
);
