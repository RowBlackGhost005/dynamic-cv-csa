import React from 'react';

import CVForm from './CVForm';
import CVPreview from './CVPreview';

function DynamicCV(){

    /* Manages the current data that sits in the form */
    const [cvData , setCvData] = React.useState(() => {

        const cvData = {
            name: "",
            email: "",
            phone: "",
            address: "",
            degree: "",
            institution: "",
            yearCompletition: "",
            jobTitle: "",
            companyName: "",
            duration: "",
            responsabilities: "",
            skills: ""
        }

        const savedData = localStorage.getItem("CVData");

        return savedData ? JSON.parse(savedData) : cvData;

    });

    /* 
        Manages the array of 'experience' items that sits in the preview once the user appends it.
        It attemps to load the data from the local storage if there was a session before.
    */
    const [experienceData , setExperienceData] = React.useState( () => {
        const savedData = localStorage.getItem("CVExperience");
        return savedData ? JSON.parse(savedData) : [];
    });

    /* 
        Manages the array of 'education' items that sits in the preview once the user appends it.
        It attemps to load the data from the local storage if there was a session before
    */
    const [educationData , setEducationData] = React.useState(() => {
        const saveData = localStorage.getItem("CVEducation");
        return saveData ? JSON.parse(saveData) : [];
    });

    /* Manages the counter of experience items created to use as keys for react optimized re-render*/
    const [experienceId , setExperienceId] = React.useState(() => {
        const saveData = localStorage.getItem("CVExperienceId");
        return saveData ? JSON.parse(saveData) : 1;
    });

    /* Manages the counter of education items created to use as keys for react optimized re-render*/
    const [educationId , setEducationId] = React.useState(() => {
        const saveData = localStorage.getItem("CVEducationId");
        return saveData ? JSON.parse(saveData) : 1;
    });
    
    /* Manages which education item is being edited based on its ID*/
    const [educationEditingId , setEducationEditingId] = React.useState(null);

    /* Manages which experience item is being edited based on its ID*/
    const [experienceEditingId , setExperienceEditingId] = React.useState(null);

    /* Gets the current data in experience and appends it into the experience array*/
    const handleAddExperience = () => {
        let experience = {
            id: experienceId,
            jobTitle : cvData.jobTitle,
            companyName: cvData.companyName,
            duration: cvData.duration,
            responsabilities: cvData.responsabilities
        }
        
        setExperienceId((currentId) => currentId + 1);

        setCvData({...cvData , jobTitle: "" , companyName: "" , duration: "" , responsabilities: ""});

        setExperienceData([...experienceData , experience]);
    };

    /* Gets the current data in education and appends it into the education array*/
    const handleAddEducation = () => {
        let education = {
            id: educationId,
            degree: cvData.degree,
            institution: cvData.institution,
            yearCompletition : cvData.yearCompletition
        }

        setEducationId((currentId) => currentId +1 );

        setCvData({...cvData , degree: "" , institution: "" , yearCompletition: ""});

        setEducationData([...educationData , education])
    }

    /* Manages real time modification of each field*/
    const handleCVFormChange = (event) => {
        setCvData({...cvData , [event.target.name]: event.target.value })
    };

    /* Updates the data of the edited education item based on its id*/
    const updateEducation = (id , data) => {
        setEducationData((prev) => 
            prev.map((education) =>
                education.id === id ? {...education , ...data} : education
            )
        );
    };

    /* Deletes the education data based on its id*/
    const deleteEducation = (id) => {
        setEducationData((prev) =>
            prev.filter(education => education.id !== id)
        );
    };

    /* Updates the data of the edited experience based on its id*/
    const updateExperience = (id , data) => {
        setExperienceData((prev) =>
            prev.map((experience) =>
                experience.id === id ? {...experience , ...data} : experience
            )
        );
    };

    /* Deletes the education experience based on its id*/
    const deleteExperience = (id) => {
        setExperienceData((prev) => 
            prev.filter(experience => experience.id !== id)
        );
    }

    /* Stores in local storage all values needed for this dynamic cv to function when returning into the page*/
    const saveCVData = () => {
        localStorage.setItem("CVData" , JSON.stringify(cvData));
        localStorage.setItem("CVEducation" , JSON.stringify(educationData));
        localStorage.setItem("CVEducationId" , JSON.stringify(educationId));
        localStorage.setItem("CVExperience" , JSON.stringify(experienceData));
        localStorage.setItem("CVEducationId" , JSON.stringify(experienceId));
        
    }

    /* Resets the current data that sits in the CV but does not resets data stored in local storage*/
    const resetCVData = () => {
        const resetData = {
            name: "",
            email: "",
            phone: "",
            address: "",
            degree: "",
            institution: "",
            yearCompletition: "",
            jobTitle: "",
            companyName: "",
            duration: "",
            responsabilities: "",
            skills: ""
        }

        setEducationData([]);
        setExperienceData([]);

        setCvData({...cvData , ...resetData});
    }


    return(
        <div id='dynamicCVContainer' className='main-cv-container mx-auto'>
            <CVForm 
                cvData={cvData} 
                handleChange={handleCVFormChange}
                addExperience={handleAddExperience}
                addEducation={handleAddEducation}
                saveCVData={saveCVData}
                resetCVData={resetCVData}/>

            <hr className='divider-dynamic'></hr>

            <CVPreview 
                cvData={cvData}
                experienceData={experienceData} 
                educationData={educationData} 
                updateEducation={updateEducation} 
                deleteEducation={deleteEducation} 
                educationEditId={educationEditingId} 
                educationSetEditingId={setEducationEditingId}
                deleteExperiece={deleteExperience}
                updateExperience={updateExperience}
                experienceEditId={experienceEditingId}
                experienceSetEditingId={setExperienceEditingId}/>
        </div>
    );
};

export default DynamicCV;