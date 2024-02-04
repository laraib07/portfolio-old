import Alpine from "alpinejs";

window.Alpine = Alpine;

Alpine.store("data", {
  projects: [
    {
      id: 1,
      title: "Project name",
      skills: ["skill1", "skill2", "skill3"],
      desc: "Lorem ipsum hello world this is a long text so bear with me Lorem, ipsum dolor sit amet consectetur adipisicing elit. veniam eos, maiores doloribus cumque amet, nostrum quam minima neque suscipit numquam repellat possimus.",
      gitlink: "gitlink",
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
      demo: "null",
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
    { title: "Frontend", skills: ["skill1", "skill2", "longSkillName"] },
    { title: "Backend", skills: ["skill1", "skill2", "longSkillName"] },
    { title: "Fullstack", skills: ["skill1", "skill2", "longSkillName"] },
    {
      title: "Tools & Platforms",
      skills: ["skill1", "skill2", "longSkillName"],
    },
    { title: "Database", skills: ["skill1", "skill2", "longSkillName"] },
  ],
});

Alpine.start();
