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
        return(<WiDaySunny size={55} color="#000" className="WiDaySunny3" />)
    }
    else{
        return(<WiDaySunny size={55} color="#FFFFFF" className="WiDaySunny3" />)
    }
  }
  else if(props.hi > 30 && props.hi < 70){
    if((hour > 9 && hour <= 17)){
        return(<WiDayCloudy size={55} color="#000" className="WiDaySunny3" />)
    }
    else{
        return(<WiDayCloudy size={55} color="#FFFFFF" className="WiDaySunny3" />)
    }
  }
  else if(props.hi >=70){
    if((hour > 9 && hour <= 17)){
        return(<WiCloudy size={55} color="#000" className="WiDaySunny3" />)
    }
    else{
        return(<WiCloudy size={55} color="#FFFFFF" className="WiDaySunny3" />)
    }
    
  }
}
export default Day3;