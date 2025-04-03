import React from "react";

import Navbar from "@/module/navbar/Navbar";
import HeroSection from "@/module/heroSection/HeroSection";
import Services from "@/module/services/Services";

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar />
      <HeroSection />
      <Services />
    </div>
  );
}
