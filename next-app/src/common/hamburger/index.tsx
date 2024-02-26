"use client";
import React, { useState } from "react";
import styles from "./hamburger.module.css";
import SidePanel from "@/components/SidePanel";
import close from '@/public/close.svg'
import Image from 'next/image'
import { FaBars } from "react-icons/fa6";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.hamburgermenu}>
      <div
        className={isOpen ? styles.menuopen : styles.hamburgericon}
        onClick={toggleMenu}
      >
        {/* <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div> */}
        {isOpen === true ? (
          
          <Image src={close} alt={"logo"}></Image>
        ) : (
            <FaBars/>
        )}
      </div>
      <div className={isOpen ? styles.menuopen : styles.menu}>
        <SidePanel />
      </div>
    </div>
  );
};

export default HamburgerMenu;
