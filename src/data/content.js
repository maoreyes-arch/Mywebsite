// Edit your information here. The components read everything from this file.

export const profile = {
  name: "Mariane Angelyn Reyes",
  fullName: "Mariane Angelyn O. Reyes",
  firstName: "Mariane",
  role: "BSIT Student • Student Leader",
  footerLine: "BSIT-WMAD • 3rd Year • Future Information Technologist",
  photo: "mari.png", // put your photo in the /public folder
  email: "marianeangelyn06@gmail.com",
  github: "https://github.com/maoreyes-arch",
  githubLabel: "github.com/maoreyes-arch",
  linkedin: "https://linkedin.com/in/mariane-reyes",
  linkedinLabel: "linkedin.com/in/mariane-reyes",
  facebook: "#",
};

export const navItems = [
  { id: "home", label: "Home", icon: "fa-house" },
  { id: "about", label: "About Me", icon: "fa-user" },
  { id: "education", label: "Education", icon: "fa-graduation-cap" },
  { id: "skills", label: "Skills", icon: "fa-code" },
  { id: "projects", label: "Projects", icon: "fa-folder-open" },
  { id: "contact", label: "Contact", icon: "fa-envelope" },
];

export const heroStats = [
  { label: "Year", value: "3rd Year" },
  { label: "Age", value: "20 years old" },
  { label: "Birthdate", value: "October 28, 2006" },
];

export const aboutLead =
  "I am Mariane Angelyn Reyes, a Bachelor of Science in Information Technology student at Nueva Vizcaya State University.";

export const aboutParagraphs = [
  "My journey in IT has allowed me to explore programming, web development, databases, systems analysis, and different technology-based projects.",
  "Aside from academics, I also value leadership, communication, teamwork, and service. I have been involved in student organizations where I gained experience in public relations, documentation, editing, and organizing activities.",
  "I believe that technology is not only about building systems. It is also about understanding people's needs and creating solutions that can make things easier, more organized, and more meaningful.",
];

export const aboutInfo = [
  { label: "NAME", value: "Mariane Angelyn O. Reyes" },
  {
    label: "COURSE",
    value: "BS Information Technology, Major in Web Mobile Application and Development",
  },
  { label: "UNIVERSITY", value: "Nueva Vizcaya State University" },
];

export const education = [
  {
    date: "PRESENT",
    title: "Bachelor of Science in Information Technology",
    school: "Nueva Vizcaya State University",
    text: "Currently developing skills in programming, web development, databases, systems analysis, software engineering, networking, and system integration.",
  },
  {
    date: "SENIOR HIGH SCHOOL",
    title: "Solano High School",
    school: "Academic Background",
    text: "Developed an early interest in technology, communication, school activities, and digital content creation.",
  },
];

export const skillGroups = [
  {
    icon: "fa-terminal",
    title: "Programming",
    text: "Languages I have used for academic and personal projects.",
    tags: ["Java", "JavaScript", "HTML", "CSS"],
  },
  {
    icon: "fa-database",
    title: "Database",
    text: "Experience working with structured data and database concepts.",
    tags: ["SQL", "SQLite", "Database Design"],
  },
  {
    icon: "fa-globe",
    title: "Web Development",
    text: "Creating responsive and user-friendly websites.",
    tags: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
  },
  {
    icon: "fa-screwdriver-wrench",
    title: "Tools",
    text: "Tools that support my development and academic work.",
    tags: ["VS Code", "Git", "GitHub", "Canva"],
  },
];

export const techList = [
  "Java", "HTML", "CSS", "JavaScript", "Bootstrap",
  "SQL", "SQLite", "Git", "GitHub", "VS Code",
];

export const projects = [
  {
    number: "01",
    icon: "fa-laptop-code",
    alt: false,
    category: "SYSTEM DEVELOPMENT",
    title: "My Personal Website",
    text: "This personal website was one of our final projects during my 2nd year of college for our subject under Ma’am Kayle. The project was created to apply what we learned about web development, particularly in designing and developing a functional and user-friendly website.",
    tech: ["HTML", "CSS", "JavaScript", "Database"],
  },
  {
    number: "02",
    icon: "fa-boxes-stacked",
    alt: true,
    category: "SYSTEM DEVELOPMENT",
    title: "Inventory Transaction Tracking System",
    text: "This is our current project topic, which has already been approved by our instructor. We are still working on the paperwork, research, and initial planning before proceeding with the actual system development.",
    tech: ["Java", "SQL", "Database"],
  },
];
