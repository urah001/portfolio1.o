"use client";
import "./globals.css";
import { useEffect, useState } from "react";
import Loader from "@/components/loader";
import Content from "@/components/content";

const Home = () => {
  const [showLoader, setShowLoader] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Show loader after glitch effect
    const glitchTimeout = setTimeout(() => {
      setShowLoader(true);
    }, 1000); // Glitch effect duration

    // Show content after loader
    const loaderTimeout = setTimeout(() => {
      setShowContent(true);
    }, 5000); // Loader duration

    return () => {
      clearTimeout(glitchTimeout);
      clearTimeout(loaderTimeout);
    };
  }, []);

  return (
    <div>
      {!showLoader && !showContent ? (
        <div className="glitch"> WELCOME </div>
      ) : showLoader && !showContent ? (
        <Loader />
      ) : (
        <div className="content">
          {/* Your main content goes here */}
          <Content />
          {/* Add other content as needed */}
        </div>
      )}
    </div>
  );
};

export default Home;
