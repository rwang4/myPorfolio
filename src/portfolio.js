/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: false // set to false to use static SVG
};

const greeting = {
  username: "Ricky Wang",
  title: "Hey, I'm Ricky",
  subTitle: emoji(
    `A forward-thinking Full Stack Software Engineer 🚀 with experience in different aspects of the software development lifecycle and end-to-end project management, from concept to development.`
  ),
  resumeLink:
    "https://drive.google.com/file/d/1SZHlURIjdQWxEUdoFJCgh8BQ_OxbMxWC/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/rwang4",
  linkedin: "https://linkedin.com/in/ricky-wang-65232b177",
  gmail: "rickywang1123@gmail.com",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "My Tech Stack",
  subTitle: emoji(
    "⚡ PASSIONATE FULL STACK DEVELOPER WHO IS KEEN ON EXPLORING EVERY TECH STACK"
  ),
  skills: [
    "✨ Develop highly interactive and user friendly Front end / User Interfaces for your web and mobile applications",
    "✨ Integration of Cloud services such as AWS / Firebase",
    "✨ Progressive Web Applications ( PWA ) in normal and SPA Stacks",
    "✨ Well-organized and customer-focused with proven skills in project management and team leadership."
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "C/C++",
      fontAwesomeClassname: "fab fa-cuttlefish"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "React/Redux",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "SQL-Database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Dart/Flutter",
      image: require("./assets/images/flutter-icon.svg")
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "WordPress",
      fontAwesomeClassname: "fab fa-wordpress"
    },
    {
      skillName: "Figma",
      fontAwesomeClassname: "fab fa-figma"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Alberta",
      logo: require("./assets/images/UA_logo.png"),
      subHeader: "Bachelor of Science: Computing Science",
      duration: "September 2016 - June 2021",
      desc: "Achievements:",
      descBullets: [
        "Dean's Honor Roll",
        "Published a research paper - Ensemble Learning For Mega Man Level Generation on FDG-2021",
        "Graduated in Bachelor of Science with Honor",
        "Average GPA 3.5"
      ]
    },
    {
      schoolName: "University-Hill Secondary School",
      logo: require("./assets/images/uhill-logo.jpg"),
      subHeader: "High School Diploma",
      duration: "March 2013 - June 2016",
      desc: "Achievements:",
      descBullets: [
        "Founder and President of Golf Club",
        "Vice-President of Music Club",
        "Over 100 hours of volunteer activities"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "UI/UX Design",
      progressPercentage: "80%"
    },
    {
      Stack: "Algorithms & Data Structures",
      progressPercentage: "90%"
    },
    {
      Stack: "Cloud Computing",
      progressPercentage: "65%"
    },
    {Stack: "Machine Learning / Data Science", progressPercentage: "55%"}
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Developer",
      company: "Fathom Scientific Ltd.",
      companylogo: require("./assets/images/FSL_logo.png"),
      date: "Dec 2021 - Current",
      descBullets: [
        "Responsible for leading and developing the QiQuac Mobile App Project, including application design and launching.",
        "Plan and provide advice to the full stack developing of the Timeseries Web App Project.",
        "In charge of assigning tickets to guide project outline and to achieve milestones.",
        "Design and develop significant features such as SD Station Migration, SD Calculation and SQL Table.",
        "Provide support to investors and specialized customers groups.",
        "Utilities: Dart, Flutter, Django, Docker, React, SQLite"
      ]
    },
    {
      role: "Lead Full Stack Developer",
      company: "The Pet App INC.",
      companylogo: require("./assets/images/thepetapp.png"),
      date: "Sep 2020 - July 2022",
      descBullets: [
        "Promoted to Lead Developer after 6-month internship in 2020.",
        "Design and develop cross platform mobile application for Android and iOS using Flutter and Firebase.",
        "Generate production-ready code with fluency in modern front-end and back-end frameworks.",
        "Lead the development of user authentication, direct message features, map-based user interaction, and geolocation features. Revision resulting in improved user experience and increasing data update by 15%.",
        "Document all supported packages and applications to effectively train new team members.",
        "Utilities: Dart, Flutter, Firebase, BLoC"
      ]
    },
    {
      role: "Full Stack Tech Support Lead",
      company: "Richmond RWRC",
      companylogo: require("./assets/images/rwrc_logo.png"),
      date: "April 2022 - July 2022",
      descBullets: [
        "Design and develop RWRC official website and its' associated features and external programs.",
        "Design RWRC official WeChat account and insert new features depending on organization's marketing needs. ",
        "In charge of all technical updates, maintenance, and cybersecurity.",
        "Lead RWRC's tech support team and provide mentorship to interns.",
        "Provide suggestions and inputs to organization's technical plans, including system renewals and feature upgrades.",
        "Utilities:  HTML/CSS, JavaScript, AWS, Wix, Figma"
      ]
    },
    {
      role: "Lead Front End Developer",
      company: "Enrich Developments Ltd.",
      companylogo: require("./assets/images/enrich_logo.png"),
      date: "July 2021 - March 2022",
      descBullets: [
        "Fully in charge of UI/UX design of web-based application.",
        "Design and develop front-end web views such as content display, user profile, order management, product inventories, and slideshows etc.",
        "Provide suggestions and collaborating with marketing team to achieve successful branding through tech-support.",
        "Utilities: HTML/CSS, React/Redux, JavaScript, Figma"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "My Awesome Projects",
  // subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/FSL_intro.png"),
      projectName: "QiQuac Mobile",
      projectDesc: "Dart / Flutter",
      footerLink: [
        {
          name: "Learn More",
          url: "https://play.google.com/store/apps/details?id=com.fathomscientific.qiquacmobile"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/petapp_bg.png"),
      projectName: "The Pet App",
      projectDesc: "Dart / Flutter / Firebase",
      footerLink: [
        {
          name: "Learn More",
          url: "https://thepetapp.ca/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications"),
  subtitle: "",

  achievementsCards: [
    {
      title: "AWS Certified Cloud Practitioner",
      subtitle: "Issued by Amazon Web Services (AWS)",
      image: require("./assets/images/aws_badge.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/b3a2a487-a274-47dd-b76b-d05b28949d37?source=linked_in_profile"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me 🤙"),
  subtitle: emoji(
    "DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL 🥰."
  ),
  intro: "Actively Looking For IT Job Positions",
  number: "+44 7541 904617",
  email_address: "rickywang1123@gmail.com",
  situation: "✔️",
  location: "Oxford, UK",
  image: require("./assets/images/ricky-selfie.png")
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
