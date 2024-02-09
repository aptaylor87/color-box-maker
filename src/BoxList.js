import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

const BoxList = () => {
    const [boxes, setBoxes] = useState([])
    const deleteMe = (id) => {
        setBoxes(boxes.filter((box) => box.id !== id));
    }
    const addBox = (newBox) => {
        setBoxes(boxes => [...boxes, {...newBox, id: uuid()}])
    }
    return (
        <div> 
            <NewBoxForm addBox={addBox} />
            <div>
                {boxes.map(({ color, height, width, id}) => <Box key={id} id={id} width={width} height={height} color={color} deleteMe={deleteMe} />)}
            </div>
        </div>
    )


}

export default BoxList;