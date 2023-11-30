import React, { useState, useEffect, useRef } from "react";
import "./Slider.css";
import { v4 as uuidv4 } from 'uuid';

export const Slider = ({ defaultValue = 50, minValue = 0, maxValue = 100, step }) => {
    const [value, setValue] = useState(defaultValue);
    const [trackWidth, setTrackWidth] = useState(10);
    const [startXTrack, setStartXTrack] = useState();
    const [sliderRange, setSliderRange] = useState(value);
    const [inputValue, setInputValue] = useState(value);
    const sliderRef = useRef(null);

    function handleSliderInput() {
        //Get range between max & min values
        const range = maxValue - minValue;
        //Get distance between value and min value
        const distance = sliderRef.current.value - minValue;

        const percentage = (distance / range) * 100;
        setSliderRange(percentage);
        setInputValue(sliderRef.current.value);
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
                    value={value}
                    onInput={handleSliderInput}
                    ref={sliderRef}
                    step={step} />
                <div
                    className="slider-thumb"
                    style={{ left: `calc(${sliderRange}% - 0.5em)` }}
                ></div>
                <div
                    className="sui-slider-track-progress"
                    style={{ width: `${sliderRange}%` }}
                ></div >
            </div>

        </>
    );
};
