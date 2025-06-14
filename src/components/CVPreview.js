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
        <div>
            <p className='text-center'>{cvData.name}</p>

            <div className='text-center' id='personalInformation'>
                <p><span>{`${cvData.email} | ${cvData.phone} | ${cvData.address}`}</span></p>
            </div>

            <div id='educationInformation'>
                <p>Education</p>
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
                <p>Job Experience</p>
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
                <p>Skills:</p>
                <p>{`${cvData.skills}`}</p>
            </div>
        </div>
    );
};

export default CVPreview;