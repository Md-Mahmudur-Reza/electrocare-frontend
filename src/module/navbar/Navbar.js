"use client";

import React from "react";


import styles from "./Navbar.module.css"

export default function Navbar() {



    return (
        <nav className={`${styles.navbar}`}>
            <div className={styles.navbar_container}>
                <div className={styles.logo}>
                    {/* <Image className={styles.logoImage} src={logo} alt="logo" /> */}
                    Logo
                </div>

                {/* Hamburger Menu for Mobile */}
                <div className={styles.menu_toggle} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    ☰
                </div>

                <ul className={styles.nav_links}>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Service</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Projects</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}
