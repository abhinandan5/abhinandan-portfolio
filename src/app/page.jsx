'use client';

import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import HeroSection from '../../components/Hero';
import AboutSection from '../../components/About';
import SkillsSection from '../../components/SkillsSection';
import ExperienceSection from '../../components/Experience';
import ProjectsSection from '../../components/Projects';
import ContactSection from '../../components/Contact';
import Footer from '../../components/Footer';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // All your resume data in one place
  const portfolioData = {
    name: "Abhinandan",
    title: "Full Stack Developer",
    summary: "Versatile and detail-oriented Full Stack Developer with hands-on experience in modern frontend & backend technologies including JavaScript, React.js, Next.js, and Node.js. Proficient in SQL and NoSQL, version control tools like Git/GitHub, with strong problem-solving abilities.",
    contact: {
      phone: "+91 96021 89253",
      email: "abhinandan.nitraipur@gmail.com",
      linkedin: "https://linkedin.com/in/abhinandan5",
      github: "https://github.com/abhinandan5",
      location: "Gurugram, Haryana, India"
    },
    experience: [
      {
        role: "Frontend Developer",
        company: "Kollege Apply",
        period: "Jul 2025 - Aug 2025",
        description: [
          "Revamped legacy website using Next.js, Tailwind CSS, TypeScript and GitHub-based workflows.",
          "Designed & launched new NPS modal, Career, Author pages, and Trending search feature.",
          "Extended CMS with new functionalities and maintained the Courses Listing page.",
          "Solely architecting and building the new Online Home Page for improved UX and performance."
        ],
      },
      {
        role: "Software Developer Intern",
        company: "iHub AWADH, IIT Ropar",
        period: "Jan 2025 - Feb 2025",
        description: [
          "Developed a block-based coding platform using React and Scratch Blocks, reducing onboarding time by 30%.",
          "Built intuitive drag-and-drop UI, improving coding efficiency by 40%.",
          "Optimized responsiveness with Tailwind CSS, boosting load speed by 25%.",
          "Enhanced modular UI using Google Blockly."
        ],
      }
    ],
    projects: [
      {
        name: "WellShareMed.org",
        tech: ["Next.js", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
        description: "A city-wide medicine donation platform connecting 150+ users/month. Optimized frontend improving TTI by 20% and built backend APIs handling 50+ weekly donation requests. Implemented JWT authentication and role-based access.",
        link: "#", // Add live demo link
      },
      {
        name: "LEGALHUB (AI-based Law Advisor)",
        tech: ["React", "GPT-3 API", "Vercel"],
        description: "An AI-powered legal advisor processing 1,000+ user queries. Integrated REST APIs for dynamic content delivery. Enhanced engagement by 25% through optimized UI and reduced load time by 15%.",
        link: "#", // Add live demo link
      }
    ],
    skills: {
      languages: ["JavaScript (ES6+)", "Python", "C", "C++", "SQL"],
      frontend: ["HTML5", "CSS3 (SASS)", "React", "Next.js", "Redux", "Tailwind CSS", "Bootstrap"],
      backend: ["Node.js", "Express.js", "RESTful APIs"],
      databases: ["MySQL", "MongoDB"],
      tools: ["Git", "GitHub", "GitLab", "Webpack", "Vite", "Postman", "Figma", "VS Code"]
    },
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 150;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-gray-900">
      <Header
        scrollToSection={scrollToSection}
        activeSection={activeSection}
        name={portfolioData.name}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <main>
        <HeroSection
          name={portfolioData.name}
          title={portfolioData.title}
          contact={portfolioData.contact}
          scrollToSection={scrollToSection}
        />
        <AboutSection summary={portfolioData.summary} />
        <SkillsSection skills={portfolioData.skills} />
        <ExperienceSection experience={portfolioData.experience} />
        <ProjectsSection projects={portfolioData.projects} />
        <ContactSection contact={portfolioData.contact} />
      </main>
      <Footer name={portfolioData.name} />
    </div>
  );
}