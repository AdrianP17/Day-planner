import { useEffect, useState } from "react"
import { getTimeUntilMidnight } from "../utils/TimeUtils";

function Timer() {
  const [timeLeft, setTimeLeft] = useState(getTimeUntilMidnight());

  useEffect(() => {
    const interval = setInterval(() => {
        setTimeLeft(getTimeUntilMidnight())
    }, 1000) // Actualizar cada segundo

    return () => clearInterval(interval)
  }, [])
  


    return (
    <div>
        <h1>Tiempo restante para acabar el dia</h1>
        <p>{timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds < 10 ? '0' + timeLeft.seconds : timeLeft.seconds }</p>
    </div>
  )
}
export default Timer