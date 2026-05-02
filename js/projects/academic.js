/* ═══════════════════════════════════════════════
   js/projects/academic.js
   Fields vary by type — see MODAL_SCHEMAS in main.js
   ═══════════════════════════════════════════════

   type: "thesis"   uses → supervisor, institution
   type: "paper"    uses → authors, coAuthors, conference, institution
   type: "journal"  uses → authors, coAuthors, journal, volumeIssue, publisher
   type: "project"  uses → role, supervisor, institution
   ═══════════════════════════════════════════════ */

const ACADEMIC_PROJECTS = [

  /* ── M.Sc. THESIS ── */
  {
    id:         "thesis-sssi",
    type:       "thesis",
    typeLabel:  "M.Sc. Thesis",
    category:   "academic",
    title:      "Seismic Performance of Raft and Combined Pile Raft Foundation (CPRF) Supported Buildings Considering Soil Structure Structure Interaction (SSSI)",
    year:       "2026",
    status:     "Completed",
    supervisor: "Asst. Prof. Ramesh Karki",
    institution:"IOE Thapathali Campus, Tribhuvan University",
    thumb:      "📕",
    thumbBg:    "linear-gradient(135deg, #e8f4f0, #b8ddd4)",
    description:`This research systematically investigates the seismic performance of two multi-storey
      RC building systems, one on a <strong>raft foundation</strong> and one on a
      <strong>Combined Pile Raft Foundation (CPRF)</strong> under four analysis conditions
      using the 2015 Gorkha Earthquake (Mw 7.8) records as seismic input.
      <br/><br/>
      Advanced 3D FE models were built in <strong>ABAQUS</strong> capturing nonlinear soil
      behaviour, foundation soil contact, and dynamic response across:
      <em>Fixed Base · SSI · SSSI-No-Gap · SSSI-1m-Gap</em>.`,
    findings: [
      "Significant base shear amplification in the Raft building under SSSI-No-Gap, attributed to a pounding mechanism through shared soil.",
      "CPRF demonstrates natural resistance to base shear amplification due to pile induced stiffness and energy dissipation.",
      "Seismic induced settlement is substantially amplified in the Raft supported building under SSSI-No-Gap vs. isolated SSI.",
      "Rocking moment response differs significantly between foundation types across all four conditions.",
      "CPRF consistently outperforms raft in limiting differential settlements and lateral displacements under seismic SSSI loading.",
    ],
    meta: [
      { label: "FE Software",          value: "ABAQUS / CAE" },
      { label: "Seismic Input",         value: "2015 Gorkha Earthquake (Mw 7.8)" },
      { label: "Analysis Type",         value: "Nonlinear Time-History (Dynamic)" },
      { label: "Foundation Types",      value: "Raft & Combined Pile–Raft (CPRF)" },
      { label: "Analysis Conditions",   value: "Fixed Base | SSI | SSSI-No-Gap | SSSI-1m-Gap | SSSI-2m-Gap" },
      { label: "Degree",                value: "M.Sc. Earthquake Engineering" },
    ],
    doi:    "",   // ← Add: "https://doi.org/10.xxxx/xxxxx"
    report: "",
    github: "",
  },

  /* ── CONFERENCE PAPER ── */
  {
    id:         "paper-ioegc",
    type:       "paper",
    typeLabel:  "Conference Paper",
    category:   "academic",
    title:      "Seismic Soil Structure Interaction of Buildings with Raft and Combined Pile Raft Foundation",
    year:       "2026",
    status:     "Submission Accepted",
    // Paper-specific fields (shown instead of supervisor)
    authors:    "Dhruba Paudel",
    coAuthors:  "Ramesh Karki",
    conference: "18th IOE Graduate Conference (IOEGC)",
    institution:"IOE Thapathali Campus, Tribhuvan University",
    thumb:      "📄",
    thumbBg:    "linear-gradient(135deg, #eff6ff, #c8d9f0)",
    description:`Conference paper submitted to the <strong>18th IOE Graduate Conference (IOEGC)</strong>
      presenting key findings from the M.Sc. thesis. Compares seismic response of raft and
      CPRF supported buildings under SSSI conditions using 2015 Gorkha Earthquake records
      and ABAQUS FE modelling. Formatted in two-column IOEGC layout (Times New Roman).`,
    findings: [
      "SSSI-No-Gap condition causes the highest base shear amplification in raft supported buildings.",
      "CPRF foundation significantly reduces SSSI induced amplification across all response parameters.",
      "Gap provision for raft systems requires displacement and rocking verification, not just force-based assessment.",
    ],
    meta: [
      { label: "Conference", value: "18th IOE Graduate Conference (IOEGC)" },
      { label: "Format",     value: "Two-column, Times New Roman" },
      { label: "Status",     value: "Submission Accepted" },
    ],
    doi:    "",   // ← Add DOI once published
    report: "",
    github: "",
  },

  /* ── JOURNAL ARTICLE EXAMPLE ──
     Uncomment and fill in when you have a journal publication.

  {
    id:          "journal-example",
    type:        "journal",
    typeLabel:   "Journal Article",
    category:    "academic",
    title:       "Your Journal Article Title",
    year:        "2025",
    status:      "Published",
    authors:     "Dhruba Paudel",
    coAuthors:   "Er. Ramesh Karki, Co-Author Name",
    journal:     "Journal of Earthquake Engineering",
    volumeIssue: "Vol. 29, Issue 4",
    publisher:   "Taylor & Francis",
    institution: "IOE Thapathali Campus, Tribhuvan University",
    thumb:       "📰",
    thumbBg:     "linear-gradient(135deg, #f0fdf4, #bbf7d0)",
    description: `Abstract of your journal article goes here.`,
    findings: [
      "Key finding 1",
      "Key finding 2",
    ],
    meta: [
      { label: "ISSN",    value: "1559-808X" },
      { label: "Pages",   value: "pp. 123–145" },
      { label: "Impact Factor", value: "3.5" },
    ],
    doi:    "https://doi.org/10.xxxx/xxxxx",
    report: "",
    github: "",
  },
  ── */

  /* ── ACADEMIC PROJECT 1 ── */
  {
    id:         "proj-seismic-vuln",
    type:       "project",
    typeLabel:  "Academic Project",
    category:   "academic",
    title:      "Seismic Analysis and Design of Multistoried Commercial Buildings",
    year:       "2023",
    status:     "Completed",
    role:       "Group Leader",
    supervisor: "Dr. Shreedhar Khakurel",
    institution:"IOE Pashchimanchal Campus, Tribhuvan University",
    thumb:      "📘",
    thumbBg:    "linear-gradient(135deg, #f0f4e8, #d4e6c0)",
    description:`For the partial fullfilment of bachelor of civil engineering, this project is done by 6 student group.
      In this project a B+G+6 storey commercial building with basement parking, commercial market space, seminar hall,
      cafeteria, movie theater, elevators, etc is planned and full seismic analysis of building is done complying NBC 105:2020
      and based on the result obtained structural components are esigned.,`,
    findings: [
      "Architectural Design",
      "Seismic Analysis",
      "Structural Design",
    ],
    meta: [
      { label: "Building",   value: "Commercial Building B+G+6 Storey" },
      { label: "Software", value: "Etabs, Autocad" },
      { label: "Code Ref", value: "NBC 105:2020, IS 1893, IS 456, IS 800, etc" },
      { label: "Participants", value: "6 Student Group" },
    ],
    doi: "", report: "", github: "",
  },

  /* ── ACADEMIC PROJECT 2 ── 
  {
    id:         "proj-foundation-compare",
    type:       "project",
    typeLabel:  "Academic Project",
    category:   "academic",
    title:      "Comparative Study of Raft and Pile Foundation Performance under Static Loading",
    year:       "2021",
    status:     "Completed",
    role:       "Lead Researcher",
    supervisor: "IOE Pashchimanchal Campus",
    institution:"IOE Pashchimanchal Campus, Tribhuvan University",
    thumb:      "🏛️",
    thumbBg:    "linear-gradient(135deg, #f4eef4, #e0cce0)",
    description:`Comparative study evaluating structural and settlement performance of raft and pile
      foundation systems under static loading for a representative multi-storey RC building.
      Uses analytical methods and FE simulation to compare load distribution, differential
      settlement, and bearing capacity.`,
    findings: [
      "Pile foundation reduced maximum settlement by ~60% compared to raft under the same loading.",
      "Raft foundation provided more uniform load distribution on soft cohesive soils.",
      "Combined Pile–Raft system showed optimal performance for settlement control and load sharing.",
    ],
    meta: [
      { label: "Software",  value: "PLAXIS 2D + Manual Calculations" },
      { label: "Soil Type", value: "Soft Clay (Kathmandu Lacustrine)" },
    ],
    doi: "", report: "", github: "",
  },
── */

];
