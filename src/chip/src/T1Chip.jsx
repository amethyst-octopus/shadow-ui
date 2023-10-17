import { useState, useEffect } from 'react';
import './T1Chip.css';

export const T1Chip = ({label, onSelect, initialState = false, children, style}) => {

    const [selected, setSelected] = useState(initialState);

    const handleClick = () => {
        setSelected(!selected);
        onSelect();
    }

    useEffect(() => {
        setSelected(initialState);
    }, [initialState])

    return (
        <div 
            role="checkbox" 
            className={ selected ? 't1-chip selected' : 't1-chip' }
            style={style}
            onClick={handleClick}>
            <div class="t1-chip-icon">
                {children}
            </div>
            <div class="t1-chip-label-container">
                {label}
            </div>
        </div>
    )
}
