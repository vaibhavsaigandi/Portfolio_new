// Skills data organized by category
const skillsData = {
  languages: [
    { name: "JavaScript", icon: "javascript/original" },
    { name: "TypeScript", icon: "typescript/original" },
    { name: "HTML5", icon: "html5/original" },
    { name: "CSS3", icon: "css3/original-wordmark" },
    { name: "Python", icon: "python/original-wordmark" },
    { name: "SQL", icon: "mysql/original-wordmark" }, // Using MySQL icon for SQL
    { name: "C", icon: "c/original" },
    { name: "C++", icon: "cplusplus/original" },
  ],

  frontendDevelopment: [
    { name: "React.js", icon: "react/original" },
    { name: "Angular", icon: "angularjs/original-wordmark" },
    { name: "Bootstrap", icon: "bootstrap/original" },
    { name: "BEM CSS", icon: "css3/original-wordmark" }, // No specific icon, using CSS3
    { name: "SASS", icon: "sass/original" },
    { name: "jQuery", icon: "jquery/original-wordmark" },
    { name: "Responsive Web Development", icon: "html5/original" }, // Using HTML5 as related icon
  ],

  backendDevelopment: [
    { name: "Node.js", icon: "nodejs/original-wordmark" },
    { name: "Express.js", icon: "express/original" },
    { name: "RESTful API Development", icon: "nodejs/original-wordmark" }, // Related to Node.js
    { name: "JWT Authentication", icon: "nodejs/original-wordmark" }, // Using Node.js as related icon
  ],

  databaseAndStorage: [
    { name: "MongoDB", icon: "mongodb/original-wordmark" },
    { name: "MongoDB Atlas", icon: "mongodb/original-wordmark" },
    { name: "SQL", icon: "mysql/original-wordmark" }, // Using MySQL icon for SQL
    { name: "Stored Procedures", icon: "mysql/original-wordmark" }, // Using MySQL icon
    { name: "Amazon S3", icon: "amazonwebservices/original-wordmark" },
  ],

  cloudAndDeployment: [
    { name: "AWS (EC2, S3, SES)", icon: "amazonwebservices/original-wordmark" },
    { name: "Docker", icon: "docker/original-wordmark" },
    { name: "Agile/Scrum", icon: "github/original-wordmark" }, // No specific icon, using GitHub
  ],

  automationAndTesting: [
    { name: "Atrium BAO", icon: "python/original-wordmark" }, // No specific icon, using Python
    { name: "Python-based Automation", icon: "python/original-wordmark" },
    { name: "Jest", icon: "jest/plain" },
    { name: "Cypress", icon: "nodejs/original-wordmark" }, // No specific icon, using Node.js
    { name: "PyTest", icon: "python/original-wordmark" },
  ],

  developerToolsAndCollaboration: [
    { name: "Git", icon: "git/original-wordmark" },
    { name: "VS Code", icon: "vscode/original" },
    { name: "Visual Studio", icon: "visualstudio/plain" },
    { name: "Figma", icon: "figma/original" },
    { name: "Webpack", icon: "webpack/original" },
    { name: "Jira", icon: "jira/original-wordmark" },
  ],
};

export default skillsData;
