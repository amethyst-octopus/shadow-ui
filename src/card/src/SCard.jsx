import React, {useState, useEffect} from "react";
import { startingHexColor, colorToShadows } from "../../utils";

export default function Card({bgColor=startingHexColor(), media, text}){
    const [backgroundColor, setBackgroundColor] = useState(bgColor)
    const [shadows, setShadows] = useState({})

    useEffect(() =>{
        setShadows(colorToShadows(backgroundColor))
    }, [backgroundColor])

    /**will need to update these number to be more dynamic */
    let style = `border-radius: 50px;
    background: ${backgroundColor};
    box-shadow:  18px 18px 36px ${shadows.darkShadow},
                 -18px -18px 36px ${shadows.lightShadow};`

    return (
        <div style={style}>
            <img src={media}></img>
            <p>{text}</p>
        </div>
    )
}

