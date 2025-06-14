import React from 'react';

import {useState} from 'react';

function CVForm({cvData , handleChange , addExperience , addEducation , saveCVData , resetCVData}){

    const [inputsErrors , setInputErrors] = React.useState({
        name: false,
        email: false,
        phone: false,
        address: false,
        degree: false,
        institution: false,
        yearCompletition: false,
        jobTitle: false,
        companyName: false,
        duration: false,
        responsabilities: false,
        skills: false
    });

    const handleBlurEmail = (event) => {
        if(!event.target.value.match("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")){
            setInputErrors({...inputsErrors , email: true});
        }else{
            setInputErrors({...inputsErrors , email: false});
        }
    }

    const handleBlurText = (event) => {
        if(event.target.value === ""){
            setInputErrors({...inputsErrors , [event.target.name]: true});
        }else{
            setInputErrors({...inputsErrors , [event.target.name]: false});
        }
    }

    const handleAddExperience = () => {

        if(!(inputsErrors.jobTitle && inputsErrors.companyName && inputsErrors.companyName && inputsErrors.duration && inputsErrors.responsabilities) &&
            (cvData.jobTitle !== "" && cvData.companyName !== "" && cvData.companyName !== "" && cvData.duration !== "" && cvData.responsabilities !== "")){

            addExperience();
        }else{
            alert("Cannot add a job experience with emtpy fields");
        }
    }

    const handleAddEducation = () => {
        if(cvData.institution !== "" && cvData.institution !== "" && cvData.yearCompletition !== ""){
            addEducation();
        }else{
            alert("Cannot add education with empty fields");
        }
    }

    return(
        <div id='cvFormContainer'>
            <div id='personalInformationSection'>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' placeholder='John Doe' name='name' value={cvData.name} onChange={handleChange} onBlur={handleBlurText}></input>
                    {inputsErrors.name && <p>Enter your name.</p>}
                </div>

                <div>
                    <label htmlFor='email'>Email:</label>
                    <input type='email' placeholder='yourmail@mail.com' name='email' value={cvData.email} onChange={handleChange} onBlur={handleBlurEmail}></input>
                    {inputsErrors.email && <p>Enter a valid email.</p>}
                </div>

                <div>
                    <label htmlFor='phoneNumber'>Phone:</label>
                    <input type='text' placeholder='+01 555 2354 523' name='phone' value={cvData.phone} onChange={handleChange} onBlur={handleBlurText}></input>
                    {inputsErrors.phone && <p>Enter your phone number.</p>}
                </div>

                <div>
                    <label htmlFor='address'>Address:</label>
                    <input type='text' placeholder='Santa Monica, LA. UU.EE.' name='address' value={cvData.address} onChange={handleChange} onBlur={handleBlurText}></input>
                    {inputsErrors.address && <p>Enter your address.</p>}
                </div>                
            </div>

            <hr></hr>

            <div id='educationInformationSection'>
                <div>
                    <label htmlFor='degree'>Degree:</label>
                    <input type='text' placeholder='Software Engineer' name='degree' value={cvData.degree} onChange={handleChange}></input>
                </div>

                <div>
                    <label htmlFor='institution'>Institution:</label>
                    <input type='text' placeholder='MIT' name='institution' value={cvData.institution} onChange={handleChange}></input>
                </div>

                <div>
                    <label htmlFor='yearCompletition'>Year completition:</label>
                    <input type='text' placeholder='2020' name='yearCompletition' value={cvData.yearCompletition} onChange={handleChange}></input>
                </div>

                <button onClick={handleAddEducation}>Add Education</button>
            </div>

            <hr></hr>

            <div id='experienceInformationSection'>
                <div>
                    <label htmlFor='jobTitle'>Job Title:</label>
                    <input type='text' placeholder='Software Engineer' name='jobTitle' value={cvData.jobTitle} onChange={handleChange}></input>
                </div>

                <div>
                    <label htmlFor='companyName'>Company Name:</label>
                    <input type='text' placeholder='Company Name' name='companyName' value={cvData.companyName} onChange={handleChange}></input>
                </div>

                <div>
                    <label htmlFor='duration'>Duration:</label>
                    <input type='text' placeholder='1 year 5 months' name='duration' value={cvData.duration} onChange={handleChange}></input>
                </div>

                <div>
                    <label htmlFor='responsabilities'>Responsabilities:</label>
                    <input type='text' placeholder='Develop the backend. . .' name='responsabilities' value={cvData.responsabilities} onChange={handleChange}></input>
                </div>

                <button onClick={handleAddExperience}>Add Experience</button>
            </div>

            <hr></hr>

            <div>
                <div>
                    <label htmlFor='skills'>Skills:</label>
                    <input type='text' placeholder='Communication' name='skills' value={cvData.skills} onChange={handleChange}></input>
                </div>
            </div>

            <div>
                <button onClick={saveCVData}>Save</button>
                <button onClick={resetCVData}>Reset</button>
            </div>
        </div>
    );
};

export default CVForm;