import React, { useState, useEffect, useRef } from "react";
import "./Slider.css";
import { v4 as uuidv4 } from 'uuid';

export const Slider = ({ defaultValue = 50, minValue = 0, maxValue = 100, step, handleChange }) => {
    const [sliderRange, setSliderRange] = useState(defaultValue);
    const [inputValue, setInputValue] = useState(defaultValue);
    const sliderRef = useRef(null);

    function handleSliderInput() {
        // Get range between max & min values
        const range = maxValue - minValue;
        // Get distance between value and min value
        const distance = sliderRef.current.value - minValue;

        let percentage = (distance / range) * 100;
        // Conditional to handle thumb overflowing from track border
        if (percentage < 2.9) {
            percentage = 2.9;
        } else if (percentage > 99.4) {
            percentage = 99.4;
        }
        setSliderRange(percentage);
        setInputValue(sliderRef.current.value);
        console.log(sliderRange)
        if (handleChange) {
            handleChange(sliderRef.current.value);
        }
    }

    useEffect(() => {
        handleSliderInput();
    }, [sliderRef]);

    const elID = uuidv4();

    return (
        <>
            <div className="sui-slider" id={elID}>
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
                {sliderRange > 2.9 ?
                    <div
                        className="sui-slider-track-progress"
                        style={{ width: `calc(${sliderRange}% - 0.5em)` }}
                    ></div >
                    : null}
            </div>

        </>
    );
};
