import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { WiDaySunny } from "weather-icons-react";
import { useEffect, useState } from "react";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import AirIcon from '@mui/icons-material/Air';
import CloudIcon from '@mui/icons-material/Cloud';
import WavesIcon from '@mui/icons-material/Waves';
import { useThemeWithoutDefault } from "@mui/system";
import { WiDayCloudy } from "weather-icons-react";
import { WiCloud } from "weather-icons-react";
import Cloud from "@mui/icons-material/Cloud";
import Hello from "./Hello";


const Const1 = () => {
  
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [city, setcity] = useState([]);
  const [temp, settemp] = useState([]);
  const [mintemp, setmintemp] = useState([]);
  const [maxtemp, setmaxtemp] = useState([]);
  const [wind, setwind] = useState([]);
  const [humidity, sethumidity] = useState([]);

  const [day1date, setday1date] = useState([]);
  const [day1temp, setday1temp] = useState([]);
  const [day1wind, setday1wind] = useState([]);
  const [day1cloud, setday1cloud] = useState([]);
  const [day1humidity, setday1humidity] = useState([]);

  const [day2date, setday2date] = useState([]);
  const [day2temp, setday2temp] = useState([]);
  const [day2wind, setday2wind] = useState([]);
  const [day2cloud, setday2cloud] = useState([]);
  const [day2humidity, setday2humidity] = useState([]);

  const [day3date, setday3date] = useState([]);
  const [day3temp, setday3temp] = useState([]);
  const [day3wind, setday3wind] = useState([]);
  const [day3cloud, setday3cloud] = useState([]);
  const [day3humidity, setday3humidity] = useState([]);

  const [day4date, setday4date] = useState([]);
  const [day4temp, setday4temp] = useState([]);
  const [day4wind, setday4wind] = useState([]);
  const [day4cloud, setday4cloud] = useState([]);
  const [day4humidity, setday4humidity] = useState([]);

  const [day5date, setday5date] = useState([]);
  const [day5temp, setday5temp] = useState([]);
  const [day5wind, setday5wind] = useState([]);
  const [day5cloud, setday5cloud] = useState([]);
  const [day5humidity, setday5humidity] = useState([]);


  
  const current = async () => {
    const weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=a1eef401294b38b4219848d5747e7b15&units=metric`);
    const weather2 = await weather.json();
    setcity(weather2.name);
    settemp(weather2.main.temp);
    setmintemp(weather2.main.temp_min);
    setmaxtemp(weather2.main.temp_max);
    setwind(weather2.wind.speed);
    sethumidity(weather2.main.humidity);
  };


  const fiveDay = async () =>{
    const moredays = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=a1eef401294b38b4219848d5747e7b15&units=metric`);
    const fiveDayWe = await moredays.json();
    setday1date(fiveDayWe.list[8].dt_txt);
    setday1temp(fiveDayWe.list[8].main.temp);
    setday1wind(fiveDayWe.list[8].wind.speed);
    setday1cloud(fiveDayWe.list[8].clouds.all);
    setday1humidity(fiveDayWe.list[8].main.humidity);

    setday2date(fiveDayWe.list[16].dt_txt);
    setday2temp(fiveDayWe.list[16].main.temp);
    setday2wind(fiveDayWe.list[16].wind.speed);
    setday2cloud(fiveDayWe.list[16].clouds.all);
    setday2humidity(fiveDayWe.list[16].main.humidity);

    setday3date(fiveDayWe.list[24].dt_txt);
    setday3temp(fiveDayWe.list[24].main.temp);
    setday3wind(fiveDayWe.list[24].wind.speed);
    setday3cloud(fiveDayWe.list[24].clouds.all);
    setday3humidity(fiveDayWe.list[24].main.humidity);

    setday4date(fiveDayWe.list[32].dt_txt);
    setday4temp(fiveDayWe.list[32].main.temp);
    setday4wind(fiveDayWe.list[32].wind.speed);
    setday4cloud(fiveDayWe.list[32].clouds.all);
    setday4humidity(fiveDayWe.list[32].main.humidity);

    setday5date(fiveDayWe.list[39].dt_txt);
    setday5temp(fiveDayWe.list[39].main.temp);
    setday5wind(fiveDayWe.list[39].wind.speed);
    setday5cloud(fiveDayWe.list[39].clouds.all);
    setday5humidity(fiveDayWe.list[39].main.humidity);

};

useEffect(()=>{
  current();
  fiveDay();
  document.title = `${city} Weather`;
});


  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
      console.log(`This is lat ${position.coords.latitude}`);
      console.log(`This is long ${position.coords.longitude}`);
    });
  }, [lat, long]);

    const date = new Date();
    const hour = date.getHours();
    let colour = [];
    if((hour >= 6 && hour <= 10)){
        colour.push("bgchangemorning");
    }
    else if((hour > 10 && hour <= 17)){
      colour.push("bgchangeday");
    }
    else if((hour > 18 && hour < 19)){
      colour.push("bgchangeevening");
    }
    else if((hour > 18 && hour < 19)){
      colour.push("bgchangeevening");
    }

  
  return (
    <>
    <div className={colour}>
       <div className="screen">
         <div className="box">
           <div className="main">
           <div className="cityname">
             <LocationOnIcon fontSize="medium" /> {city}
             </div>
             <div className="temperature"><span className="temp">{temp}</span> </div>
             <div className="minmax">
                 <ArrowUpwardIcon/>{maxtemp}&#8451;  &#160;<ArrowDownwardIcon/>{mintemp}&#8451;
             </div>
             <div className="iconweather">
                <Hello hi={day1cloud}/>
              
             </div>
             <div className="extrainfo">
               <span className="extra"><AirIcon/>&#160;{wind}m/s</span><span  className="extra"><WavesIcon/>&#160;{humidity} &#160;&#160;&#160;</span>
               </div>
             <div className="upcomingdays">
                 <div className="day1"><WiDaySunny size={60} color="#000" className="WiDaySunny" /><br/><span className="extra2"></span>{day1temp}<br/><span  className="extra2"></span><span className="extra2"><AirIcon/>&nbsp;{day1wind} m/s</span><span  className="extra2"><CloudIcon/>&nbsp;{day1cloud}</span><span  className="extra2"><WavesIcon/>&nbsp;{day1humidity}</span></div>
                 <div className="day1"><WiDaySunny size={60} color="#000" className="WiDaySunny" /><br/><span className="extra2"></span>{day2temp}<br/><span  className="extra2"></span><span className="extra2"><AirIcon/>&nbsp;{day2wind} m/s</span><span  className="extra2"><CloudIcon/>&nbsp;{day2cloud}</span><span  className="extra2"><WavesIcon/>&nbsp;{day2humidity}</span></div>
                 <div className="day1"><WiDaySunny size={60} color="#000" className="WiDaySunny" /><br/><span className="extra2"></span>{day3temp}<br/><span  className="extra2"></span><span className="extra2"><AirIcon/>&nbsp;{day3wind} m/s</span><span  className="extra2"><CloudIcon/>&nbsp;{day3cloud}</span><span  className="extra2"><WavesIcon/>&nbsp;{day3humidity}</span></div>
                 <div className="day1"><WiDaySunny size={60} color="#000" className="WiDaySunny" /><br/><span className="extra2"></span>{day4temp}<br/><span  className="extra2"></span><span className="extra2"><AirIcon/>&nbsp;{day4wind} m/s</span><span  className="extra2"><CloudIcon/>&nbsp;{day4cloud}</span><span  className="extra2"><WavesIcon/>&nbsp;{day4humidity}</span></div>
                 {/* <div className="day1"><WiDaySunny size={60} color="#000" className="WiDaySunny" /><br/><span className="extra2"></span>{day5temp}<br/><span  className="extra2"></span><span className="extra2"><AirIcon/>&nbsp;{day5wind} m/s</span><span  className="extra2"><CloudIcon/>&nbsp;{day5cloud}</span><span  className="extra2"><WavesIcon/>&nbsp;{day5humidity}</span></div> */}
             </div>
           </div>
         </div>
       </div>
       </div>
    </>
  );
};

// const Weathericons = ()=>{
//   if(day1cloud <= 30){
//     return(<WiDaySunny size={200} color="#000" className="WiDaySunny" />)
//   }
//   else if(day1cloud > 30 && day1cloud < 70){
//     return(<WiDayCloudy size={200} color="#000" className="WiDaySunny" />)
//   }
//   else if(day1cloud >=70){
//    return(<WiCloud size={200} color="#000" className="WiDaySunny" />)
//   }
// }
export default Const1;
