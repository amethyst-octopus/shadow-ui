import { useState, useEffect } from 'react';
import './Switch.css'


export const T1Switch = ({ 
  inputProps,
  indicatorProps,
  containerProps,
  handleOnClick,
  checked
 }) => {

    const [isChecked,  setChecked] = useState(Boolean(checked))

    useEffect(() => {
      setChecked(checked);
    }, [checked])


    const _handleOnClick = () => {
      setChecked(!isChecked);
      if (handleOnClick) {
        handleOnClick();  
      }
    }

    return (
      <div className="switch" {...containerProps} onClick={_handleOnClick}>
        <input className="switch-state" type="checkbox" {...inputProps} checked={isChecked}/>
        <div className="indicator" {...indicatorProps}></div>
      </div>
    )
}
