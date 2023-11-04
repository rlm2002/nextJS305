"use client"
import CountButton from "./countButton/CountButton"
import SearchBar from "./searchBar/searchbar"

export default function Page() {
    return <div>
        <CountButton incrBy={1} btnColor={"pink"}/>
        <CountButton incrBy={2} btnColor={"lightskyblue"}/>
        <hr />
        <p><a href="https://github.com/rlm2002/nextJS305/tree/main">github repo for project</a></p>
        <hr />
        <SearchBar />
    </div>
  }