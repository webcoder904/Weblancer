import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import Header from "components/ui/Header";
import NotFound from "pages/NotFound";
import HomepagePremiumFreelancePlatform from "pages/homepage-premium-freelance-platform";
import AboutMethodologyTrustBuilding from "pages/about-methodology-trust-building";
import PortfolioLaboratoryResultsShowcase from "pages/portfolio-laboratory-results-showcase";
import ServicesUniverseInteractiveExploration from "pages/services-universe-interactive-exploration";
import KnowledgeCenterThoughtLeadership from "pages/knowledge-center-thought-leadership";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop />
        <Header />
        <RouterRoutes>
          <Route path="/" element={<HomepagePremiumFreelancePlatform />} />
          <Route path="/homepage-premium-freelance-platform" element={<HomepagePremiumFreelancePlatform />} />
          <Route path="/portfolio-laboratory-results-showcase" element={<PortfolioLaboratoryResultsShowcase />} />
          <Route path="/services-universe-interactive-exploration" element={<ServicesUniverseInteractiveExploration />} />
          <Route path="/knowledge-center-thought-leadership" element={<KnowledgeCenterThoughtLeadership />} />
          <Route path="/about-methodology-trust-building" element={<AboutMethodologyTrustBuilding />} />
          <Route path="*" element={<NotFound />} />
        </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;