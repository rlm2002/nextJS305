import {useState, useEffect} from "react"
import "./btnStyles.css"

export default function CountButton(props) {

    let [count, setCount] = useState(0)

    function handleClick() {
        setCount(count + props.incrBy)
    }
    function rollOverCount() {
        if (count > 10) {
            setCount(0)
        }
    }
    useEffect(rollOverCount, [count])
    
    const btnStyles = {
        background: props.btnColor,
        fontSize: "1.5em"
    }

    return (
        <div>
            <button onClick={handleClick} style={btnStyles}>+{props.incrBy}</button>
            <div>{count}</div>
        </div>
    )
    
  }