import { NextComponentType } from "next";
import { useState } from "react";

const Hello = () => {

    const [sayWorld, setSayWorld] = useState(false)

    const doWorld = () => {
        setSayWorld(true)
    }


    return (
        <div>
            <h1>Hello {
                    sayWorld ?? <span>World</span>
                }</h1>
        </div>
    )
}

export default Hello