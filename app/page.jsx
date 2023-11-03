"use client"
import CountButton from "./CountButton"

export default function Page() {
    return <div>
        <CountButton incr={1}/>
        <CountButton incr={5}/>
    </div>
  }