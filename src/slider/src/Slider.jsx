import { useState, useEffect } from "react";
import "./Slider.css";
import { v4 as uuidv4 } from 'uuid';

export const Slider = ({ defaultValue=50, onClick, minValue=0, maxValue=100, onDrag, onChange }) => {
    const [value, setValue] = useState(defaultValue);
    const [trackWidth, setTrackWidth] = useState(10)
    const [startXTrack, setStartXTrack] = useState()

    const elID = uuidv4()

    useEffect(() => {
        const sliderEl = document.getElementById(elID);
        const rect = sliderEl.getBoundingClientRect();
        setStartXTrack(rect.left)
        setTrackWidth(rect.left + defaultValue)
        console.log(sliderEl.children)
        console.log(rect)
        window.addEventListener('mousemove', function(event) {
            var x = event.clientX;
            var y = event.clientY;
            // console.log('The mouse is at X: ' + x + ' and Y: ' + y);
          });
    }, [])

    const handleClick = (e) => {
        // console.log(typeof parseInt(e.target.value));
        if (onClick) onClick(e);
        setValue(parseInt(e.target.value));
        setTrackWidth(value + 12)
        // setTrackWidth((parseInt(e.target.value)-minValue)/(maxValue-minValue))
    };

    const handleDrag = (e) => {
        if (onDrag) onDrag(e)
        // setValue(parseInt(e.target.value))
    }

    const handleChange = (e) =>{
        if(onChange) onChange(e)
        setValue(parseInt(e.target.value))
        console.log('trackwidth: ' + trackWidth);
        // console.log(e.ClientX)
        setTrackWidth(value + 16)
        // console.log('value:' + value);
    }

    return (
        <>
            <div className="sui-slider" id={elID}>
                <div className="sui-slider-track-progress" style={{ width: trackWidth + 'px' }}></div>
                <input
                    className="sui-slider-input"
                    type="range"
                    min={minValue}
                    max={maxValue}
                    value={value}
                    onChange={handleChange}
                    onClick={handleClick}
                    onDrag={handleDrag} />
            </div>

        </>
    );
};
