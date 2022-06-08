import { usePreviousProps } from '@mui/utils'
import React from 'react'
import { WiDayCloudy } from "weather-icons-react";
import { WiCloudy } from "weather-icons-react";
import { WiCloud } from "weather-icons-react";
import { WiDaySunny } from "weather-icons-react";
import { WiMoonWaningCrescent3 } from "weather-icons-react";
import { WiNightAltCloudy } from "weather-icons-react";


const Hello = (props)=>{
    const date = new Date();
    const hour = date.getHours();

  if(props.hi <= 30){
    if(hour >= 5 && hour <= 9){
        return(<WiDaySunny size={200} color="#FFFFFF" className="WiDaySunny" />)
    }
    else if((hour > 9 && hour <= 17)){
        return(<WiDaySunny size={200} color="#000" className="WiDaySunny" />)
    }
    else{
        return(<WiMoonWaningCrescent3 size={200} color="#FFFFFF" className="WiDaySunny2" />)
    }
  }
  else if(props.hi > 30 && props.hi < 70){
    if(hour >= 5 && hour <= 9){
      return(<WiDayCloudy size={200} color="#FFFFFF" className="WiDaySunny" />)
    }
    else if(hour >= 9 && hour < 17){
        return(<WiDayCloudy size={200} color="#000" className="WiDaySunny" />)
    }
    else{
        return(<WiNightAltCloudy size={200} color="#FFFFFF" className="WiDaySunny" />)
    }
  }
  else if(props.hi >=70){
    if(hour >= 5 && hour < 9){
        return(<WiCloudy size={200} color="#FFFFFF" className="WiDaySunny" />)
    }
    else if(hour >= 9 && hour < 17){
      return(<WiCloudy size={200} color="#000" className="WiDaySunny" />)
    }
    else{
        return(<WiCloud size={200} color="#FFFFFF" className="WiDaySunny" />)
    }
  }
}
export default Hello;