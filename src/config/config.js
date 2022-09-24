// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "André",
  middleName: "",
  lastName: "Arruda",
  birthYear: 1995,
  message: "Biomedical Engineer. I love pizza, dark mode and python+django+react ❤️",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/andre23arruda",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/andrearruda23",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/andre23arruda/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/andre-arruda-2305/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "config" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../config/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "config" directory
//     i.e resume: require("../config/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../config/andre.jpeg"),
  imageSize: 375,
  message:
    "My name is André Arruda. I’m a graduate of 2018 from Federal University of São Paulo in Biomedical Engineering. \
    I like to understand the reason for things, laugh, play and learn. I'm not the best developer ever, but I know that with python and react I can do a lot. \
    In my free time I like to exercise my body running or training outdoors with my friends. Besides programming a little ;)",
  resume: "https://docs.google.com/document/d/15NNkQg3yRzUlmzPgKnGKa4VUC19A9Xs3qGYRiEYf2Lo/edit?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "andre23arruda",
  reposLength: 4,
  specificRepos: ['django-admin-dark-mode', 'todo-cards', 'trilhas-poeticas', 'my-pokedex' ],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    {
      img: require("../config/andre.jpeg"),
      label: "First slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
    {
      img: require("../config/andre.jpeg"),
      label: "Second slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "Django", value: 90 },
    { name: "Data Structures", value: 85 },
    { name: "SQL", value: 75 },
    { name: "HTML/CSS", value: 80 },
    { name: "JavaScript", value: 90 },
    { name: "React", value: 90 },
    { name: "React Native", value: 70 },
  ],
  softSkills: [
    { name: "Positivity", value: 100 },
    { name: "Collaboration", value: 95 },
    { name: "Creativity", value: 90 },
    { name: "Problem Solving", value: 90 },
    { name: "Adaptability", value: 85 },
    { name: "Goal-Oriented", value: 80 },
    { name: "Empathy", value: 75 },
    { name: "Organization", value: 70 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "If you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "andre23arruda@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Full Stack Developer',// Here Add Company Name
      companylogo: require('../assets/img/harpia-small.png'),
      date: 'Juliy 2019 – Present',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
