import React from 'react';
import {useState} from 'react';

function CVEducationItem ({id, degree , yearCompletition , institution , updateEducation , deleteEducation , editingId , setEditingId}){

    const isEditing = editingId === id;

    const [tempData , setTempData] = useState({id: id , degree: degree , yearCompletition: yearCompletition , institution: institution});

    const handleChange = (event) => {
        setTempData({...tempData , [event.target.name]: event.target.value});
    };

    const handleEdit = (event) => {
        setEditingId(id);
    };

    const handleDeletion = () => {
        deleteEducation(id);
    };

    const handleConfirm = () => {
        updateEducation(id , tempData);
        setEditingId(-1);
    };

    const handleCancel = () => {
        setTempData({...tempData , degree: degree , yearCompletition: yearCompletition , institution: institution});
        setEditingId(-1);
    };

    return(
        <div>
            {isEditing ? (
                <>
                    <input type='text' value={tempData.degree} name='degree' onChange={handleChange}></input>
                    <input type='text' value={tempData.yearCompletition} name='yearCompletition' onChange={handleChange}></input>
                    <input type='text' value={tempData.institution} name='institution' onChange={handleChange}></input>
                    <button onClick={handleConfirm}>Confirm</button>
                    <button onClick={handleCancel}>Cancel</button>
                </>
            ) : ( <>
                <p><span>{`${degree}`}</span> - <span>{`${yearCompletition}`}</span></p>
                <p>{`${institution}`}</p>

                <button onClick={handleEdit}>Edit</button>
                <button onClick={handleDeletion}>Delete</button>
            </>
            )}
        </div>
    );
};

export default CVEducationItem;