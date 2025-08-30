// app/page.jsx
'use client';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SkillsMarquee from '@/components/SkillsMarquee';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  const portfolioData = {
    name: "Abhinandan",
    summary: "Versatile and detail-oriented Software Developer with hands-on experience in modern frontend & backend technologies including JavaScript, React.js, Next.js, and Node.js. Proficient in SQL and NoSQL, version control tools like Git/GitHub, with strong problem-solving abilities.",
    contact: {
      phone: "+91 96021 89253",
      email: "abhinandan.nitraipur@gmail.com",
      linkedin: "https://linkedin.com/in/abhinandan5",
      github: "https://github.com/abhinandan5",
      location: "Gurugram, India"
    },
    education: [
      {
        degree: "Master of Computer Applications",
        institution: "National Institute of Technology, Raipur",
        period: "Aug 2022 - June 2025",
      },
      {
        degree: "Bachelor of Science in Computer Science",
        institution: "Panjab University, Chandigarh",
        period: "Aug 2019 - May 2022",
      }
    ],
    experience: [
      {
        role: "Frontend Developer",
        company: "Kollege Apply",
        period: "Jul 2025 - Aug 2025",
        description: [
          "Revamped legacy website using Next.js, Tailwind CSS, and TypeScript.",
          "Designed & launched new NPS modal, Career, and Author pages.",
          "Extended CMS with new functionalities for better content management.",
        ],
      },
      {
        role: "Software Developer Intern",
        company: "iHub AWADH, IIT Ropar",
        period: "Jan 2025 - Feb 2025",
        description: [
          "Developed a block-based coding platform using React and Scratch Blocks.",
          "Built an intuitive drag-and-drop UI, improving coding efficiency by 40%.",
          "Optimized responsiveness with Tailwind CSS, boosting load speed by 25%.",
        ],
      },
    ],
    projects: [
      {
        name: "WellShareMed.org",
        tech: ["Next.js", "Tailwind CSS", "Node.js", "MongoDB"],
        description: "A city-wide medicine donation platform connecting over 150 users per month.",
        link: "https://well-share-med.vercel.app/",
        image: "/project-wellsharemed.png",
      },
      {
        name: "LEGALHUB (AI Law Advisor)",
        tech: ["React", "GPT-3 API", "Vercel"],
        description: "An AI-powered legal advisor designed to process and answer thousands of user queries.",
        link: "https://legalhub-1a28.vercel.app/",
        image: "/project-legalhub.png",
      },
      {
        name: "NewsFolio Dashboard",
        tech: ["Next.js", "Tailwind CSS"],
        description:
          "A feature-rich, responsive dashboard for viewing, filtering, and analyzing news articles. Includes administrative tools for calculating and exporting author payouts.",
        link: "https://newsfolio-dashboard-git-main-abhinandan5s-projects.vercel.app/",
        image: "/project-newsFolio.png",
      },
      {
        name: "ShopSphere - E-Commerce",
        tech: ["Next.js", "Tailwind CSS", "React"],
        description:
          "A modern, responsive e-commerce front-end built as part of the WhatBytes frontend developer assignment. Features an interactive, user-friendly shopping experience.",
        link: "https://shopsphere-taupe.vercel.app/",
        image: "/project-eCommerce.png",
      },

    ],
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#111111]">
      <Header scrollToSection={scrollToSection} />
      <main>
        <Hero contact={portfolioData.contact} scrollToSection={scrollToSection} />
        <SkillsMarquee />
        <About summary={portfolioData.summary} />
        <Experience experience={portfolioData.experience} />
        <Projects projects={portfolioData.projects} />
        <Contact contact={portfolioData.contact} />
      </main>
      <Footer name={portfolioData.name} />
    </div>
  );
}