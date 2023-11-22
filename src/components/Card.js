import React from "react"
import "../css/Card.css";

function Card({Skills}){
    console.log(Skills)
    return(
        <>
        
            <h2>{Skills.h}</h2>
            <h2>{Skills.p}</h2>
            <h2>{Skills.a}</h2>
            <h2>{Skills.b}</h2>
            <h2>{Skills.c}</h2>
            <h2>{Skills.d}</h2>

        
        </>
    )
}
export default Card