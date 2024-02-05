import Alpine from "alpinejs";

window.Alpine = Alpine;

Alpine.store("data", {
  portfolio: [
    {
      id: 1,
      title: "Project name",
      skills: ["skill1", "skill2", "skill3"],
      desc: "Lorem ipsum hello world this is a long text so bear with me Lorem, ipsum dolor sit amet consectetur adipisicing elit. veniam eos, maiores doloribus cumque amet, nostrum quam minima neque suscipit numquam repellat possimus.",
      gitlink: null,
      demo: "demolink",
    },
    {
      id: 2,
      title: "Project name",
      skills: ["skill1", "skill2", "skill3"],
      desc: "Lorem ipsum",
      gitlink: "gitlink",
      demo: "demolink",
    },
    {
      id: 3,
      title: "Project name",
      skills: ["skill1", "skill2", "skill3"],
      desc: "Lorem ipsum",
      gitlink: "gitlink",
      demo: null,
    },
    {
      id: 4,
      title: "Project name",
      skills: ["skill1", "skill2", "skill3"],
      desc: "Lorem ipsum",
      gitlink: "gitlink",
      demo: "demolink",
    },
    {
      id: 5,
      title: "Project name",
      skills: ["skill1", "skill2", "skill3"],
      desc: "Lorem ipsum",
      gitlink: "gitlink",
      demo: "demolink",
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
