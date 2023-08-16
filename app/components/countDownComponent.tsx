//@ts-nocheck
"use client"
import { useCoutDown } from "../hooks/countDown";
import DateTimeDisplay from "./dateTimeDisplay";

const ExpiredNotice = () => {
    return (
      <div className="expired-notice">
        <span>Expired!!!</span>
        <p>Please select a future date and time.</p>
      </div>
    );
  };
  
  const ShowCounter = ({ days, hours, minutes, seconds }) => {
    return (
      <div className="show-counter flex justify-evenly w-1/2 mx-auto mt-3">
          <DateTimeDisplay value={days} type={'Days'} isDanger={days <= 3} />
          :
          <DateTimeDisplay value={hours} type={'Hours'} isDanger={false} />
          :
          <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
          :
          <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} />
     </div>
    );
  };
  

    const CountDownTimer = ({targetDate}) => {
        const [days, hours, minutes, seconds] = useCoutDown(targetDate);

        if (days + hours + minutes + seconds <= 0){
            return <ExpiredNotice/>;
        }else {
            return(
                <ShowCounter
                    days={days}
                    hours={hours}
                    minutes={minutes}
                    seconds={seconds}
                />
            )
        }
    }

    export default CountDownTimer;