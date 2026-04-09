export type NavItem = {
  label: string;
  href: string;
};

export type FeatureItem = {
  title: string;
  description: string;
};

export type ProgramItem = {
  title: string;
  duration: string;
  summary: string;
  outcomes: string[];
  cta: string;
};

export type TestimonialItem = {
  quote: string;
  name: string;
  role: string;
};

export const contactInfo = {
  phone: "+233 50 140 6790",
  email: "admissions@rajeinstitute.com",
  whatsapp: "https://wa.me/233241234567",
  location: "Avenor, Accra - Ghana",
};

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Admissions", href: "#admissions" },
  { label: "Contact", href: "#contact" },
];

export const heroBadges = [
  "Hands-on practical sessions",
  "Career-focused instruction",
  "Student support and guidance",
  "Professional discipline",
];

export const trustHighlights: FeatureItem[] = [
  {
    title: "Practical Training",
    description:
      "Hands-on learning sessions designed to prepare students for real pharmacy support roles.",
  },
  {
    title: "Supportive Environment",
    description:
      "A structured and respectful learning environment where students are guided with consistency.",
  },
  {
    title: "Career Pathway Focus",
    description:
      "Training built around employability, communication, and workplace readiness.",
  },
  {
    title: "Admissions Guidance",
    description:
      "Clear support from inquiry to enrollment so applicants and families can decide confidently.",
  },
];

export const programs: ProgramItem[] = [
  {
    title: "Medicine Counter Assistant (MCA) / Pharmacy Assistant",
    duration: "Core professional training",
    summary:
      "Learn core healthcare support skills with training in dispensing support, patient interaction, and professional ethics.",
    outcomes: [
      "Practical counter and customer care skills",
      "Workplace discipline and communication",
      "Confidence for healthcare support opportunities",
    ],
    cta: "View Program Details",
  },
  {
    title: "Community Health Support (Upcoming)",
    duration: "Planned future program",
    summary:
      "An upcoming pathway for community-based health support and wellness education roles.",
    outcomes: [
      "Foundational public health orientation",
      "Community-facing communication skills",
      "Pathway to health-related support roles",
    ],
    cta: "Join Interest List",
  },
];

export const whyChooseUs: FeatureItem[] = [
  {
    title: "Practical Learning",
    description: "Lessons are applied through guided exercises, not only theory.",
  },
  {
    title: "Student Support",
    description:
      "Students receive mentorship, progress guidance, and admissions assistance.",
  },
  {
    title: "Professional Discipline",
    description:
      "We emphasize responsibility, ethics, punctuality, and workplace conduct.",
  },
  {
    title: "Career-Oriented Training",
    description:
      "Our curriculum and coaching are designed to prepare students for entry-level opportunities.",
  },
];

export const recognitionBadges = [
  "Institutional Recognition",
  "Training Partnerships",
  "Healthcare Network Alignment",
  "Quality Learning Standards",
];

export const testimonials: TestimonialItem[] = [
  {
    quote:
      "Raje Institute helped me improve my practical skills and communication. I now feel ready for healthcare support work.",
    name: "Abena O.",
    role: "MCA Graduate",
  },
  {
    quote:
      "Tutors explained lessons clearly and pushed us to stay disciplined. The practical training was very useful.",
    name: "Kwame A.",
    role: "Pharmacy Assistant Trainee",
  },
  {
    quote:
      "As a parent, I appreciated the structure and updates from the school. They take student progress seriously.",
    name: "Mrs. Boateng",
    role: "Parent",
  },
];

