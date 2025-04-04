import React from "react";

import Navbar from "@/module/navbar/Navbar";
import HeroSection from "@/module/heroSection/HeroSection";
import Services from "@/module/services/Services";
import About from "@/module/about/About";
import Projects from "@/module/projects/Projects";
import Footer from "@/module/footer/Footer";

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar />
      <HeroSection />
      <Services />
      <About />
      {/* <Projects /> */}
      <Footer />
    </div>
  );
}
