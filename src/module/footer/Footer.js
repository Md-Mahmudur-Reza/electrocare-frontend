import React from 'react'

import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <div className={styles.body}>
            <div className={styles.innerBody}>
                <div className={styles.leftContent}>
                    <div className={styles.inquirySection}>
                        <div className={styles.title}>
                            Inquiries
                        </div>

                        <div className={styles.description}>
                            For any inquiries, questions or commendations,
                            <br />
                            please call: 123-456-7890 or
                            <br />
                            fill out the following form
                        </div>
                    </div>
                </div>


                <div className={styles.rightContent}>
                    <div className={styles.locationSection}>
                        <div className={styles.title}>
                            Head Office
                        </div>

                        <div className={styles.description}>
                            500 Terry Francine Street
                            <br />
                            San Francisco, CA 94158
                        </div>

                        <div className={styles.description}>
                            info@mysite.com
                            <br />
                            Tel: 123-456-7890
                            <br />
                            Fax: 123-456-7890
                        </div>
                    </div>
                </div>


            </div>
            <div className={styles.copyrights}>
                © {(new Date().getFullYear())} by Sphere Constructions.
            </div>
            {/* <div className={styles.websiteDeveloper}>
                
            </div> */}
        </div>
    )
}
