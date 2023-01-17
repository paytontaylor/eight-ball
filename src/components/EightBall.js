import "./EightBall.css"
import { useState } from "react"

function choice(arr) {
    const randomIdx = Math.floor(Math.random() * arr.length);
    return arr[randomIdx];
  }

export default function EightBall({ answers }){
    
    const [msg, setMsg] = useState('Think of a Question');
    const [color, setColor] = useState('black')
    

    const handleClick = () => {
        const { msg, color} = choice(answers)
        setMsg(msg)
        setColor(color)
    }

    return (
        <div
          className="EightBall"
          onClick={handleClick}
          style={{ backgroundColor: color }}
        >
          <b>{msg}</b>
        </div>
      );
}