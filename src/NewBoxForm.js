import React, { useState } from "react";

const NewBoxForm = ({ addBox }) => {
    const INITIAL_STATE = {
        width: '',
        height: '',
        color: ''
    }
    const [formData, setFormData] = useState(INITIAL_STATE)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addBox({...formData});
        setFormData(INITIAL_STATE)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="Width">Width:</label>
            <input
                id="width"
                type="text"
                name="width"
                placeholder="Width in pixels"
                value={formData.width}
                onChange={handleChange}
            />
            <label htmlFor="Height">Height:</label>
            <input
                id="height"
                type="text"
                name="height"
                placeholder="Height in pixels"
                value={formData.height}
                onChange={handleChange}
            />
            <label htmlFor="Color">Coloru:</label>
            <input
                id="color"
                type="text"
                name="color"
                placeholder=""
                value={formData.color}
                onChange={handleChange}
            />
            <button>Add Box</button>
        </form>
    )


}

export default NewBoxForm;