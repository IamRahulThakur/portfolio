/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Rahul's Portfolio",
  description:
    "Backend Software Engineer specializing in Node.js, MongoDB, Redis, WebSockets, and scalable real-time systems. Built Pairverse and AgriLink with production-grade architecture.",
  og: {
    title: "Rahul Pratap Singh | Backend Engineer",
    type: "website",
    url: "https://rahulpratapsingh.dev/",
  },
};

//Home Page
const greeting = {
  title: "Rahul Pratap Singh",
  logo_name: "Rahul",
  nickname: "Rahul",
  subTitle:
    "Backend Software Engineer focused on building scalable APIs, real-time systems with Socket.io, and secure backend architectures using Node.js, Express, MongoDB, Redis, and WebSockets.",
  resumeLink:
    "https://drive.google.com/file/d/1GdXeFc5jy5pzm-VGO-qTaqIhDKHTXN_L/view?usp=sharing", // UPDATE THIS with your actual Google Drive link
  portfolio_repository: "https://github.com/IamRahulThakur/portfolio",
  githubProfile: "https://github.com/IamRahulThakur",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/IamRahulThakur",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/rahulpratapsingh01/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Gmail",
    link: "mailto:ace.rahulthakur@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
  {
    name: "LeetCode",
    link: "https://leetcode.com/u/thakurrahuljadaun/",
    fontAwesomeIcon: "fa-code", // LeetCode icon
    backgroundColor: "#FFA116",
  },
  {
    name: "X-Twitter",
    link: "https://x.com/jadaunrahul01",
    fontAwesomeIcon: "fa-x-twitter",
    backgroundColor: "#000000",
  },
];

const skills = {
  data: [
    {
      title: "Backend Development",
      fileName: "BackendImg",
      skills: [
        "⚡ Building scalable REST APIs with Node.js and Express.js",
        "⚡ Implementing real-time communication systems using Socket.io and WebSockets",
        "⚡ Designing efficient database schemas and complex aggregation pipelines in MongoDB",
        "⚡ Performance optimization using Redis caching (40% DB read reduction achieved)",
        "⚡ Implementing secure authentication with JWT and role-based access control (RBAC)",
      ],
      softwareSkills: [
        {
          skillName: "Node.js",
          fontAwesomeClassname: "logos:nodejs-icon",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Express.js",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "logos:mongodb-icon",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Redis",
          fontAwesomeClassname: "logos:redis",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Socket.io",
          fontAwesomeClassname: "simple-icons:socketdotio",
          style: {
            color: "#010101",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "logos:javascript",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "JWT",
          fontAwesomeClassname: "simple-icons:jsonwebtokens",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Postman",
          fontAwesomeClassname: "simple-icons:postman",
          style: {
            color: "#FF6C37",
          },
        },
      ],
    },
    {
      title: "Frontend & Full Stack",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive single-page applications using React.js",
        "⚡ Integrating frontend with Node.js/Express backends for seamless data flow",
        "⚡ Implementing client-side authentication and protected routing",
        "⚡ State management and API integration for optimal user experience",
        "⚡ Styling with Tailwind CSS for modern, responsive interfaces",
      ],
      softwareSkills: [
        {
          skillName: "React.js",
          fontAwesomeClassname: "logos:react",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "logos:javascript",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "logos:html-5",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "logos:css-3",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Tailwind CSS",
          fontAwesomeClassname: "logos:tailwindcss-icon",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Cloud & DevOps",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Deploying applications on cloud platforms (AWS EC2, Render, Vercel)",
        "⚡ Managing environment variables and configuration for different environments",
        "⚡ Experience with Git version control and GitHub workflows",
        "⚡ API testing and documentation using Postman",
        "⚡ Integrating third-party services (Cloudinary for media storage)",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "logos:aws",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "logos:git-icon",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "logos:github-icon",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Vercel",
          fontAwesomeClassname: "logos:vercel-icon",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Cloudinary",
          fontAwesomeClassname: "logos:cloudinary-icon",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Data Structures & Algorithms",
      fileName: "DataStructuresImg",
      skills: [
        "⚡ Strong foundation in Data Structures and Algorithms",
        "⚡ 550+ problems solved on LeetCode (Top 18%, Rating: 1636)",
        "⚡ Proficient in C++ for competitive programming",
        "⚡ Problem-solving patterns: arrays, strings, trees, graphs, dynamic programming",
        "⚡ Understanding of time and space complexity analysis",
      ],
      softwareSkills: [
        {
          skillName: "C++",
          fontAwesomeClassname: "logos:c-plusplus",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "LeetCode",
          fontAwesomeClassname: "simple-icons:leetcode",
          style: {
            color: "#FFA116",
          },
        },
        {
          skillName: "Algorithms",
          fontAwesomeClassname: "carbon:algorithm",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/thakurrahuljadaun/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Shri Mata Vaishno Devi University",
      subtitle: "B.Tech in Computer Science and Engineering",
      logo_path: "smvdu_logo.png", // You'll need to add this logo to your public folder
      alt_name: "SMVDU Katra",
      duration: "2021 - 2025",
      descriptions: [
        "⚡ CGPA: 7.5/10.0",
        "⚡ Studied core CS subjects: Data Structures & Algorithms, OOP, DBMS, Operating Systems, System Design Fundamentals",
        "⚡ Selected as Software Engineer at Tech Mahindra (2025) via campus placement",
        "⚡ Built production-grade projects: Pairverse (Developer Collaboration) and AgriLink (Marketplace)",
      ],
      website_link: "https://www.smvdu.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    // Add your certifications here if you have any
    // For now, this is empty - you can add courses/certifications you've completed
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work & Internship",
  description:
    "I have worked as a Freelance Full Stack Developer and interned at a software company, building scalable backend systems, RESTful APIs, and responsive interfaces using Node.js, Express.js, React.js, and MongoDB.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Freelance Software Engineer",
          company: "Remote",
          company_url: "https://github.com/IamRahulThakur",
          logo_path: "freelance_logo.png",
          duration: "Nov 2025 - Feb 2026",
          location: "Remote",
          description:
            "Extended marketplace backend workflows to support role-based job posting, hiring flows, and user interactions. Modeled structured data schemas for job requests, vendor services, and lead pipelines. Implemented role-aware access control and messaging restrictions for secure platform interactions.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Software Engineer Intern",
          company: "Salesqueen Software Solutions",
          company_url: "https://salesqueensoftware.com/",
          logo_path: "salesqueen_logo.png",
          duration: "July 2024 - October 2024",
          location: "Remote",
          description:
            "Built responsive React.js interfaces integrated with Node.js/Express backends to ensure seamless data flow. Collaborated on API design and state management to optimize communication between frontend and MongoDB. Engineered client-side authentication and protected routing using JWT for secure session management.",
          color: "#ee3c26",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I build full-stack and backend-focused projects using Node.js, Express.js, MongoDB, Redis, Socket.io, and React.js. My projects feature production-grade architecture including real-time communication, secure authentication (JWT+RBAC), Redis caching, and cloud deployments on Render and Vercel.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on LinkedIn, GitHub, and email. You can message me, I will reply within 24 hours. I can help you with Node.js, Express.js, React.js, MongoDB, Redis, WebSockets, and full-stack web development.",
  },
  blogSection: {
    title: "LeetCode",
    subtitle:
      "I actively practice Data Structures & Algorithms on LeetCode. I have solved 550+ problems with a rating of 1636 (Top 18%).",
    link: "https://leetcode.com/u/thakurrahuljadaun/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Location",
    subtitle: "Uttarakhand, India",
    locality: "Haridwar",
    country: "India",
    region: "Uttarakhand",
    postalCode: "249407",
    streetAddress: "Haridwar",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/bP5DZjPYhJJ9RJRQ6",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91-9997781782",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
