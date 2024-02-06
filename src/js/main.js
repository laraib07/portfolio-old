import Alpine from "alpinejs";

window.Alpine = Alpine;

Alpine.store("data", {
  resume:
    "https://drive.google.com/file/d/1s4FQ75wJZ37tTOYyg-aeyqrksg2JBp5g/view?usp=share_link",

  portfolio: [
    {
      id: 1,
      title: "Leomir Hotel",
      skills: ["Laravel", "PHP", "HTML", "TailwindCSS"],
      imgsrc: "./images/portfolio/leomir.webp",
      desc: "Discover the charm of Leomir Hotel on the website I created. Immerse yourself in the inviting ambiance, explore amenities, and plan your stay effortlessly. ",
      gitlink: null,
      demo: "https://leomirhotel.com",
    },
    {
      id: 2,
      title: "Portfolio",
      skills: ["HTML", "TailwindCSS", "AlpineJS"],
      imgsrc: "./images/portfolio/portfolio.webp",
      desc: "Explore the code behind my personal portfolio website! Crafted with love, it showcases my skills in web development.",
      gitlink: "https://github.com/laraib07/portfolio",
      demo: "#hero",
    },
    {
      id: 3,
      title: "Django CRM",
      skills: ["Django", "Python", "Bootstrap"],
      imgsrc: "./images/portfolio/dcrm.webp",
      desc: "Django-powered CRM Web App in Python. Elevate your business with seamless customer relationship management.",
      gitlink: "https://github.com/laraib07/DCRM",
      demo: "https://dcrm-five.vercel.app",
    },
    {
      id: 4,
      title: "Rewind",
      skills: ["Bash"],
      imgsrc: "./images/portfolio/rewind.webp",
      desc: "Simple bash script to backup and restore termux(an android terminal emulator) even across devices",
      gitlink: "https://github.com/laraib07/TermuxBackupTools",
      demo: null,
    },
    {
      id: 5,
      title: "Androfetch",
      skills: ["Bash"],
      imgsrc: "./images/portfolio/androfetch.webp",
      desc: "A pretty system information tool written in bash for termux on android.",
      gitlink: "https://github.com/laraib07/androfetch",
      demo: null,
    },
  ],

  skills: [
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "Javascript", "TailwindCSS", "Bootstrap"],
    },
    { title: "Backend", skills: ["NodeJS", "Express"] },
    { title: "Fullstack", skills: ["Laravel", "Django"] },
    {
      title: "Tools & Platforms",
      skills: ["Git", "Github", "Linux", "Vercel", "Hostinger", "Firebase"],
    },
    { title: "Database", skills: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"] },
  ],
});

Alpine.start();

const scriptURL =
  "https://script.google.com/macros/s/AKfycbwXUgR5YZrNhcEOG_6kdnsPI31AKnChShSLr9NVvbS_bQz7VGyXl666BPGTj7EQMQl_ag/exec";
const form = document.forms["submit-to-google-sheet"];
const alert = document.getElementById("alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      alert.innerHTML = "Message sent successfully!";
      setTimeout(function () {
        alert.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
