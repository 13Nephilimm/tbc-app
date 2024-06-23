"use client";

import AboutUsSection from "../../components/AboutUsSection/AboutUsSection";
import Footer from "../../components/Footer/Footer";
import HeroSection from "../../components/HeroSection/HeroSection";
import Layout from "../../components/Layout/Layout";
import WWOSection from "../../components/WhatWeOfferSection/WWOSection";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <AboutUsSection />
      <WWOSection />
      <Footer />
    </Layout>
  );
}
