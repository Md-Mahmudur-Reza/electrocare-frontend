"use client";

import React, { useState } from 'react';
import styles from "./ServiceBooking.module.css";
import { format } from 'date-fns';

const availableTimes = {
    '2025-06-16': ["10:00 am", "10:30 am", "11:00 am", "11:30 am", "12:00 pm", "12:30 pm", "1:00 pm", "1:30 pm", "2:00 pm", "2:30 pm"],
    '2025-06-17': ["11:00 am", "12:00 pm"],
    // Add more dates and times here
};

export default function ServiceBooking() {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [selectedService, setSelectedService] = useState("Home Appliance");

    const handleDateChange = (e) => {
        setSelectedDate(e.target.value);
        setSelectedTime(null);
    };

    const renderTimeSlots = () => {
        const dateStr = format(new Date(selectedDate), 'yyyy-MM-dd');
        const times = availableTimes[dateStr] || [];
        return times.map(time => (
            <button
                key={time}
                className={`${styles.timeSlot} ${selectedTime === time ? styles.activeTime : ''}`}
                onClick={() => setSelectedTime(time)}>
                {time}
            </button>
        ));
    };

    return (
        <div className={styles.body}>
            <div className={styles.bookingSection}>
                <div className={styles.title}>Schedule your service</div>
                <div className={styles.subtitle}>Check out our availability and book the date and time that works for you</div>
                <div className={styles.scheduler}>
                    <label className={styles.label}>Select a Date:</label>
                    <input type="date" onChange={handleDateChange} className={styles.datePicker} />

                    {selectedDate && (
                        <>
                            <div className={styles.timeSlots}>{renderTimeSlots()}</div>

                            <div className={styles.serviceDetails}>
                                {/* <h3 >Service Details</h3> */}
                                <label className={styles.label}>Select Service:</label>
                                <br></br>
                                <select value={selectedService} onChange={(e) => setSelectedService(e.target.value)}>
                                    <option value="Home Appliance">Home Appliance</option>
                                    <option value="Electrical Wiring">Electrical Wiring</option>
                                    <option value="HVAC Installation and Maintenance">HVAC Installation and Maintenance</option>
                                </select>

                                {selectedTime && (
                                    <div className={styles.summary}>
                                        <label className={styles.label}>Service Details :</label>
                                        <p className={styles.subtitle}><strong>{selectedService}</strong></p>
                                        <p className={styles.subtitle}>{format(new Date(selectedDate), 'MMMM d, yyyy')} at {selectedTime}</p>
                                        <button className={styles.nextButton}>Next</button>
                                    </div>
                                )}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
