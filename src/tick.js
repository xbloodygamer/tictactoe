import React from "react";

function tick(){
    const element=(
        <div>
            <h1>Heure locale</h1>
            <h2>Il est actuellement {new Date().toLocaleTimeString()}</h2>
        </div>
    );
    return element;    
}


export default tick;