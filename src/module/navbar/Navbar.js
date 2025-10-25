"use client";

import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from 'next/link'

import logo from "../../../public/Logos/the_tech_guys_logo.png"
import styles from "./Navbar.module.css"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const goHome = () => {
        router.push("/");
    };

    const pathname = usePathname();

    const url = pathname;
    const router = useRouter();

    const scrollToService = () => {
        if (pathname == "/") {
            const otherSection = document.getElementById("services");
            otherSection.scrollIntoView({ behavior: "smooth" });
        } else {
            router.push("/#services");
        }
    };

    const scrollToAbout = () => {
        if (pathname == "/") {
            const otherSection = document.getElementById("about");
            otherSection.scrollIntoView({ behavior: "smooth" });
        } else {
            router.push("/#about");
        }
    };

    const scrollToContact = () => {
        if (pathname == "/") {
            const otherSection = document.getElementById("contact");
            otherSection.scrollIntoView({ behavior: "smooth" });
        } else {
            router.push("/#contact");
        }
    };


    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarContainer}>
                <div className={styles.navbarLeft}>
                    <Image
                        onClick={goHome}
                        className={styles.logo}
                        src={logo}
                        alt="logo"
                    />
                </div>
                <div className={`${styles.navbarRight} `}>
                    <button
                        className={styles.navbarToggle}
                        onClick={toggleNavbar}
                        aria-expanded={isOpen ? "true" : "false"}
                        aria-controls="navbarLinks"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <ul
                        className={`${styles.navbarLinks} ${isOpen ? styles.active : ""}`}
                        id="navbarLinks"
                    >
                        <li>
                            <a onClick={scrollToService} className={styles.navbarText}>
                                Services
                            </a>
                        </li>
                        {/* <li>
                            <a href="/booking" className={styles.navbarText}>
                                Book a service
                            </a>
                        </li> */}
                        <li>
                            <a onClick={scrollToAbout} className={styles.navbarText}>
                                About Us
                            </a>
                        </li>
                        <li>
                            <a onClick={scrollToContact} className={styles.navbarText}>
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
