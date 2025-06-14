import React from 'react';

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
        <div className='px-2' id='cvFormContainer'>
            <div id='personalInformationSection'>
                <div className='form-container'>
                    <label className='form-label' htmlFor='name'>Name:</label>
                    <input className='from-input' type='text' placeholder='John Doe' name='name' value={cvData.name} onChange={handleChange} onBlur={handleBlurText}></input>
                    {inputsErrors.name && <p className='error-text'>Enter your name.</p>}
                </div>

                <div className='form-container'>
                    <label className='form-label' htmlFor='email'>Email:</label>
                    <input className='from-input' type='email' placeholder='yourmail@mail.com' name='email' value={cvData.email} onChange={handleChange} onBlur={handleBlurEmail}></input>
                    {inputsErrors.email && <p className='error-text'>Enter a valid email.</p>}
                </div>

                <div className='form-container'>
                    <label className='form-label' htmlFor='phoneNumber'>Phone:</label>
                    <input className='from-input' type='text' placeholder='+01 555 2354 523' name='phone' value={cvData.phone} onChange={handleChange} onBlur={handleBlurText}></input>
                    {inputsErrors.phone && <p className='error-text'>Enter your phone number.</p>}
                </div>

                <div className='form-container'>
                    <label className='form-label' htmlFor='address'>Address:</label>
                    <input className='from-input' type='text' placeholder='Santa Monica, LA. UU.EE.' name='address' value={cvData.address} onChange={handleChange} onBlur={handleBlurText}></input>
                    {inputsErrors.address && <p className='error-text'>Enter your address.</p>}
                </div>                
            </div>

            <hr></hr>

            <div id='educationInformationSection'>
                <div className='form-container'>
                    <label className='form-label' htmlFor='degree'>Degree:</label>
                    <input className='from-input' type='text' placeholder='Software Engineer' name='degree' value={cvData.degree} onChange={handleChange}></input>
                </div>

                <div className='form-container'>
                    <label className='form-label' htmlFor='institution'>Institution:</label>
                    <input className='from-input' type='text' placeholder='MIT' name='institution' value={cvData.institution} onChange={handleChange}></input>
                </div>

                <div className='form-container'>
                    <label className='form-label' htmlFor='yearCompletition'>Year completition:</label>
                    <input className='from-input' type='text' placeholder='2020' name='yearCompletition' value={cvData.yearCompletition} onChange={handleChange}></input>
                </div>

                <button className='btn-add text-light' onClick={handleAddEducation}>Add Education</button>
            </div>

            <hr></hr>

            <div id='experienceInformationSection'>
                <div className='form-container'>
                    <label className='form-label' htmlFor='jobTitle'>Job Title:</label>
                    <input className='from-input' type='text' placeholder='Software Engineer' name='jobTitle' value={cvData.jobTitle} onChange={handleChange}></input>
                </div>

                <div className='form-container'>
                    <label className='form-label' htmlFor='companyName'>Company Name:</label>
                    <input className='from-input' type='text' placeholder='Company Name' name='companyName' value={cvData.companyName} onChange={handleChange}></input>
                </div>

                <div className='form-container'>
                    <label className='form-label' htmlFor='duration'>Duration:</label>
                    <input className='from-input' type='text' placeholder='1 year 5 months' name='duration' value={cvData.duration} onChange={handleChange}></input>
                </div>

                <div className='form-container'>
                    <label className='form-label' htmlFor='responsabilities'>Responsabilities:</label>
                    <input className='from-input' type='text' placeholder='Develop the backend. . .' name='responsabilities' value={cvData.responsabilities} onChange={handleChange}></input>
                </div>

                <button className='btn-add text-light' onClick={handleAddExperience}>Add Experience</button>
            </div>

            <hr></hr>

            <div>
                <div className='form-container'>
                    <label className='form-label' htmlFor='skills'>Skills:</label>
                    <textarea className='form-textarea' placeholder='Communication' name='skills' value={cvData.skills} onChange={handleChange} cols={10} rows={10}></textarea>
                </div>
                    
            </div>

            <div className='flex-row '>
                <button className='btn-confirm text-light mx-auto' onClick={saveCVData}>Save</button>
                <button className='btn-cancel text-light mx-auto' onClick={resetCVData}>Reset</button>
            </div>
        </div>
    );
};

export default CVForm;