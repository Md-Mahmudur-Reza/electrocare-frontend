import React from "react";

import Navbar from "@/module/navbar/Navbar";
import ServiceBooking from "@/module/serviceBooking/ServiceBooking";

import styles from "./page.module.css";


export default function Booking() {
    return (
        <div className={styles.page}>
            <Navbar />
            <ServiceBooking />
        </div>
    );
}
