import React, {useState,useEffect} from "react";
import './DigitalClock.css';

const DigitalClock =()=>{

    const[time,setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(()=>{
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
        //test
    }, []) 
    
    
    useEffect(() => {
       
        const hours = time.getHours();
        const body = document.body;

        if (hours >= 14 && hours <= 21) {
          
            body.classList.add('backgroundB');
            body.classList.remove('backgroundA', 'backgroundC');
        } else if (hours >= 22 || hours < 6) {
         
            body.classList.add('backgroundC');
            body.classList.remove('backgroundA', 'backgroundB');
        } else {
          
            body.classList.add('backgroundA');
            body.classList.remove('backgroundC', 'backgroundB');
        }
    }, [time]);

    function formatTime(){
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >= 12 ? "PM":"AM";

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
    }

    function padZero(number){
        return (number < 10 ? "0" : "") + number
    }

    return(

        <div className="clock-container">
            <div className="clock">
                <span>
                    {formatTime()}
                </span>
            </div>
        
        </div>
    )

}

export default DigitalClock;