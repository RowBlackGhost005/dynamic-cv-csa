import React from 'react';

import CVExperienceItem from './CVExperienceItem';
import CVEducationItem from './CVEducationItem'

function CVPreview({
    cvData ,
    experienceData ,
    educationData ,
    updateEducation ,
    deleteEducation ,
    educationEditId ,
    educationSetEditingId ,
    updateExperience ,
    deleteExperiece ,
    experienceEditId ,
    experienceSetEditingId ,
}){

    return(
        <div className=''>
            <p className='text-center text-name'>{cvData.name}</p>

            <div className='text-center ' id='personalInformation'>
                <p><span>{`${cvData.email} | ${cvData.phone} | ${cvData.address}`}</span></p>
            </div>

            <hr></hr>

            <div id='educationInformation'>
                <p className='text-sub-head'>Education</p>
                <hr></hr>
                {educationData.map((education , index) => (
                    <CVEducationItem key={education.id} 
                    id={education.id} 
                    degree={education.degree} 
                    institution={education.institution} 
                    yearCompletition={education.yearCompletition}
                    updateEducation={updateEducation} 
                    deleteEducation={deleteEducation} 
                    editingId={educationEditId} 
                    setEditingId={educationSetEditingId}/>
                ))}
            </div>

            <div id='jobExperienceInformation'>
                <p className='text-sub-head'>Job Experience</p>
                <hr></hr>
                {experienceData.map((experience , index) => (
                    <CVExperienceItem  key={experience.id}
                    id={experience.id}
                    companyName={experience.companyName} 
                    duration={experience.duration} 
                    jobTitle={experience.jobTitle} 
                    responsabilities={experience.responsabilities}
                    deleteExperience={deleteExperiece}
                    editingId={experienceEditId}
                    setEditingId={experienceSetEditingId}
                    updateExperience={updateExperience}
                    />
                ))}
            </div>

            <div id='skillsInformation'>
                <p className='text-sub-head'>Skills:</p>
                <hr></hr>
                <p>{`${cvData.skills}`}</p>
            </div>
        </div>
    );
};

export default CVPreview;