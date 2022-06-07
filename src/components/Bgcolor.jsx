import React from "react";
import '../App.css';

const Bgcolor=()=>{
    const date = new Date();
    const hour = date.getHours();
    let color = [];
    if(hour <= 18){
        color.push('bgchange1');
    }
    else if(hour >= 19){
        color.push('bgchange');
    }

    return(
        <>
        </>
    )
}
export default Bgcolor;