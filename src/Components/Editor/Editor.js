import React, { useEffect, useState } from 'react';
import InputControl from '../InputControl/InputControl';
import styles from './Editor.module.css';
import { FiX } from "react-icons/fi";

const Editor = ({ sections, information, setInformation }) => {
    const [activeSection, setActiveSection] = useState(Object.keys(sections)?.[0]);
    const [activeSectionInformation, setActiveSectionInformation] = useState(information[sections[Object.keys(sections)?.[0]]]);
    const [sectionTitle, setSectionTitle] = useState(sections[Object.keys(sections)?.[0]]);
    const [activeDetailIndex, setActiveDetailIndex] = useState(0);
    const [values, setValues] = useState({
        name: activeSectionInformation?.detail?.name || "",
        title: activeSectionInformation?.detail?.title || "",
        email: activeSectionInformation?.detail?.email || "",
        phone: activeSectionInformation?.detail?.phone || "",
        linkedin: activeSectionInformation?.detail?.linkedin || "",
        githubProfile: activeSectionInformation?.detail?.githubProfile || "",
    });

    const handlePointUpdate = (index, value) => {
        let tempValues = { ...values };
        if(!Array.isArray(tempValues.points)) tempValues.points = ["", "", "", ""];
        tempValues.points[index] = value;
        setValues(tempValues);
    }

    const basicInfoBody = (
        <div className={styles.details}>
            <div className={styles.row}>
                <InputControl
                    label="Name"
                    value={values.name}
                    placeholder="Enter Name eg. John Doe"
                    onChange={(e) =>
                        setValues((prev) => ({ ...prev, name: e.target.value })
                        )
                    }
                />
                <InputControl
                    label="Title"
                    value={values.title}
                    placeholder="Enter Title eg. Web Developer"
                    onChange={(e) =>
                        setValues((prev) => ({ ...prev, title: e.target.value })
                        )
                    }
                />
            </div>
            <div className={styles.row}>
                <InputControl
                    label="Email"
                    value={values.email}
                    placeholder="Enter Email eg. email@gmail.com "
                    onChange={(e) =>
                        setValues((prev) => ({ ...prev, email: e.target.value })
                        )
                    }
                />
                <InputControl
                    label="Phone"
                    value={values.phone}
                    placeholder="Enter Phone eg. 1234567890"
                    onChange={(e) =>
                        setValues((prev) => ({ ...prev, phone: e.target.value })
                        )
                    }
                />
            </div>
            <div className={styles.row}>
                <InputControl
                    label="LinkedIn"
                    value={values.linkedin}
                    placeholder="Enter LinkedIn Link"
                    onChange={(e) =>
                        setValues((prev) => ({ ...prev, linkedin: e.target.value })
                        )
                    }
                />
                <InputControl
                    label="Github"
                    value={values.githubProfile}
                    placeholder="Enter Github Link"
                    onChange={(e) =>
                        setValues((prev) => ({ ...prev, githubProfile: e.target.value })
                        )
                    }
                />
            </div>
        </div>
    );

    const workExpBody = (
        <div className={styles.details}>
            <div className={styles.row}>
                <InputControl
                    label="Title"
                    value={values.title}
                    placeholder="Enter Title eg. Web Developer"
                    onChange={(e) =>
                        setValues((prev) => ({ ...prev, title: e.target.value })
                        )
                    }
                />
                <InputControl
                    label="Company Name"
                    value={values.companyName}
                    placeholder="Enter Company Name eg. amazon"
                    onChange={(e) =>
                        setValues((prev) => ({ ...prev, companyName: e.target.value })
                        )
                    }
                />
            </div>
            <div className={styles.row}>
                <InputControl
                    label="Certification Link"
                    value={values.certificationLink}
                    placeholder="Enter Certification Link"
                    onChange={(e) =>
                        setValues((prev) => ({ ...prev, certificationLink: e.target.value })
                        )
                    }
                />
                <InputControl
                    label="Location"
                    value={values.location}
                    placeholder="Enter Location eg. Bangalore"
                    onChange={(e) =>
                        setValues((prev) => ({ ...prev, location: e.target.value })
                        )
                    }
                />
            </div>
            <div className={styles.row}>
                <InputControl
                    label="Start Date"
                    value={values.startDate}
                    type="date"
                    placeholder="Enter Start Date eg. 2020"
                    onChange={(e) =>
                        setValues((prev) => ({ ...prev, startDate: e.target.value })
                        )
                    }
                />
                <InputControl
                    label="End Date"
                    value={values.endDate}
                    type="date"
                    placeholder="Enter End Date eg. 2021"
                    onChange={(e) =>
                        setValues((prev) => ({ ...prev, endDate: e.target.value })
                        )
                    }
                />
            </div>
            <div className={styles.column}>
                <label>Enter Work Description</label>
                <InputControl
                    placeholder="Line 1"
                    value={values.points ? values.points[0] : ""}
                    onChange={(e) =>
                        handlePointUpdate(0, e.target.value)
                    }
                />
                <InputControl
                    placeholder="Line 2"
                    value={values.points ? values.points[1] : ""}
                    onChange={(e) =>
                        handlePointUpdate(1, e.target.value)
                    }
                />
                <InputControl
                    placeholder="Line 3"
                    value={values.points ? values.points[2] : ""}
                    onChange={(e) =>
                        handlePointUpdate(2, e.target.value)
                    }
                />
            </div>
        </div>
    )

    const projectBody = (
        <div className={styles.details}>
            <div className={styles.row}>
                <InputControl
                    label="Title"
                    value={values.title}
                    placeholder="Enter Title eg. Chat App"
                    onChange={(e) =>
                        setValues((prev) => ({ ...prev, title: e.target.value })
                        )
                    }
                />
            </div>
            <InputControl
                label="Overview"
                value={values.overview}
                placeholder="Enter Overview of project eg. A chat app built using React and Firebase"
                onChange={(e) =>
                    setValues((prev) => ({ ...prev, overview: e.target.value })
                    )
                }
            />
            <div className={styles.row}>
                <InputControl
                    label="Deployed Link"
                    value={values.deployedLink}
                    placeholder="Enter Deployed Link"
                    onChange={(e) =>
                        setValues((prev) => ({ ...prev, deployedLink: e.target.value })
                        )
                    }
                />
                <InputControl
                    label="Github Link"
                    value={values.githubLink}
                    placeholder="Enter Github Link"
                    onChange={(e) =>
                        setValues((prev) => ({ ...prev, githubLink: e.target.value })
                        )
                    }
                />
            </div>
            <div className={styles.column}>
                <label>Enter Project Description</label>
                <InputControl
                    placeholder="Line 1"
                    value={values.points ? values.points[0] : ""}
                    onChange={(e) =>
                        handlePointUpdate(0, e.target.value)
                    }
                />
                <InputControl
                    placeholder="Line 2"
                    value={values.points ? values.points[1] : ""}
                    onChange={(e) =>
                        handlePointUpdate(1, e.target.value)
                    }
                />
                <InputControl
                    placeholder="Line 3"
                    value={values.points ? values.points[2] : ""}
                    onChange={(e) =>
                        handlePointUpdate(2, e.target.value)
                    }
                />
                <InputControl
                    placeholder="Line 4"
                    value={values.points ? values.points[3] : ""}
                    onChange={(e) =>
                        handlePointUpdate(3, e.target.value)
                    }
                />
            </div>
        </div>
    );

    const educationBody = (
        <div className={styles.details}>
            <div className={styles.row}>
                <InputControl
                    label="Title"
                    value={values.title}
                    placeholder="Enter Title eg. B.Tech"
                    onChange={(e) =>
                        setValues((prev) => ({ ...prev, title: e.target.value })
                        )
                    }
                />
            </div>
            <InputControl
                label="College/School Name"
                value={values.instituteName}
                placeholder="Enter College/School Name eg. IIT Bombay"
                onChange={(e) =>
                    setValues((prev) => ({ ...prev, instituteName: e.target.value })
                    )
                }
            />
            <div className={styles.row}>
                <InputControl
                    label="Start Date"
                    value={values.startDate}
                    type="date"
                    placeholder="Enter Start Date eg. 2020"
                    onChange={(e) =>
                        setValues((prev) => ({ ...prev, startDate: e.target.value })
                        )
                    }
                />
                <InputControl
                    label="End Date"
                    value={values.endDate}
                    type="date"
                    placeholder="Enter End Date eg. 2021"
                    onChange={(e) =>
                        setValues((prev) => ({ ...prev, endDate: e.target.value })
                        )
                    }
                />
            </div>
        </div>
    );

    const achievementsBody = (
        <div className={styles.details}>
            <div className={styles.column}>
                <label>List your achievements</label>
                <InputControl
                    placeholder="Line 1"
                    value={values.points ? values.points[0] : ""}
                    onChange={(e) =>
                        handlePointUpdate(0, e.target.value)
                    }
                />
                <InputControl
                    placeholder="Line 2"
                    value={values.points ? values.points[1] : ""}
                    onChange={(e) =>
                        handlePointUpdate(1, e.target.value)
                    }
                />
                <InputControl
                    placeholder="Line 3"
                    value={values.points ? values.points[2] : ""}
                    onChange={(e) =>
                        handlePointUpdate(2, e.target.value)
                    }
                />
                <InputControl
                    placeholder="Line 4"
                    value={values.points ? values.points[3] : ""}
                    onChange={(e) =>
                        handlePointUpdate(3, e.target.value)
                    }
                />
            </div>
        </div>
    );

    const skillsBody = (
        <div className={styles.details}>
            <div className={styles.column}>
                <label>List your skills</label>
                <InputControl
                    placeholder="Skill 1"
                    value={values.points ? values.points[0] : ""}
                    onChange={(e) =>
                        handlePointUpdate(0, e.target.value)
                    }
                />
                <InputControl
                    placeholder="Skill 2"
                    value={values.points ? values.points[1] : ""}
                    onChange={(e) =>
                        handlePointUpdate(1, e.target.value)
                    }
                />
                <InputControl
                    placeholder="Skill 3"
                    value={values.points ? values.points[2] : ""}
                    onChange={(e) =>
                        handlePointUpdate(2, e.target.value)
                    }
                />
                <InputControl
                    placeholder="Skill 4"
                    value={values.points ? values.points[3] : ""}
                    onChange={(e) =>
                        handlePointUpdate(3, e.target.value)
                    }
                />
            </div>
        </div>
    );

    const summaryBody = (
        <div className={styles.details}>
            <InputControl
                label="Summary"
                value={values.summary}
                placeholder="Enter your objective/summary"
                onChange={(e) =>
                    setValues((prev) => ({ ...prev, summary: e.target.value })
                    )
                }
            />
        </div>
    );

    const otherBody = (
        <div className={styles.details}>
            <InputControl
                label="Other Information"
                value={values.otherInformation}
                placeholder="Enter something else"
                onChange={(e) =>
                    setValues((prev) => ({ ...prev, otherInformation: e.target.value })
                    )
                }
            />
        </div>
    );

    const generateBody = () => {
        switch (sections[activeSection]) {
            case sections.workExp:
                return workExpBody;
            case sections.project:
                return projectBody;
            case sections.education:
                return educationBody;
            case sections.basicInfo:
                return basicInfoBody;
            case sections.achievements:
                return achievementsBody;
            case sections.skills:
                return skillsBody;
            case sections.summary:
                return summaryBody;
            case sections.other:
                return otherBody;
            default:
                return null;
        }
    }
    generateBody(activeSection);

    useEffect(() => {
        const activeInfo = information[sections[activeSection]];
        setActiveSectionInformation(activeInfo);
        setSectionTitle(sections[activeSection]);
        setActiveDetailIndex(0);
        setValues({
            name: activeInfo?.detail?.name || "",
            title: activeInfo?.details
                ? activeInfo?.details[0]?.title || ""
                : activeInfo?.detail?.title || "",
            overview: activeInfo?.details
                ? activeInfo?.details[0]?.overview || ""
                : "",
            deployedLink: activeInfo?.details
                ? activeInfo?.details[0]?.deployedLink || ""
                : "",
            githubLink: activeInfo?.details
                ? activeInfo?.details[0]?.githubLink || ""
                : "",
            instituteName: activeInfo?.details
                ? activeInfo?.details[0]?.instituteName || ""
                : "",
            email: activeInfo?.detail?.email || "",
            phone: activeInfo?.detail?.phone || "",
            linkedin: activeInfo?.detail?.linkedin || "",
            githubProfile: activeInfo?.detail?.githubProfile || "",
            companyName: activeInfo?.details
                ? activeInfo?.details[0]?.companyName || ""
                : "",
            certificationLink: activeInfo?.details
                ? activeInfo?.details[0]?.certificationLink || ""
                : "",
            startDate: activeInfo?.details
                ? activeInfo?.details[0]?.startDate || ""
                : "",
            endDate: activeInfo?.details
                ? activeInfo?.details[0]?.endDate || ""
                : "",
            location: activeInfo?.details
                ? activeInfo?.details[0]?.location || ""
                : "",
            points: activeInfo?.details
                ? activeInfo?.details[0]?.points
                    ? [...activeInfo?.details[0]?.points]
                    : ""
                : activeInfo?.points
                    ? [...activeInfo?.points]
                    : "",
            summary: typeof activeInfo?.detail === String ? activeInfo?.detail : "",
            otherInformation: typeof activeInfo?.detail === String ? activeInfo?.detail : "",
        })
        // eslint-disable-next-line
    }, [activeSection]);

    const handleSubmission = () => {
        switch (sections[activeSection]) {
            case sections.basicInfo: {
                const { name, title, email, phone, linkedin, githubProfile } = values;
                const basicInfo = {
                    name,
                    title,
                    email,
                    phone,
                    linkedin,
                    githubProfile,
                };
                setInformation((prev) => ({
                    ...prev,
                    [sections.basicInfo]: {
                        ...prev[sections.basicInfo],
                        detail: basicInfo,
                        sectionTitle,
                    },
                }));
                break;
            }
            case sections.workExp: {
                const { title, companyName, certificationLink, location, startDate, endDate, points } = values;
                const workExp = {
                    title,
                    companyName,
                    certificationLink,
                    location,
                    startDate,
                    endDate,
                    points,
                };
                const tempDetails = [...information[sections.workExp]?.details];
                tempDetails[activeDetailIndex] = workExp;
                setInformation((prev) => ({
                    ...prev,
                    [sections.workExp]: {
                        ...prev[sections.workExp],
                        details: tempDetails,
                        sectionTitle,
                    },
                }));
                break;
            }
            case sections.project: {
                const { title, overview, deployedLink, githubLink, points } = values;
                const project = {
                    title,
                    overview,
                    deployedLink,
                    githubLink,
                    points,
                };
                const tempDetails = [...information[sections.project]?.details];
                tempDetails[activeDetailIndex] = project;
                setInformation((prev) => ({
                    ...prev,
                    [sections.project]: {
                        ...prev[sections.project],
                        details: tempDetails,
                        sectionTitle,
                    },
                }));
                break;
            }
            case sections.education: {
                const { title, instituteName, startDate, endDate, } = values;
                const education = {
                    title,
                    instituteName,
                    startDate,
                    endDate,
                };
                const tempDetails = [...information[sections.education]?.details];
                tempDetails[activeDetailIndex] = education;
                setInformation((prev) => ({
                    ...prev,
                    [sections.education]: {
                        ...prev[sections.education],
                        details: tempDetails,
                        sectionTitle,
                    },
                }));
                break;
            }
            case sections.achievements: {
                const { points } = values;
                const achievements = points;
                setInformation((prev) => ({
                    ...prev,
                    [sections.achievements]: {
                        ...prev[sections.achievements],
                        points: achievements,
                        sectionTitle,
                    },
                }));
                break;
            }
            case sections.skills: {
                const { points } = values;
                const skills = points;
                setInformation((prev) => ({
                    ...prev,
                    [sections.skills]: {
                        ...prev[sections.skills],
                        points: skills,
                        sectionTitle,
                    },
                }));
                break;
            }
            case sections.summary: {
                const { summary } = values;
                setInformation((prev) => ({
                    ...prev,
                    [sections.summary]: {
                        ...prev[sections.summary],
                        detail: summary,
                        sectionTitle,
                    },
                }));
                break;
            }
            case sections.other: {
                const { otherInformation } = values;
                const otherInfo = otherInformation;
                setInformation((prev) => ({
                    ...prev,
                    [sections.other]: {
                        ...prev[sections.other],
                        detail: otherInfo,
                        sectionTitle,
                    },
                }));
                break;
            }
            default:
                break;
        }
    }

    useEffect(() => {
        setActiveSectionInformation(information[sections[activeSection]]);
    }, [information]);

    useEffect(() => {
        const details = activeSectionInformation?.details;
        if(!details) return
        const activeInfo = information[sections[activeSection]];
        setValues({
            overview: activeInfo?.details[activeDetailIndex]?.overview || "",
            deployedLink: activeInfo?.details[activeDetailIndex]?.deployedLink || "",
            githubLink: activeInfo?.details[activeDetailIndex]?.githubLink || "",
            instituteName: activeInfo?.details[activeDetailIndex]?.instituteName || "",
            certificationLink: activeInfo?.details[activeDetailIndex]?.certificationLink || "",
            companyName: activeInfo?.details[activeDetailIndex]?.companyName || "",
            title: activeInfo?.details[activeDetailIndex]?.title || "",
            location: activeInfo?.details[activeDetailIndex]?.location || "",
            startDate: activeInfo?.details[activeDetailIndex]?.startDate || "",
            endDate: activeInfo?.details[activeDetailIndex]?.endDate || "",
            points: activeInfo?.details[activeDetailIndex]?.points || "",
        })

    }, [activeDetailIndex])

    const handleAddNewDetail = () => {
        const tempDetails = [...activeSectionInformation?.details];
        if (!tempDetails) return;
        const lastDetail = tempDetails.slice(-1)[0];
        console.log(lastDetail);
        if (lastDetail) {
            if (!Object.keys(lastDetail).length) {
                alert("Please fill the previous detail first");
                return;
            }
            else if(!(Object.keys(lastDetail).filter((key) =>  lastDetail[key] !== "").length > 1)) {
                alert("Please fill the previous details first");
                return;
            }
        }
        tempDetails.push({});
        setInformation((prev) => ({
            ...prev,
            [sections[activeSection]]: {
                ...prev[sections[activeSection]],
                details: tempDetails,
            },
        }));
        setActiveDetailIndex(tempDetails.length - 1);
    }

    const handleDeleteDetail = (index) => {
        const tempDetails = activeSectionInformation?.details ? [...activeSectionInformation?.details] : [];
        if(!tempDetails.length) return;
        tempDetails.splice(index, 1);
        setInformation((prev) => ({
            ...prev,
            [sections[activeSection]]: {
                ...prev[sections[activeSection]],
                details: tempDetails,
            },
        }));
        setActiveDetailIndex((prev) => (prev > 0 ? prev - 1 : 0));
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                {
                    Object.keys(sections)?.map((section) => (
                        <div
                            key={section}
                            className={`${styles.section} ${activeSection === section ? styles.active : ''}`}
                            onClick={() => setActiveSection(section)}
                        >
                            {sections[section]}
                        </div>
                    ))
                }
            </div>
            <div className={styles.body}>
                <InputControl label="Title" placeholder="Enter title..." value={sectionTitle} onChange={(e) => setSectionTitle(e.target.value)} />

                <div className={styles.chips}>
                    {
                        activeSectionInformation?.details?.map((detail, index) => (
                            <div className={`${styles.chip} ${activeDetailIndex === index ? styles.active : ""}`}
                                key={detail.title + index}
                                onClick={() => setActiveDetailIndex(index)}
                            >
                                <p>{sections[activeSection]} {index + 1}</p>
                                <FiX onClick={(e) => {
                                    e.stopPropagation()
                                    handleDeleteDetail(index)}
                                    } />
                            </div>
                        ))
                    }
                    {
                        activeSectionInformation?.details && activeSectionInformation?.details?.length > 0 ? (
                            <div className={styles.new} onClick={handleAddNewDetail}>+New</div>
                        )
                            : ""
                    }
                </div>

                {generateBody()}

                <div className={styles.buttonContainer}>
                    <button className={styles.button} onClick={handleSubmission} >Save</button>
                </div>
            </div>
        </div>
    )
}

export default Editor
