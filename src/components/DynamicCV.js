import React from 'react';

import CVForm from './CVForm';
import CVPreview from './CVPreview';

function DynamicCV(){



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

    const [experienceData , setExperienceData] = React.useState( () => {
        const savedData = localStorage.getItem("CVExperience");
        return savedData ? JSON.parse(savedData) : [];
    });

    const [educationData , setEducationData] = React.useState(() => {
        const saveData = localStorage.getItem("CVEducation");
        return saveData ? JSON.parse(saveData) : [];
    });

    const [experienceId , setExperienceId] = React.useState(() => {
        const saveData = localStorage.getItem("CVExperienceId");
        return saveData ? JSON.parse(saveData) : 1;
    });

    const [educationId , setEducationId] = React.useState(() => {
        const saveData = localStorage.getItem("CVEducationId");
        return saveData ? JSON.parse(saveData) : 1;
    });
    
    const [educationEditingId , setEducationEditingId] = React.useState(null);

    const [experienceEditingId , setExperienceEditingId] = React.useState(null);

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

    const handleCVFormChange = (event) => {
        setCvData({...cvData , [event.target.name]: event.target.value })
    };

    const updateEducation = (id , data) => {
        setEducationData((prev) => 
            prev.map((education) =>
                education.id === id ? {...education , ...data} : education
            )
        );
    };

    const deleteEducation = (id) => {
        setEducationData((prev) =>
            prev.filter(education => education.id !== id)
        );
    };

    const updateExperience = (id , data) => {
        setExperienceData((prev) =>
            prev.map((experience) =>
                experience.id === id ? {...experience , ...data} : experience
            )
        );
    };

    const deleteExperience = (id) => {
        setExperienceData((prev) => 
            prev.filter(experience => experience.id !== id)
        );
    }

    const saveCVData = () => {
        localStorage.setItem("CVData" , JSON.stringify(cvData));
        localStorage.setItem("CVEducation" , JSON.stringify(educationData));
        localStorage.setItem("CVEducationId" , JSON.stringify(educationId));
        localStorage.setItem("CVExperience" , JSON.stringify(experienceData));
        localStorage.setItem("CVEducationId" , JSON.stringify(experienceId));
        
    }

    const resetCVData = () => {

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