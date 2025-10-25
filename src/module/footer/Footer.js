import React from 'react'

import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <div className={styles.body} id="contact">
            <div className={styles.innerBody}>
                <div className={styles.leftContent}>
                    <div className={styles.inquirySection}>
                        <div className={styles.title}>
                            Inquiries
                        </div>

                        <div className={styles.description}>
                            For any inquiries, questions or commendations,
                            <br />
                            please call:
                            <br />
                            <a className={styles.descriptionLink} href="tel:+1(587)891-9262">+1 (587) 891-9262</a>
                            <br />
                            <a className={styles.descriptionLink} href="tel:+1(249)989-4470">+1 (249) 989-4470</a>
                        </div>
                    </div>
                </div>


                <div className={styles.rightContent}>
                    <div className={styles.locationSection}>
                        <div className={styles.title}>
                            Head Office
                        </div>

                        <div className={styles.description}>
                            47-549 Yonge St,
                            <br />
                            Barrie, Ontario,
                            <br />
                            L4N 7P8
                        </div>

                        <div className={styles.description}>
                            Email: <a className={styles.descriptionLink} href="mailto:thetechguys787@gmail.com">thetechguys787@gmail.com</a>
                            <br />
                            Tel: <a className={styles.descriptionLink} href="tel:+1(587)891-9262">+1 (587) 891-9262</a>, <a className={styles.descriptionLink} href="tel:+1(249)989-4470">+1 (249) 989-4470</a>
                            <br />
                            Facebook: <a className={styles.descriptionLink} href="https://www.facebook.com/the.tech.guys.ca/">The Tech Guys</a>
                        </div>
                    </div>
                </div>


            </div>
            <div className={styles.copyrights}>
                © {(new Date().getFullYear())} by The Tech Guys.
            </div>
            {/* <div className={styles.websiteDeveloper}>
                
            </div> */}
        </div>
    )
}
