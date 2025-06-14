import React from 'react';
import {useState} from 'react';

function CVExperienceItem({id , companyName , jobTitle , duration , responsabilities , updateExperience , deleteExperience , editingId , setEditingId}){

    const isEditing = editingId === id;

    const [tempData , setTempData] = useState({
        id: id, 
        companyName: companyName,
        jobTitle: jobTitle,
        duration: duration,
        responsabilities: responsabilities
    });

    const handleChange = (event) => {
        setTempData({...tempData , [event.target.name]: event.target.value});
    };

    const handleEdit = (event) => {
        setEditingId(id);
    };

    const handleDeletion = (event) => {
        deleteExperience(id);
    };

    const handleConfirm = (event) => {
        updateExperience(id , tempData);
        setEditingId(-1);
    };

    const handleCancel = (event) => {
        setTempData({...tempData,         
        companyName: companyName,
        jobTitle: jobTitle,
        duration: duration,
        responsabilities: responsabilities});
        setEditingId(-1);
    };



    return(
        <div>
            {isEditing ? (
                <>
                    <input type='text' value={tempData.companyName} name='companyName' onChange={handleChange}></input>
                    <input type='text' value={tempData.jobTitle} name='jobTitle' onChange={handleChange}></input>
                    <input type='text' value={tempData.duration} name='duration' onChange={handleChange}></input>
                    <input type='text' value={tempData.responsabilities} name='responsabilities' onChange={handleChange}></input>
                    <button onClick={handleConfirm}>Confirm</button>
                    <button onClick={handleCancel}>Cancel</button>
                </>
            ) : (
                <>
                    <p>{`${companyName}`}</p>
                    <p><span>{`${jobTitle}`} | {`${duration}`} </span></p>
                    <p>{`${responsabilities}`}</p>
                    <button onClick={handleEdit}>Edit</button>
                    <button onClick={handleDeletion}>Delete</button>
                </>
            )}
        </div>
    );
}

export default CVExperienceItem;