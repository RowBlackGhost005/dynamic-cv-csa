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
                    <input type='text' value={tempData.companyName} name='companyName' onChange={handleChange}></input><br></br>
                    <input type='text' value={tempData.jobTitle} name='jobTitle' onChange={handleChange}></input><br></br>
                    <input type='text' value={tempData.duration} name='duration' onChange={handleChange}></input><br></br>
                    <textarea className='form-textarea' value={tempData.responsabilities} name='responsabilities' onChange={handleChange} cols={25} rows={5}></textarea><br></br>
                    <button className='btn-embeed-edit' onClick={handleConfirm}>Confirm</button>
                    <button className='btn-embeed-delete' onClick={handleCancel}>Cancel</button>
                </>
            ) : (
                <>
                    <p className='text-sub-head m-0 pt-1'>{`${companyName}`}</p>
                    <p className='m-0'><span className='text-italic'>{`${jobTitle}`} | {`${duration}`} </span></p>
                    <p>{`${responsabilities}`}</p>
                    <button className='btn-embeed-edit' onClick={handleEdit}>Edit</button>
                    <button className='btn-embeed-delete' onClick={handleDeletion}>Delete</button>
                </>
            )}
        </div>
    );
}

export default CVExperienceItem;