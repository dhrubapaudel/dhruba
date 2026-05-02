/* ═══════════════════════════════════════════════
   js/projects/activities.js
   Workshops, volunteering, training, competitions.

   type: "activity" uses →
     role, organization, location
   ═══════════════════════════════════════════════ */

const ACTIVITIES_PROJECTS = [

  {
    id:           "activity-website-lgn",
    type:         "activity",
    typeLabel:    "School Website",
    category:     "activities",
    title:        "School Website for Lumbini Gyan Niketan",
    year:         "2023",
    status:       "Published",
    role:         "Full Stack Developer",
    organization: "Lumbini Gyan Niketan Secondary School",
    location:     "Kanchan, Rupandehi, Nepal",
    thumb:        "🌐",
    thumbBg:      "linear-gradient(135deg, #fdf4ff, #e9d5ff)",
    description:  `Developed and hosted website for school to handle its
      notice and other general information about school. Domain of website
      is registered in register.com.np with edu.np extension. This website is
      developed with wordpress and hosted in Babal Host Pvt. Ltd.
      <br/><br/>
      In addition to main website, additional portal is also develop to handle
      results of school from where students can view and download their marksheet.
      <br/><br/>
      This website makes school hustle free to inform students and other
      stake holder by calling them, individually.`,
    findings: [],
    meta: [
      { label: "Website", value: "lgn.edu.np" },
      { label: "Result Portal", value: "result.lgn.edu.np" },
      { label: "Tools",     value: "Wordpress" },
      { label: "Hosting Server", value: "Babal Host" },
    ],
    doi: "lgn.edu.np", report: "", github: "",
  },

  {
    id:           "activity-website-own",
    type:         "activity",
    typeLabel:    "Portfolio Website",
    category:     "activities",
    title:        "My Own Portfolio Website",
    year:         "2018",
    status:       "Published",
    role:         "Full Stack Developer",
    organization: "Own Project",
    location:     "Kanchan, Rupandehi, Nepal",
    thumb:        "🌐",
    thumbBg:      "linear-gradient(135deg, #fdf4ff, #e9d5ff)",
    description:  `Develop with HTML, JS and CSS. Hosted with Github.`,
    findings: [],
    meta: [
      { label: "Website", value: "dhrubapaudel.com.np" },
      { label: "Language",     value: "HTML, JS, CSS" },
      { label: "Hosting", value: "Github" },
    ],
    doi: "dhrubapaudel.com.np", report: "", github: "",
  },


  /* ── Add more activities below ──
  {
    id:           "activity-training-etabs",
    type:         "activity",
    typeLabel:    "Training",
    category:     "activities",
    title:        "ETABS Structural Analysis Training",
    year:         "2022",
    status:       "Completed",
    role:         "Trainee",
    organization: "Training Institute Name",
    location:     "Kathmandu, Nepal",
    thumb:        "💻",
    thumbBg:      "linear-gradient(135deg, #eff6ff, #bfdbfe)",
    description:  `Description of the training program.`,
    findings: [],
    meta: [
      { label: "Duration", value: "3 Days" },
      { label: "Software", value: "ETABS" },
    ],
    doi: "", report: "", github: "",
  },
  ── */

];
