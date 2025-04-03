import React from 'react'
import Image from "next/image";

import styles from "./ServiceBox.module.css"

export default function ServiceBox({ image, title, description }) {


    return (
        <div className={styles.body}>
            <img src={image || placeholder} alt={title || "Service"} className={styles.image} />

            <div className={styles.content}>
                <h2 className={styles.title}>
                    {title}
                </h2>
                <p className={styles.description}>
                    {description}
                </p>
                <div className={styles.button}>
                    Book Now
                </div>
            </div>
        </div>
    )
}
