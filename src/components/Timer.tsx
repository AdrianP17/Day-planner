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
    <div className="text-center rounded-xl p-4 w-fit mx-auto bg-blue-50 mb-2">
        <h1 className="text-xl mb-2">Tiempo restante para acabar el dia ⌚</h1>
        <div className="flex gap-4 items-center justify-center">
        <p className="text-4xl font-semibold">{timeLeft.hours}<span className="text-2xl">h</span> </p>
        <p className="text-4xl font-semibold">{timeLeft.minutes}<span className="text-2xl">m</span> </p>
        <p className="text-4xl font-semibold">{timeLeft.seconds}<span className="text-2xl">s</span> </p>
        </div>
    </div>
  )
}
export default Timer