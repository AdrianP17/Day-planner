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
    <div className="rounded-xl p-6 w-fit bg-[#9AD09B] mb-2 content-center">
        <p className="text-sm">Timer</p>
        <p className="mb-2 text-lg font-medium">Siguiente día</p>
        <div className="flex gap-4 items-center justify-center text-5xl font-light text-nowrap">
        <p className="font-semibold">{timeLeft.hours < 10 ? `0${timeLeft.hours}` : timeLeft.hours} :</p>
        <p className="font-semibold">{timeLeft.minutes < 10 ? `0${timeLeft.minutes}` : timeLeft.minutes} :</p>
        <p className="font-semibold">{timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds}</p>
        </div>
    </div>
  )
}
export default Timer