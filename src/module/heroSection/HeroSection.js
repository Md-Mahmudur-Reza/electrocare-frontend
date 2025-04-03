import React from 'react'

import styles from './HeroSection.module.css'

export default function HeroSection() {
    return (
        <div className={styles.body}>
            <h1 className={styles.title}>
                EXCELLENCE IN EVERY EXPERIENCE,
                <br />
                QUALITY IN EVERY SERVICE
            </h1>
        </div>
    )
}
