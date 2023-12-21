// HomePage.jsx

import React from 'react';
import NavBar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import Footer from '../components/Footer';

const HomePage = () => (
  <main>
    <NavBar />
    <HeroSection />
    <FeaturesSection />
    <Footer />
  </main>
);

export default HomePage;
