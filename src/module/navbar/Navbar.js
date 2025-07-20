"use client";

import React from "react";
import Image from "next/image";
import Link from 'next/link'

import logo from "../../../public/Logos/the_tech_guys_logo.png"
import styles from "./Navbar.module.css"

export default function Navbar() {



    return (
        <nav className={`${styles.navbar}`}>
            <div className={styles.navbar_container}>
                <div className={styles.logo}>
                    <Image className={styles.logoImage} src={logo} alt="logo" />
                    {/* Logo */}
                </div>

                {/* Hamburger Menu for Mobile */}
                <div className={styles.menu_toggle} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    ☰
                </div>

                <ul className={styles.nav_links}>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/">Service</Link></li>
                    <li><Link href="/">About</Link></li>
                    {/* <li><a href="/">Projects</a></li> */}
                    <li><Link href="/">Contact</Link></li>
                </ul>
            </div>
        </nav>
    )
}
