import React from 'react'
import Image from "next/image";

import styles from "./ServiceBox.module.css"

export default function ServiceBox({ image, title, description }) {


    return (
        <div className={styles.body}>
            <img src={image || placeholder} alt={title || "Service"} className={styles.image} />

            <div className={styles.content}>
                <div className={styles.title}>
                    {title}
                </div>
                <div className={styles.description}>
                    {description}
                </div>
                {/* <div className={styles.button}>
                    Book Now
                </div> */}
                <a href="tel:+15878919262" className={styles.button}>
                    Call now
                </a>
            </div>
        </div>
    )
}
