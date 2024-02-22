import React from 'react';
import { FaCheckSquare, FaClock, FaFolder, FaSearch, FaStar, FaUnlock } from 'react-icons/fa';
import styles from './sidePanel.module.css';
import { FaLockOpen } from 'react-icons/fa6';

type Props = {};

const SidePanel = (props: Props) => {
    return (
        <div className={styles.resumeContainer}>
            <b>MY Templates</b>
            <p className={styles.searchAndText}><FaSearch />Search</p>
            <p className={styles.starAndText}><FaStar /> Software Engineer</p>
            <p className={styles.starAndText}><FaStar /> Computer Hardware Engineer</p>
            <p className={styles.starAndText}><FaStar /> Network Engineer</p>
            <p className={styles.starAndText}><FaStar /> Technical Support</p>
            <p className={styles.starAndText}><FaStar /> Network Administration</p>
            <p className={styles.starAndText}><FaStar /> Management</p>
            <p className={styles.starAndText}><FaStar /> Data Analysis</p>
            <p className={styles.starAndText}><FaStar /> Computer Technician</p>
            <p className={styles.starAndText}><FaClock />PastSearch 1</p>
            <p className={styles.starAndText}><FaClock />PastSearch 2</p>
            <p className={styles.starAndText}><FaClock />Computer and Information</p>
            <p className={styles.starAndText}><FaClock />Database Administration</p>
            <p className={styles.starAndText}><FaClock /> Computer Security</p>
            <p className={styles.starAndText}><FaClock /> Computer System Analyst</p>
            <b>My Boards</b>
            <p className={styles.starAndText}><FaFolder /> Board 1</p>
            <p className={styles.starAndText}><FaFolder /> Board 2</p>
            <p className={styles.starAndText}><FaFolder /> board 3</p>
            <p className={styles.starAndText}><FaUnlock /> Board agent 1</p>
            <p className={styles.starAndText}><FaUnlock /> Board agent 2</p>
            <p className={styles.starAndText}><FaUnlock /> board agent 3</p>
        </div>
    );
}

export default SidePanel;