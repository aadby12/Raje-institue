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
  phone: "+233 24 123 4567",
  email: "admissions@rajeinstitute.edu.gh",
  whatsapp: "https://wa.me/233241234567",
  location: "Accra, Ghana",
};

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Admissions", href: "#admissions" },
  { label: "Contact", href: "#contact" },
];

export const heroBadges = [
  "Practical Learning",
  "Career-Focused Training",
  "Student Support",
  "Professional Development",
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
      "A structured and respectful campus culture where students are guided to grow with confidence.",
  },
  {
    title: "Career Pathway Focus",
    description:
      "Training aligned with employability goals, communication skills, and workplace readiness.",
  },
  {
    title: "Admissions Guidance",
    description:
      "Clear, helpful support from inquiry to enrollment so families can make informed decisions.",
  },
];

export const programs: ProgramItem[] = [
  {
    title: "Medicine Counter Assistant (MCA) / Pharmacy Assistant",
    duration: "Comprehensive career-track program",
    summary:
      "Build practical healthcare support skills with a curriculum focused on dispensing support, patient interaction, and professional ethics.",
    outcomes: [
      "Practical counter and customer care skills",
      "Workplace discipline and communication",
      "Confidence for healthcare support opportunities",
    ],
    cta: "View Program Details",
  },
  {
    title: "Community Health Support (Upcoming)",
    duration: "Future-ready training pathway",
    summary:
      "A planned program to expand career opportunities in community-based health support and wellness education.",
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
      "Curriculum and coaching are designed around employability and confidence.",
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
      "Raje Institute gave me practical confidence and professional discipline. I now feel prepared for real healthcare support work.",
    name: "Abena O.",
    role: "MCA Graduate",
  },
  {
    quote:
      "The instructors were supportive and clear. Every class felt connected to real opportunities after school.",
    name: "Kwame A.",
    role: "Pharmacy Assistant Trainee",
  },
  {
    quote:
      "As a parent, I appreciated the structure and communication. The institute feels serious and student-focused.",
    name: "Mrs. Boateng",
    role: "Parent",
  },
];

