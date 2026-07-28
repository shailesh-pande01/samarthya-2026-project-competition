export const siteConfig = {
  name: "Samarthya 2026",
  organizer: "SKN IEEE Student Branch",
  tagline: "Ideate • Innovate • Impact",
  mode: "Hybrid",
  venue: "SKNCOE, Pune",
  date: "12 August 2026",
  website: "https://www.sknisb.in",
  // email: "riteshdone0@gmail.com",
  email: "ieee.sb_skncoe@sinhgad.edu",
  registrationLink: "#",
  brochureLink: "/brochure.pdf",
  whatsappLink: "https://wa.me/918830250297?text=Hello%20Samarthya%202026%20Team%2C%20I%20have%20a%20query%20regarding%20the%20project%20competition.",
  mailtoLink: "mailto:ieee.sb_skncoe@sinhgad.edu?subject=Query%20regarding%20Samarthya%202026&body=Hello%20Team%2C%0D%0A%0D%0AI%20would%20like%20to%20inquire%20about%20Samarthya%202026.%0D%0A%0D%0ARegards%2C",
  socials: {
    instagram: "http://instagram.com/skn_ieee/",
    linkedin: "https://www.linkedin.com/company/skn-ieee-student-branch",
    youtube: "https://www.youtube.com/@sknisb",
  }
};

export const stats = [
  { label: "Expected Teams", value: 300, suffix: "+" },
  { label: "Finalists", value: 50, suffix: "+" },
  { label: "Competition Themes", value: 2, suffix: "" },
  { label: "Expert Judges", value: 15, suffix: "+" },
];

export const themes = [
  {
    id: "women-empowerment",
    title: "Women Empowerment",
    description:
      "Technology-driven solutions addressing women-centric societal challenges.",
    icon: "HeartHandshake",
  },
  {
    id: "open-innovation",
    title: "Open Innovation",
    description:
      "Innovative ideas solving practical real-world problems from any domain.",
    icon: "Lightbulb",
  },
];

export const timeline = [
  {
    round: "Round 1",
    title: "PPT Submission",
    description: "Teams submit their project PPT.",
    evaluation: ["Innovation", "Feasibility", "Impact"],
    outcome: "Shortlisted teams proceed to Round 2.",
  },
  {
    round: "Round 2",
    title: "Prototype Video",
    description: "Teams submit a working prototype video.",
    evaluation: ["Functionality", "Innovation", "Real-world application"],
    outcome: "Shortlisted teams proceed to Final Presentation.",
  },
  {
    round: "Round 3",
    title: "Final Presentation",
    description: "Finalists present before expert judges.",
    evaluation: [],
    details: [
      { mode: "Offline", target: "Pune Teams (Venue: SKNCOE)" },
      { mode: "Online", target: "Outside Pune Teams" },
    ],
    outcome: "Winners decided by Jury.",
  },
];

export const prizes = {
  pool: "₹10,000",
  categories: [
    { title: "Winner", amount: "₹5,000 Cash", type: "winner" },
    { title: "1st Runner Up", amount: "₹2,500 Cash", type: "runner-up" },
    { title: "2nd Runner Up", amount: "₹1,500 Cash", type: "runner-up" },
    {
      title: "Best Women-Centric Project",
      amount: "₹1,000 Cash",
      type: "special",
    },
  ],
};

export const pricing = [
  { category: "Regular Student", fee: "₹200" },
  { category: "IEEE Member", fee: "₹150" },
  { category: "SKN IEEE Member", fee: "₹100" },
];

export const benefits = [
  "National Level Competition",
  "Expert Jury",
  "Networking",
  "Innovation Exposure",
  "Recognition",
  "Certificates",
  "Industry Feedback",
  "Portfolio Enhancement",
];

export const faqs = [
  {
    question: "Who can participate?",
    answer: "Students from any college can participate in Samarthya 2026. Inter-college teams are also welcome.",
  },
  {
    question: "Can outside Pune students join?",
    answer: "Yes! Samarthya 2026 is a national-level competition. Outside Pune students can fully participate.",
  },
  {
    question: "Can outside Pune finalists present online?",
    answer: "Yes, teams outside Pune are allowed to present online during the Final Presentation (Round 3).",
  },
  {
    question: "What is the registration fee?",
    answer: "Regular Students: ₹200, IEEE Members: ₹150, SKN IEEE Members: ₹100.",
  },
  {
    question: "What are the themes?",
    answer: "The two main themes are Women Empowerment and Open Innovation.",
  },
  {
    question: "Where do we register?",
    answer: "Click the 'Register Now' button on this website which will redirect you to our Unstop registration page.",
  },
];

export const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Themes", href: "/#themes" },
  { label: "Prizes", href: "/#prizes" },
  { label: "Timeline", href: "/#timeline" },
  { label: "FAQs", href: "/#faqs" },
  { label: "Contact", href: "/#contact" },
];
