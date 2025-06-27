import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const HeroSection = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const [currentWord, setCurrentWord] = useState(0);

  const animatedWords = ["WEB", "WORK", "WAY"];

  useEffect(() => {
    setIsAnimated(true);
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % animatedWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-secondary-dark to-primary-dark">
        <div className="absolute inset-0 opacity-20">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-accent rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* 3D Logo Animation */}
        <div className={`mb-8 transform transition-all duration-1000 ${isAnimated ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
          <div className="relative inline-block">
            <div className="w-32 h-32 bg-gradient-to-br from-accent to-gold rounded-2xl flex items-center justify-center transform hover:scale-110 transition-premium shadow-glow animate-pulse-subtle">
              <span className="text-primary font-bold text-6xl font-jetbrains">W</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-accent to-gold rounded-2xl opacity-0 hover:opacity-30 blur-xl transition-premium"></div>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className={`text-5xl md:text-7xl font-bold text-text-primary-dark mb-6 transform transition-all duration-1000 delay-300 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <span className="block mb-2">YOUR</span>
          <span className="text-gradient inline-block transition-all duration-500">
            {animatedWords[currentWord]}
          </span>
        </h1>

        {/* Tagline */}
        <p className={`text-xl md:text-2xl text-text-secondary-dark mb-8 max-w-3xl mx-auto transform transition-all duration-1000 delay-500 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          Where creativity meets technology. Transform your digital presence with precision craftsmanship and innovative solutions.
        </p>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transform transition-all duration-1000 delay-700 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <button className="bg-conversion hover:bg-conversion-light text-white px-8 py-4 rounded-lg font-semibold text-lg transition-premium transform hover:scale-105 shadow-glow animate-pulse-subtle flex items-center space-x-2">
            <span>Start Your Project</span>
            <Icon name="ArrowRight" size={20} />
          </button>
          
          <Link
            to="/portfolio-laboratory-results-showcase"
            className="border border-accent text-accent hover:bg-accent hover:text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-premium transform hover:scale-105 flex items-center space-x-2"
          >
            <span>View Portfolio</span>
            <Icon name="ExternalLink" size={20} />
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex flex-col items-center space-y-2 text-text-secondary-dark">
            <span className="text-sm font-medium">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
              <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 border border-accent/30 rounded-lg transform rotate-45 animate-pulse-subtle hidden lg:block"></div>
      <div className="absolute top-1/3 right-10 w-16 h-16 bg-gradient-to-br from-gold/20 to-accent/20 rounded-full animate-pulse-subtle hidden lg:block"></div>
      <div className="absolute bottom-1/4 left-1/4 w-12 h-12 border-2 border-gold/40 rounded-full animate-pulse-subtle hidden lg:block"></div>
    </section>
  );
};

export default HeroSection;