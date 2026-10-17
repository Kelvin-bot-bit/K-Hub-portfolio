// All portfolio content lives here. Edit this file to change what the site shows.
const GH = "https://github.com/Kelvin-bot-bit";

export const filters = [
  ["all", "All"],
  ["web", "Websites"],
  ["fullstack", "Full-stack"],
  ["security", "Security"],
  ["ai", "AI & ML"],
];

// cat: categories used by the filter buttons. live: leave out if there is no deployed site.
export const projects = [
  { id: "naiswaku", title: "Naiswaku Wild Safaris", cat: ["web"], img: "/imgs/naiswaku.png", alt: "Naiswaku Wild Safaris home page showing a safari vehicle",
    desc: "Responsive safari-booking website with tour packages and an enquiry flow, built for a Maasai Mara tour operator.",
    tags: ["HTML", "CSS", "JavaScript"], source: GH, live: "https://naiswaku-wild-safaris.netlify.app/" },
  { id: "chronos", title: "Chronos", cat: ["web"], img: "/imgs/luxury-watch.png", alt: "Chronos luxury watch store home page",
    desc: "A luxury watch collection store.",
    tags: ["React", "TypeScript"], source: GH, live: "https://luxury-watch-web.vercel.app/" },
  { id: "study-kenya", title: "Study Kenya", cat: ["web"], img: "/imgs/study-kenya.png", alt: "Study Kenya platform home page",
    desc: "A study platform that allows students from all parts of the world to acquire education in Kenya.",
    tags: ["React", "TypeScript"], source: GH, live: "https://study-kenya-platform.vercel.app/" },
  { id: "luxury-estate", title: "Luxury Estate", cat: ["web"], img: "/imgs/luxury-estate.png", alt: "Luxury Estate property listings page",
    desc: "A curated selection of the world's most exceptional residences, each offering unparalleled luxury and sophistication.",
    tags: ["React", "TypeScript"], source: GH, live: "https://luxury-estate-three.vercel.app/properties/" },
  { id: "portfolio", title: "This portfolio", cat: ["web"],
    desc: "Built with React and Vite: light and dark themes, project filters, keyboard-friendly navigation and a Netlify-powered contact form.",
    tags: ["React", "Vite", "CSS"], source: GH + "/k-hub" },
  { id: "ecommerce", title: "E-commerce management system", cat: ["fullstack"],
    desc: "Products, customer accounts, cart, orders and M-Pesa payments through the Daraja API.",
    tags: ["React", "Vite", "Tailwind", "Flask"], source: GH },
  { id: "cipher-chat", title: "Cipher-Chat", cat: ["security", "fullstack"],
    desc: "End-to-end encrypted messaging, built around confidentiality and authentication. In progress.",
    tags: ["React", "Flask", "MySQL"], source: GH + "/Secure-Chat-App.git" },
  { id: "biometric", title: "Biometric multi-factor login", cat: ["security", "ai"],
    desc: "Password, one-time code and facial recognition combined into a single sign-in flow.",
    tags: ["Python", "OpenCV", "Flask"], source: GH + "/BIO-MFA-XSHELL-System.git" },
  { id: "vault", title: "SecureFileVault", cat: ["security"],
    desc: "Encrypted file transfer with secure key exchange between sender and receiver.",
    tags: ["Python", "Cryptography"], source: GH },
  { id: "bank", title: "Bank management system", cat: ["fullstack"],
    desc: "Accounts, deposits, transfers and transaction history behind role-based access control.",
    tags: ["Java", "Spring Boot", "MySQL"], source: GH },
  { id: "rental", title: "Rental management system", cat: ["fullstack"],
    desc: "Tenant onboarding, leases, payment tracking and maintenance requests.",
    tags: ["React", "Spring Boot", "MySQL"], source: GH },
];

export const experience = [
  { when: "Jun – Aug 2026", title: "Cybersecurity intern, Context Experts Agencies Limited",
    text: "Tested web apps against the OWASP Top 10 with Burp Suite, OWASP ZAP and Nikto. Reviewed firewall setups and network architecture, checked endpoints with ClamAV, and wrote findings with risk ratings and fixes." },
  { when: "Ongoing", title: "Independent projects and TryHackMe labs",
    text: "Building Cipher-Chat and an M-Pesa-enabled e-commerce platform, while working through hands-on labs in enumeration, privilege escalation and web security.Also putting hands-on experience into Machine Learning and practicals" },
  { when: "2023 – 2026", title: "BSc Computer Science, Mount Kenya University",
    text: "Algorithms, databases, networks, AI and security. Final-year work centred on secure full-stack applications." },
];

export const skills = [
  ["Front end", "React, JavaScript (ES6+), HTML, CSS, Tailwind CSS, Vite"],
  ["Back end", "Python (Flask), Java (Spring Boot), REST APIs, MySQL"],
  ["Security", "Penetration testing, OWASP Top 10, Burp Suite, OWASP ZAP, Nikto, Metasploit, Snort, Suricata, cryptography"],
  ["AI & machine learning", "Artificial intelligence, machine learning and deep learning concepts, Python libraries (NumPy, Pandas, Matplotlib, Seaborn, scikit-learn)"],
  ["Tooling", "Linux, Kali, Git and GitHub, M-Pesa Daraja API"],
];

export const services = [
  ["Websites and web apps", "Fast, responsive sites and full-stack apps, from a business landing page to a booking or payments system."],
  ["Custom software", "Management systems and automation tools built to be reliable and easy to maintain."],
  ["Security testing", "Authorised web and network assessments, with a written report that says what to fix first."],
];

// Replace the placeholder details below with your real ones.
export const contact = {
  email: "kelvinkaiseyie@gmail.com",
  whatsappLabel: "WhatsApp +254 769 085 592",
  whatsapp: "https://wa.me/254769085592",
  github: GH,
};

export const socials = [
  ["github", "GitHub", GH],
  [
    "linkedin",
    "LinkedIn",
    "https://www.linkedin.com/in/kelvin-kaiseyie-803002318/",
  ],
  ["facebook", "Facebook", "https://www.facebook.com/#"],
  ["instagram", "Instagram", "https://www.instagram.com/kelvin_kaiseyie"],
  ["whatsapp", "WhatsApp", contact.whatsapp],
];
