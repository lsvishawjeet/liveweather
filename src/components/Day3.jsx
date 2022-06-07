import { usePreviousProps } from '@mui/utils'
import React from 'react'
import { WiDayCloudy } from "weather-icons-react";
import { WiCloudy } from "weather-icons-react";
import { WiDaySunny } from "weather-icons-react";
import { WiMoonWaningCrescent3 } from "weather-icons-react";
import { WiNightAltCloudy } from "weather-icons-react";


const Day3 = (props)=>{
    const date = new Date();
    const hour = date.getHours();

  if(props.hi <= 30){
    if((hour > 9 && hour <= 17)){
        return(<WiDaySunny size={70} color="#000" className="WiDaySunny" />)
    }
    else{
        return(<WiDaySunny size={70} color="#FFFFFF" className="WiDaySunny" />)
    }
  }
  else if(props.hi > 30 && props.hi < 70){
    if((hour > 9 && hour <= 17)){
        return(<WiDayCloudy size={70} color="#000" className="WiDaySunny" />)
    }
    else{
        return(<WiDayCloudy size={70} color="#FFFFFF" className="WiDaySunny" />)
    }
  }
  else if(props.hi >=70){
    if((hour > 9 && hour <= 17)){
        return(<WiCloudy size={70} color="#000" className="WiDaySunny" />)
    }
    else{
        return(<WiCloudy size={70} color="#FFFFFF" className="WiDaySunny" />)
    }
    
  }
}
export default Day3;