"use client";
import { FaClock, FaFolder, FaSearch, FaStar, FaUnlock } from 'react-icons/fa';
import styles from './sidePanel.module.css';
import Link from 'next/link';
import React, { useState } from 'react';


type Props = {};

const SidePanel = (props: Props) => {
    const [isPanelOpen, setIsPanelOpen] = useState(false);

    const togglePanel = () => {
        setIsPanelOpen(!isPanelOpen);
    };

    return (
        <div>
            
            <div className={`${styles.resumeContainer} ${isPanelOpen ? styles.panelOpen : ''}`}>
            <b>MY Templates</b>
            <p className={styles.searchAndText}><FaSearch />Search</p>
            <p className={styles.starAndText}><FaStar /><Link className={styles.link} href="/shopPage"> Software Engineer</Link></p>
            <p className={styles.starAndText}><FaStar /><Link className={styles.link} href="/shopPage"> Computer Hardware Engineer</Link></p>
            <p className={styles.starAndText}><FaStar /><Link className={styles.link} href="/shopPage"> Network Engineer</Link></p>
            <p className={styles.starAndText}><FaStar /><Link className={styles.link} href="/shopPage"> Technical Support</Link></p>
            <p className={styles.starAndText}><FaStar /><Link className={styles.link} href="/shopPage"> Network Administration</Link></p>
            <p className={styles.starAndText}><FaStar /><Link className={styles.link} href="/shopPage"> Management</Link></p>
            <p className={styles.starAndText}><FaStar /><Link className={styles.link} href="/shopPage"> Data Analysis</Link></p>
            <p className={styles.starAndText}><FaStar /><Link className={styles.link} href="/shopPage"> Computer Technician</Link></p>
            <p className={styles.starAndText}><FaClock /><Link className={styles.link} href="/shopPage"> PastSearch 1</Link></p>
            <p className={styles.starAndText}><FaClock /><Link className={styles.link} href="/shopPage"> PastSearch 2</Link></p>
            <p className={styles.starAndText}><FaClock /><Link className={styles.link} href="/shopPage"> Computer and Information</Link></p>
            <p className={styles.starAndText}><FaClock /><Link className={styles.link} href="/shopPage"> Database Administration</Link></p>
            <p className={styles.starAndText}><FaClock /><Link className={styles.link} href="/shopPage"> Computer Security</Link></p>
            <p className={styles.starAndText}><FaClock /><Link className={styles.link} href="/shopPage"> Computer System Analyst</Link></p>
            <b>My Boards</b>
            <p className={styles.starAndText}><FaFolder /><Link className={styles.link} href="/shopPage"> Board 1</Link></p>
            <p className={styles.starAndText}><FaFolder /><Link className={styles.link} href="/shopPage"> Board 2</Link></p>
            <p className={styles.starAndText}><FaFolder /><Link className={styles.link} href="/shopPage"> board 3</Link></p>
            <p className={styles.starAndText}><FaUnlock /><Link className={styles.link} href="/shopPage"> Board agent 1</Link></p>
            <p className={styles.starAndText}><FaUnlock /><Link className={styles.link} href="/shopPage"> Board agent 2</Link></p>
            <p className={styles.starAndText}><FaUnlock /><Link className={styles.link} href="/shopPage"> board agent 3</Link></p>
        </div>
        </div>
        
    );
}

export default SidePanel;