import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage.jsx";
import AboutUsPage from "./components/AboutUsPage.jsx";
import ServiceDetail from "./components/ServiceDetail.jsx";
import ContactPage from "./components/contact.jsx";
import NewsTemplate from "./components/NewsTemplate.jsx";
import NewsArchive from "./components/NewsArchive.jsx";
import { AdminLogin, Dashboard } from "./adminroutes/index.js";
import GalleryPage from "./components/GalleryPage.jsx";
import ReviewsDemo from "./components/ReviewsDemo.jsx";
import Wellness from "./components/Wellness.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route
          path="/service"
          element={<ServiceDetail serviceId="anti-aging" />}
        />
        <Route path="/service/:id" element={<ServiceDetail />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/news" element={<NewsArchive />} />
        <Route path="/newstemplate" element={<NewsTemplate />} />
        <Route path="/news/:slug" element={<NewsTemplate />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<Dashboard />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/reviews-demo" element={<ReviewsDemo />} />
        <Route path="/wellness" element={<Wellness />} />
      </Routes>
    </Router>
  );
}
