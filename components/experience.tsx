"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "UI Engineer",
    company: "Reltio India Pvt Ltd",
    period: "Dec 2024 - Present",
    responsibilities: [
      "Working on frontend development using Next.js, React, TypeScript, and Material UI",
      "Developing and maintaining UI components for the Reltio platform",
      "Collaborating with the design team to implement new features and improve user experience",
      "Writing unit tests and integration tests using Playwright"
    ],
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Material UI",
      "SCSS",
      "Playwright",
      "Storybook"
    ],
  },
  {
    title: "Software Development Engineer I",
    company: "Ximkart (Sevenloop Technology Pvt Ltd)",
    period: "Aug 2023 - Dec 2024",
    responsibilities: [
      "Developed and maintained Saas platform using React and Next.js",
      "Built responsive UI components following modern design principles",
      "Worked on supply chain management features for international commerce", 
      "Mentored junior developers and participated in code reviews"
    ],
    skills: [
      "React",
      "Next.js", 
      "TypeScript",
      "JavaScript",
      "SCSS",
      "Storybook"
    ],
  },
  {
    title: "Software Engineer",
    company: "Byju's (Think and Learn Pvt Ltd)",
    period: "Oct 2021 - Jul 2023",
    responsibilities: [
      "Developed interactive web applications for supply chain management",
      "Built inventory management systems and administrative dashboards",
      "Worked with microservices architecture and cloud-based solutions",
    ],
    skills: [
      "React",
      "Next.js", 
      "JavaScript",
      "AWS",
      "Microservices",
      "Database Management",
    ],
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-10">Experience</h2>

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p className="text-muted-foreground">{exp.company}</p>
                </div>
                <p className="text-sm text-muted-foreground">{exp.period}</p>
              </div>

              <ul className="list-disc pl-5 space-y-2">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="text-sm">
                    {resp}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, idx) => (
                  <Badge key={idx} variant="outline">
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
