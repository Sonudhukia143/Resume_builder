const JSONDATA = {
    "name": "Sonu",
    "profession": "MERN STACK DEVELOPER",
    "details": {
        "location": " Haryana, India",
        "contact": "9518803143",
        "gmail": "sonudhukia151@gmail.com",
        "portfolio": "https://sonuwebdev.netlify.app/",
        "github": "https://github.com/Sonudhukia143",
        "linkedin": "https://www.linkedin.com/in/sonu-dhukia-web770/",
    },
    "objective": "Aspiring MERN Stack Developer with hands-on project experience in React, Next.js, Docker, and TypeScript. Eager to contribute scalable web solutions and build AI-powered applications to enhance user experience while gaining industry exposure.",
    "skills": {
        "core": ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Express.js", "MongoDB", "SQL"],
        "tools": ["Docker", "Git", "Render", "Vercel", "Netlify", "Postman", "Prisma", "Three.js"]
    },
    "certificates": [
        {
            "issued by": "Udemy",
            "name": "Web Developer Bootcamp"
        },
        {
            "issued by": "Great Stack",
            "name": "React Hooks Course"
        },
        {
            "issued by": "Udemy",
            "name": "Web Developement WorkShop"
        }
    ],
    "languages": [
        "Hindi", "Punjabi", "English"
    ],
    "education": [
        {
            "institute": "Baba Farid College, Bathinda",
            "study": "Bachelor's of Computer Applications",
            "field": "Computer Science",
            "duration": "July 2023 to August 2026",
            "score": "7.0 / 10",
            "website": "https://babafaridgroup.edu.in/"
        }
    ],
    "projects": [
        {
            "name": "Maisen Monde",
            "description": "Built a MERN stack real estate platform with authentication & authorization. Implemented multi-user roles and optimized database queries for performance.",
            "tech": "MERN, Bootstrap",
            "link": "https://maisenmonde.netlify.app",
            "duration": "Jan 2025 - June 2025",
        },
        {
            "name": "Reference Portfolio",
            "description": "Designed portfolio website for an imaginary psychologist with optimized SEO. Achieved Lighthouse SEO score of 95+ improving accessibility and ranking potential.",
            "tech": "TypeScript, Tailwind CSS, Next.js",
            "link": "https://therapist-website-eta.vercel.app",
            "duration": "May 2025 - July 2025",
        }, {
            "name": "YelpCamp",
            "description": "Full-stack web app where users can add picnic spots and leave reviews. Deployed using Render with authentication and review features.",
            "tech": "Express.js, Node.js, MongoDB, Ejs, Render",
            "link": "https://yelpcamp-xxkv.onrender.com",
            "duration": "Jan 2024 - June 2024",
        }
    ]
};

export default function getRandomData() {
    return JSONDATA;
}


