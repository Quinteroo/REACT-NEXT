import { useLocalTimer } from "../../../hooks/useLocalTimer/useLocalTimer.jsx"
import "./Timer.css"

const Timer = () => {

  //console.log("renderizado TIMER");
  const { time } = useLocalTimer()

  return (
    <div><p>{time.toLocaleTimeString()}</p></div>
  )
}

export default Timer