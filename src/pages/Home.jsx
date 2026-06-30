import React from "react";
import HeroSection from "@/components/home/HeroSection";
import ExperienceSection from "@/components/home/ExperienceSection";
import SoftwareSection from "@/components/home/SoftwareSection";
import ProjectsPreview from "@/components/home/ProjectsPreview";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ExperienceSection />
      <SoftwareSection />
      <ProjectsPreview />
    </>
  );
}