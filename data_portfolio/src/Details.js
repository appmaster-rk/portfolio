// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile.jpg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
// Porject Images
import projectImage1 from "./assets/projects/applock.jpg";
import projectImage2 from "./assets/projects/kidapp.jpg";
import projectImage3 from "./assets/projects/feature.jpg";
import projectImage4 from "./assets/projects/project4.jpg";
import projectImage5 from "./assets/projects/project5.jpg";
import projectImage6 from "./assets/projects/project6.jpg";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Raweeda Kousar",
  tagline: "Android App Developer",
  img: profile,
  about: `Over 6 years of Software Industry Experience in analysis design, development, testing, debugging and deploying java and kotlin mobile applications.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/raweeda-kousar-76a73a206/?originalSubdomain=pk",
  };

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Senior Software Engineer",
    Company: `Innovative Network Pvt Ltd`,
    Location: "Pakistan",
    Type: "Full Time",
    Duration: "Oct 2018 - May 2025",
  },
];

// Enter your Education Details here
export const eduDetails = [
  
  {
    Position: "Bachelor's degree",
    Company: `Karachi University`,
    Location: "Pakistan",
    Type: "Full Time",
    Duration: "March 2011 - April 2013",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  java:java,
  kotlin:kotlin,
  flutter:flutter,
  html: html,
  css: css,
  js: js,
  androidstudio: androidstudio,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "App Master Lock - AppLock",
    image: projectImage1,
    description: `Safeguard your privacy by locking your social media and system apps. Use a pattern or fingerprint to prevent unauthorized access. Keep your private conversations and personal data secure, away from prying eyes.`,
    techstack: "java",
    previewLink: "https://play.google.com/store/apps/details?id=com.ranmasterapp.ranapplock",
  
  },
  {
    title: "Learn Kids Corner",
    image: projectImage2,
    description: `The app has several sections, including body parts, alphabets, numbers, fruits, vegetables, animals, colours, shapes, quizzes, and poems. Discover the kids' area. The app has completely changed how people learn—from the classroom to their homes.`,
    techstack: "java",
    previewLink: "https://play.google.com/store/apps/details?id=com.ranmasterapp.learnkidscorner.app&hl=en_US",
  
  },
  {
    title: "Mini Offline Games",
    image: projectImage3,
    description: `Mini Offline Games**, your ultimate destination for hours of amusement! Packed with a diverse selection of classic and engaging games, this app is your one-stop shop for solo and group entertainment`,
    techstack: "kotlin,java",
    previewLink: "https://play.google.com/store/apps/details?id=com.ranmasterapp.minigame",
    
  },
  
];

// Enter your Contact Details here
export const contactDetails = {
  email: "raweeda.kousar@gmail.com",
  phone: "+92 346 3305923",
};
