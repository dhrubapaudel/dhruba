/* ═══════════════════════════════════════════════
   js/projects/work.js
   Professional work experience entries.

   type: "work" uses →
     role, organization, location
   ═══════════════════════════════════════════════ */

const WORK_PROJECTS = [

    {
    id:           "work-AEPC",
    type:         "work",
    typeLabel:    "Consulting Work",
    category:     "work",
    title:        "Monitoring of Domestic Bio-Mass energy Plants in Makawanpur and Sindhuli District",
    year:         "July 2026",
    status:       "Completed",
    role:         "Consultant Engineer",
    organization: "Alternative Energy Promotion Centre (AEPC)",
    location:     "Makawanpur & Sindhuli",
    thumb:        "🕵️‍♂️",
    thumbBg:      "linear-gradient(135deg, #eef4ee, #cce0cc)",
    description:  `Conducted field monitoring and technical verification of 82 household biogas plants under AEPC's Household Biogas Subsidy Programme (FY 2082/83)
    across Makawanpur and Sindhuli districts.
    
   Verified construction quality, technical compliance and beneficiary details against Subsidy Application Forms and NREMIS records over a 7-day field visit.

   Authored field monitoring report presenting findings, summary statistics and recommendations for subsidy eligibility,`,
    findings: [],
    meta: [
      { label: "Subject", value: "Physics and Mathematics" },
      { label: "Class",    value: "11 and 12" },
    ],
    doi: "", report: "", github: "",
    
  },

  {
    id:           "work-areicon",
    type:         "work",
    typeLabel:    "Professional Work",
    category:     "work",
    title:        "Structural Analysis, Designing & Drafting , Estimation",
    year:         "2023 - 2026",
    status:       "Completed",
    role:         "Civil Engineer",
    organization: "ArEiCon Architect and Engineers",
    location:     "Jwagal, Lalitpur, Nepal",
    thumb:        "🏗️",
    thumbBg:      "linear-gradient(135deg, #eef4ee, #cce0cc)",
    description:  `Provided structural design and AutoCAD drafting services for residential and small
      commercial building projects across Nepal. Work included load calculation, structural analysis,
      member sizing, reinforcement detailing, and preparation of working drawings compliant with NBC and IS codes.
      <br/><br/>
      Prepared detailed estimation and bar bending schedule of residential tower proects in Isreal.`,
    findings: [
      "Designed 10+ residential buildings ranging from 2 to 6 storeys.",
      "Prepared BOQ and cost estimates for client.",
      "Coordinated with contractors during construction supervision.",
    ],
    meta: [
      { label: "Software", value: "AutoCAD, ETABS, MS Excel" },
      { label: "Codes",    value: "NBC 105, NBC 205, IS 456, IS 800" },
    ],
    doi: "", report: "", github: "",
  },

  {
    id:           "work-teaching-lgn",
    type:         "work",
    typeLabel:    "Teaching",
    category:     "work",
    title:        "Teaching Mathematics and Physics to 10+2 Students",
    year:         "2023 - 2024",
    status:       "Left School",
    role:         "Teacher",
    organization: "Lumbini Gyan Niketan Secondary School",
    location:     "Kanchan, Rupandehi, Nepal",
    thumb:        "👨‍🏫",
    thumbBg:      "linear-gradient(135deg, #eef4ee, #cce0cc)",
    description:  `Served as a volunteer teacher of physics and mathematics
      for 10+2 level science stream.`,
    findings: [],
    meta: [
      { label: "Subject", value: "Physics and Mathematics" },
      { label: "Class",    value: "11 and 12" },
    ],
    doi: "", report: "", github: "",
  },

  {
    id:           "work-drafting",
    type:         "work",
    typeLabel:    "Freelancing",
    category:     "work",
    title:        "Structural Designing & Drafting — Residential & Commercial Buildings",
    year:         "2023 - 2026",
    status:       "Completed",
    role:         "Structural Designer & Draftsman",
    organization: "Private Practice",
    location:     "Kathmandu & Pokhara, Nepal",
    thumb:        "📐",
    thumbBg:      "linear-gradient(135deg, #eef4ee, #cce0cc)",
    description:  `Provided structural design and AutoCAD drafting services for residential and small
      commercial building projects across Nepal. Work included load calculation, member sizing,
      reinforcement detailing, and preparation of working drawings compliant with NBC and IS codes.`,
    findings: [
      "Designed 10+ residential buildings ranging from 2 to 6 storeys.",
      "Prepared BOQ and cost estimates for clients across Kathmandu, Chitwan and Pokhara.",
      "Coordinated with contractors during construction supervision.",
    ],
    meta: [
      { label: "Software", value: "AutoCAD, ETABS, MS Excel" },
      { label: "Codes",    value: "NBC 105, NBC 205, IS 456, IS 800" },
      { label: "Location", value: "Kathmandu, Chitwan & Pokhara, Nepal" },
    ],
    doi: "", report: "", github: "",
  },

  /* ── Add more work experience below ──
  {
    id:           "work-site-engineer",
    type:         "work",
    typeLabel:    "Professional Work",
    category:     "work",
    title:        "Site Engineer — Road Construction Project",
    year:         "2022 – 2023",
    status:       "Completed",
    role:         "Site Engineer",
    organization: "Company Name",
    location:     "Kathmandu, Nepal",
    thumb:        "🚧",
    thumbBg:      "linear-gradient(135deg, #fff7ed, #fed7aa)",
    description:  `Description of your role and responsibilities.`,
    findings: [
      "Key achievement 1",
      "Key achievement 2",
    ],
    meta: [
      { label: "Project Scale", value: "X km road stretch" },
    ],
    doi: "", report: "", github: "",
  },
  ── */

];
