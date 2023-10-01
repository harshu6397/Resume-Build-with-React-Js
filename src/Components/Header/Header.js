import React from 'react'
import styles from './Header.module.css'
import resumeSvg from '../../assets/resume.svg';
import profileImg from '../../assets/user-profile.svg';

const Header = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.headerNav}>
                    <nav className={styles.navbar}>
                        <div className={styles.logo}>
                            <h1>Resume Builder</h1>
                        </div>
                        <ul>
                            <li>
                                <div className={styles.dropdown}>
                                    <img className={styles.profileLogo} src={profileImg} alt="" />
                                    <div className={styles.dropdownContent}>
                                        {/* <div><span className={styles.name}></span></div> */}
                                        <div> My Resume</div>
                                        <div> <a className={styles.logout}>Log out</a></div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className={styles.headerContentContainer}>
                    <div className={styles.left}>
                        <p className={styles.heading}>A <span>Resume</span> that stand out!</p>
                        <p className={styles.heading}>Make your own Resume <span>It's free.</span></p>
                    </div>
                    <div className={styles.right}>
                        <img src={resumeSvg} alt="resume svg" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
