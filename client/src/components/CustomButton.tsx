import React from 'react'
import state from '../store';
import { useSnapshot } from 'valtio';

interface CustomButtonProps {
    type: string;
    title: string;
    handleClick: () => void;
    customStyles: string;
}

const CustomButton = ({title, customStyles, handleClick, type}: CustomButtonProps) => {

    const snap = useSnapshot(state)

    function generateStyle(type: string) {
        if(type === "filled") {
            return {
                backgroundColor: snap.color,
                color: "#FFF"
            }
        }
    }


    return (
    <button className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`} style={generateStyle(type)} onClick={handleClick}>
        {title}
    </button>
    )
}

export default CustomButton