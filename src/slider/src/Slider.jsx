import React, { useState, useEffect, useRef } from "react";
import "./Slider.css";
import { v4 as uuidv4 } from 'uuid';

export const Slider = ({ defaultValue = 50, minValue = 0, maxValue = 100, step, handleChange }) => {
    // const [value, setValue] = useState(defaultValue);
    const [sliderRange, setSliderRange] = useState(defaultValue);
    const [inputValue, setInputValue] = useState(defaultValue);
    const sliderRef = useRef(null);

    function handleSliderInput() {
        //Get range between max & min values
        const range = maxValue - minValue;
        //Get distance between value and min value
        const distance = sliderRef.current.value - minValue;

        let percentage = (distance / range) * 100;
        //Conditional to handle thumb overflowing from track border
        if(percentage < 3.5){
            percentage = 3.5
        } else if(percentage > 98){
            percentage = 98
        }
        setSliderRange(percentage);
        setInputValue(sliderRef.current.value);
        if(handleChange){
            handleChange(sliderRef.current.value)
        }
    }

    useEffect(() => {
        handleSliderInput();
    }, [sliderRef]);

    const elID = uuidv4();

    return (
        <>
            <div className="sui-slider" id={elID}>
                {/* <div className="sui-slider-track-progress" style={{ width: trackWidth + 'px' }}></div> */}
                <input
                    className="sui-slider-input"
                    type="range"
                    min={minValue}
                    max={maxValue}
                    value={inputValue}
                    onInput={handleSliderInput}
                    ref={sliderRef}
                    step={step} />
                <div
                    className="slider-thumb"
                    style={{ left: `calc(${sliderRange}% - 0.75em)` }}
                ></div>
                <div
                    className="sui-slider-track-progress"
                    style={{ width: `calc(${sliderRange}% - 0.5em)` }}
                ></div >
            </div>

        </>
    );
};
