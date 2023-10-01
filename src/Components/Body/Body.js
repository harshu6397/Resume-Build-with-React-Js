import React, { useEffect, useState } from 'react'
import styles from './Body.module.css'
import { FiArrowDown } from "react-icons/fi";
import Editor from '../Editor/Editor';
import Resume from '../Resume/Resume';

const Body = () => {
  const colors = ['#239ce2', "#48bb78", "#0bc5ea", "#a0aec0", "#ed8936"];
  const sections = {
    basicInfo: "Basic Info",
    workExp: "Work Experience",
    project: "Projects",
    skills: "Skills",
    education: "Education",
    achievements: "Achievements",
    summary: "Summary",
    other: "Other"
  }

  const [resumeInformation, setResumeInformation] = useState({
    [sections.basicInfo]: {
      id: sections.basicInfo,
      sectionTitle: sections.basicInfo,
      detail: {}
    },

    [sections.workExp]: {
      id: sections.workExp,
      sectionTitle: sections.workExp,
      details: []
    },

    [sections.project]: {
      id: sections.project,
      sectionTitle: sections.project,
      details: []
    },

    [sections.skills]: {
      id: sections.skills,
      sectionTitle: sections.skills,
      points: []
    },

    [sections.education]: {
      id: sections.education,
      sectionTitle: sections.education,
      details: []
    },

    [sections.achievements]: {
      id: sections.achievements,
      sectionTitle: sections.achievements,
      points: []
    },

    [sections.summary]: {
      id: sections.summary,
      sectionTitle: sections.summary,
      detail: ""
    },

    [sections.other]: {
      id: sections.other,
      sectionTitle: sections.other,
      detail: ""
    }
  });

  useEffect(() => {
    console.log(resumeInformation);
  }, [resumeInformation])

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Resume Builder</h1>
      <div className={styles.toolbar}>
        <div className={styles.colors}>
          {colors.map((color) => (
            <div key={color} className={styles.color} style={{ backgroundColor: color, cursor: "pointer" }}></div>
          ))}
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.button}>Download <FiArrowDown /></button>
        </div>
      </div>
      <div className={styles.main}>
        <Editor 
        sections={sections} 
        information={resumeInformation} 
        setInformation={setResumeInformation} 
        />
        <Resume
        sections={sections} 
        information={resumeInformation}
        />
      </div>
    </div>
  )
}

export default Body
