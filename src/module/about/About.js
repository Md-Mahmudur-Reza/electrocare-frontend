import React from 'react'
import Image from "next/image";

import wiring from "../../../public/wiring.jpeg"

import styles from "./About.module.css"


export default function About() {
    return (
        <div className={styles.body} id="about">
            <div className={styles.content}>
                <div className={styles.innerContent}>
                    <div className={styles.title}>
                        ABOUT
                    </div>
                    <div className={styles.description}>
                        For over five years, we’ve been Barrie’s go-to team for dependable electrical, electronic, and HVAC solutions. Day or night, our certified technicians deliver prompt, safety-focused service—backed by local know-how and a 24/7 support promise that keeps homes and businesses powered, comfortable, and worry-free.
                    </div>
                </div>

            </div>
            <div className={styles.pictureSection}>

            </div>

        </div>
    )
}
