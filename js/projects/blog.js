/* ═══════════════════════════════════════════════
   js/projects/blog.js
   Blog posts and articles.

   type: "blog" uses →
     authors, platform, topic
   ═══════════════════════════════════════════════ */

const BLOG_PROJECTS = [

  {
    id:       "blog-sssi-intro",
    type:     "blog",
    typeLabel:"Blog Post",
    category: "blog",
    title:    "Understanding Soil Structure Structure Interaction (SSSI) in Earthquake Engineering",
    year:     "2023",
    status:   "Published",
    authors:  "Dhruba Paudel",
    platform: "dhrubapaudel.com.np",
    topic:    "Earthquake Engineering Education",
    thumb:    "📝",
    thumbBg:  "linear-gradient(135deg, #fefce8, #fde68a)",
    description: `An introductory article explaining Soil Structure Structure Interaction (SSSI)
      for a general engineering audience. Covers seismic wave propagation through soil, dynamic
      interaction of adjacent buildings, and why SSSI matters for urban earthquake risk in
      densely built cities like Kathmandu.`,
    findings: [],
    meta: [
      { label: "Audience", value: "General Engineering" },
      { label: "Platform", value: "Personal Website / Blog" },
      { label: "Read Time", value: "~8 min" },
      { label: "Language",  value: "English" },
    ],
    doi: "", report: "https://dhrubapaudel.com.np", github: "",
  },

  /* ── Add more blog posts below ──
  {
    id:       "blog-cprf-intro",
    type:     "blog",
    typeLabel:"Blog Post",
    category: "blog",
    title:    "What is a Combined Pile–Raft Foundation?",
    year:     "2024",
    status:   "Published",
    authors:  "Dhruba Paudel",
    platform: "dhrubapaudel.com.np",
    topic:    "Foundation Engineering",
    thumb:    "📝",
    thumbBg:  "linear-gradient(135deg, #fefce8, #fde68a)",
    description: `Your article description here.`,
    findings: [],
    meta: [
      { label: "Read Time", value: "~6 min" },
    ],
    doi: "", report: "https://dhrubapaudel.com.np/your-post-url", github: "",
  },
  ── */

];
