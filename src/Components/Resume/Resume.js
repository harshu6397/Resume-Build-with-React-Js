import React, { useEffect, useState } from 'react'
import styles from './Resume.module.css'
import { FiAtSign, FiGithub, FiPhone, FiLinkedin, FiCalendar, FiPaperclip, FiMapPin } from "react-icons/fi";

const Resume = ({ sections, information }) => {
  const [columns, setColumns] = useState([[], []])

  const info = {
    workExp: information[sections.workExp],
    project: information[sections.project],
    skills: information[sections.skills],
    achievement: information[sections.achievement],
    education: information[sections.education],
    basicInfo: information[sections.basicInfo],
    summary: information[sections.summary],
    other: information[sections.other],
  }

  const getFormattedDate = (value) => {
    if (!value) return "";
    const date = new Date(value);

    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  const workExpSection = (
    <div key={"workExp"} className={`${styles.section} ${styles.workExp}`}>
      <div className={styles.sectionTitle}>{info.workExp.sectionTitle}</div>
      <div className={styles.content}>
        {
          info.workExp?.details.map((detail, index) => (
            <div className={styles.item} key={index}>
              {
                detail.title && <p className={styles.title}>{detail.title}</p>
              }
              
              <p className={styles.subTitle}>{details.companyName}</p>
              <div className={styles.date}>
                <FiCalendar /> getFormattedDate(detail.startDate) - getFormattedDate(detail.endDate)
              </div>
              <a className={styles.link} href={detail.certificationLink}>
                <FiPaperclip /> {detail.certificationLink}
              </a>
              <p className={styles.location}>
                <FiMapPin /> {detail.location}
              </p>
              <ul className={styles.points}>
                <li className={styles.point}>Developed a web application for a client using React, Node.js, and MongoDB.</li>
                <li className={styles.point}>Worked with a team of 5 developers to create a web application for a client</li>
                <li className={styles.point}>Worked with a team of 5 developers to create a web application for a client</li>
              </ul>
            </div>
          ))
        }
      </div>
    </div>
  )

  const projectSection = (
    <div key={"project"} className={`${styles.section} ${styles.project}`}>
      <div className={styles.sectionTitle}>Project</div>
      <div className={styles.content}>
        <div className={styles.item}>
          <p className={styles.title}>Chat App</p>
          <p className={styles.overview}>
            Developed a web application for a client using React, Node.js, and MongoDB.
          </p>
          <a className={styles.link}>
            <FiPaperclip /> https://www.quadb.com/certificate/12345
          </a>
          <a className={styles.link}>
            <FiGithub /> https://www.github.com/username/
          </a>
          <ul className={styles.points}>
            <li className={styles.point}>This is point 1</li>
            <li className={styles.point}>This is point 2</li>
            <li className={styles.point}>This is point 3</li>
            <li className={styles.point}>This is point 4</li>
          </ul>
        </div>
      </div>
    </div>
  )

  const educationSection = (
    <div key={"education"} className={`${styles.section} ${styles.education}`}>
      <div className={styles.sectionTitle}>Education</div>
      <div className={styles.content}>
        <div className={styles.item}>
          <p className={styles.title}>B. Tech</p>
          <p className={styles.subTitle}>Dewan VS Institute of Engineering and Technology</p>
          <div className={styles.date}>
            <FiCalendar /> 2019 - Present
          </div>
        </div>
      </div>
    </div>
  )

  const skillSection = (
    <div key={"skills"} className={`${styles.section} ${styles.skills}`}>
      <div className={styles.sectionTitle}>Skills</div>
      <div className={styles.content}>
        <ul className={styles.skills}>
          <li className={styles.skill}>React</li>
          <li className={styles.skill}>Node.js</li>
          <li className={styles.skill}>MongoDB</li>
          <li className={styles.skill}>Express</li>
          <li className={styles.skill}>JavaScript</li>
          <li className={styles.skill}>HTML</li>
          <li className={styles.skill}>CSS</li>
        </ul>
      </div>
    </div>
  )

  const achievementSection = (
    <div key={"achievement"} className={`${styles.section} ${styles.achievement}`}>
      <div className={styles.sectionTitle}>Achievement</div>
      <div className={styles.content}>
        <ul className={styles.achievements}>
          <li className={styles.achievement}>This is achievement 1</li>
          <li className={styles.achievement}>This is achievement 2</li>
          <li className={styles.achievement}>This is achievement 3</li>
          <li className={styles.achievement}>This is achievement 4</li>
        </ul>
      </div>
    </div>
  )

  const summarySection = (
    <div key={"summary"} className={`${styles.section} ${styles.summary}`}>
      <div className={styles.sectionTitle}>Summary</div>
      <div className={styles.content}>
        <p className={styles.summary}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nunc, eget aliquam nisl nisl sit amet lorem. Sed euismod
        </p>
      </div>
    </div>
  )

  const otherSection = (
    <div key={"other"} className={`${styles.section} ${styles.other}`}>
      <div className={styles.sectionTitle}>Other</div>
      <div className={styles.content}>
        <p className={styles.other}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nunc, eget aliquam nisl nisl sit amet lorem. Sed euismod
        </p>
      </div>
    </div>
  )

  useEffect(() => {
    setColumns([
      [educationSection, workExpSection, projectSection],
      [skillSection, achievementSection, summarySection, otherSection]
    ])
  }, [])

  return (
    <div className={styles.container} >
      <div className={styles.header}>
        <p className={styles.heading}>Name</p>
        <p className={styles.subHeading}>Web Developer</p>

        <div className={styles.links}>
          <a className={styles.link}>
            <FiAtSign /> Email@gmail.com
          </a>
          <a className={styles.link}>
            <FiPhone /> 1234567890
          </a>
          <a className={styles.link}>
            <FiLinkedin /> https://linkedin.in/harsh-kumar
          </a>
          <a className={styles.link}>
            <FiGithub /> https://github/harshu6397
          </a>
        </div>
      </div>

      <div className={styles.main}>
        <div className={styles.col1}>{columns[0]}</div>
        <div className={styles.col2}>{columns[1]}</div>
      </div>
    </div>
  )
}

export default Resume
