import React from "react";
import "./Box.css";


function Box({ color, height, width, id, deleteMe }) {
    const handleDelete = () => {
        deleteMe(id)
    }
    return (
        <>
        <div className="Box" id={id} style={{ backgroundColor: color, height: height + 'px', width: width + 'px' }}>
        
        </div>
        <button onClick={handleDelete}>X</button>
        </>
    )
}

export default Box;