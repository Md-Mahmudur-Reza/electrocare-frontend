import React from 'react'
import Image from "next/image";

import wiring from "../../../public/wiring.jpg"

import styles from "./About.module.css"


export default function About() {
    return (
        <div className={styles.body}>
            <div className={styles.content}>
                <div className={styles.innerContent}>
                    <div className={styles.title}>
                        ABOUT
                    </div>
                    <div className={styles.description}>
                        I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.​This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.
                    </div>
                </div>

            </div>
            <div className={styles.pictureSection}>

            </div>

        </div>
    )
}
