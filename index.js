import chalk from "chalk";
import boxen from "boxen";

const resume = {
  name: "Manoranjan Satpathy",
  title: "Backend/Fullstack Developer",
  contact: {
    email: "manosatpathy1@gmail.com",
    phone: "+91 7609906640",
    linkedin: "linkedin.com/in/manosatpathy",
    github: "github.com/manosatpathy",
    location: "Bhubaneswar, Odisha, India",
  },
  summary:
    "Fullstack Developer with expertise in modern web technologies and ability to build end-to-end applications. Strong foundation in frontend and backend development with focus on clean, scalable code. Quick learner adaptable to new technologies, eager to contribute in a collaborative team environment.",
  technicalSkills: {
    Frontend:
      "Javascript (ES6+), React.js, Typescript, Redux, Zustand, HTML5, CSS3, Tailwind CSS, Responsive Design",
    Backend:
      "Node.js, Express.js, Mongoose, Prisma, SQLite, Redis, RESTful APIs, Authentication (JWT, OAuth)",
    Database: "MongoDB, PostgreSQL, MySQL",
    DevOps: "Git, Github, CI/CD, Docker",
  },
  projects: [
    {
      name: "Auth",
      tech: "TypeScript, React, Express.js, MongoDB, Redis, JWT, Zod, TanStack Query",
      points: [
        "Architected production-ready authentication system with JWT refresh tokens, Redis session management, role-based access control, 2FA via OTP, CSRF protection, and bcrypt password encryption for enterprise-level security.",
        "Engineered Redis infrastructure for distributed caching, rate limiting, and session verification with real-time invalidation and single-session enforcement, reducing database queries by 70%.",
        "Implemented full-stack type-safety with Zod validation schemas shared across client (React Hook Form integration) and server, ensuring consistent data validation and sanitization at every layer.",
        "Developed automatic token refresh using Axios interceptors with intelligent request queuing, and built feature-rich admin dashboard for user management, role assignment.",
      ],
    },
    {
      name: "Havenly",
      tech: "TypeScript, React, Node.js, Express.js, MongoDB, Stripe API, Playwright",
      points: [
        "Developed full-stack hotel booking platform with secure authentication, interactive date selection, and advanced search with multi-parameter filtering (location, price, amenities, dates).",
        "Integrated Stripe payment gateway with secure checkout flow, handling payment processing, booking confirmations, and transaction management for seamless user experience.",
        "Implemented Cloudinary-based image management with Multer for file uploads, automatic compression, and optimized delivery.",
        "Implemented comprehensive end-to-end testing using Playwright for automated validation of critical user flows across multiple browsers.",
      ],
    },
  ],
  certifications: [
    "Full Stack Web Development, 100xDevs.com (2024)",
    "High Level System Design, Educosys.com (2024)",
    "ReactJs Developer, NamasteDev.com (2023)",
  ],
  education: [
    {
      degree: "Master of Business Administration",
      institution: "Rajdhani College of Engineering and Management",
      location: "Bhubaneswar, Odisha",
      duration: "Aug. 2018 – Jun 2020",
    },
    {
      degree: "Bachelor of Business Administration",
      institution: "College of Management and Technology",
      location: "Puri, Odisha",
      duration: "Aug. 2015 – May 2018",
    },
  ],
};

function displayResume() {
  console.clear();

  const headerContent = `${chalk.bold.white(resume.name)}\n${chalk.cyan(
    resume.title
  )}\n${resume.contact.email}   ${resume.contact.phone}
 ${resume.contact.linkedin}   ${resume.contact.github}
 ${resume.contact.location}`;

  const headerBox = boxen(headerContent, {
    padding: 1,
    borderStyle: "double",
    borderColor: "cyan",
    textAlignment: "center",
    width: 70,
  });
  console.log(headerBox);

  // Summary
  console.log(
    chalk.bold.yellow(
      "\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    )
  );
  console.log(chalk.bold.white("SUMMARY"));
  console.log(
    chalk.bold.yellow(
      "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    )
  );
  console.log(chalk.gray(resume.summary));

  // Technical Skills
  console.log(
    chalk.bold.yellow(
      "\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    )
  );
  console.log(chalk.bold.white("TECHNICAL SKILLS"));
  console.log(
    chalk.bold.yellow(
      "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    )
  );

  Object.entries(resume.technicalSkills).forEach(([category, skills]) => {
    console.log(chalk.bold.cyan(`${category}:`) + chalk.gray(` ${skills}`));
  });

  // Projects
  console.log(
    chalk.bold.yellow(
      "\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    )
  );
  console.log(chalk.bold.white("PROJECTS"));
  console.log(
    chalk.bold.yellow(
      "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    )
  );

  resume.projects.forEach((project, index) => {
    console.log(
      chalk.bold.white(`\n${project.name}`) + chalk.gray(` | ${project.tech}`)
    );
    project.points.forEach((point) => {
      console.log(chalk.gray(`• ${point}`));
    });
    if (index < resume.projects.length - 1) {
      console.log();
    }
  });

  // Certifications
  console.log(
    chalk.bold.yellow(
      "\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    )
  );
  console.log(chalk.bold.white("CERTIFICATION"));
  console.log(
    chalk.bold.yellow(
      "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    )
  );
  resume.certifications.forEach((cert) => {
    console.log(chalk.gray(`• ${cert}`));
  });

  // Education
  console.log(
    chalk.bold.yellow(
      "\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    )
  );
  console.log(chalk.bold.white("EDUCATION"));
  console.log(
    chalk.bold.yellow(
      "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    )
  );

  resume.education.forEach((edu) => {
    console.log(
      chalk.bold.white(`${edu.institution}`) + chalk.gray(` ${edu.location}`)
    );
    console.log(chalk.gray(`${edu.degree}`) + chalk.cyan(` ${edu.duration}`));
    console.log();
  });
}

displayResume();
