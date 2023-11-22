import React from "react"
import "../css/Card.css";

function Card({Skills}){
    console.log(Skills)
    return(
        <>
         <div className="lang hov">
            <h2>{Skills.h}</h2>
            <h4>{Skills.p}</h4>
            <h4>{Skills.a}</h4>
            <h4>{Skills.b}</h4>
            <h4>{Skills.c}</h4>
            <h4>{Skills.d}</h4>
            <h4>{Skills.e}</h4>
            <h4>{Skills.f}</h4>
            <h4>{Skills.m}</h4>
            <h4>{Skills.n}</h4>
            <h4>{Skills.o}</h4>
            <h4>{Skills.x}</h4>
            <h4>{Skills.y}</h4>
            <h4>{Skills.z}</h4>
            <h4>{Skills.w}</h4>

            </div>
        
        </>
    )
}
export default Card