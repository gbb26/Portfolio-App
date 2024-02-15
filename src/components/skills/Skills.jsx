import SkillCard from "./SkillCard";
import "./skills.css";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
const data = [
  { name: "HTML" },
  { name: "CSS" },
  { name: "Javascript" },
  { name: "Typescript" },
  { name: "React" },
  { name: "Material-UI" },
  { name: "Tailwind CSS" },
  { name: "Bootstrap" },
  { name: "Sass" },
  { name: "Java" },
  { name: "Python" },
  { name: "Redux" },
  { name: "JSON" },
  { name: "Next.js" },
  { name: "Framer Motion" },
  { name: "MongoDB" },
  { name: "MySQL" },
  { name: "PostgreSQL" },
  { name: "Express.js" },
  { name: "Node.js" },
  { name: "Redis" },
  { name: "Mongoose" },
  { name: "API" },
];

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

function Skills() {
  return (
    <motion.div
      className="skills"
      id="Skills"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="progress" variants={variants}>
        <h1>What I know</h1>
        <motion.div className="progressBar"></motion.div>
      </motion.div>
      <motion.div className="skills-container" variants={variants}>
        {data.map((skill) => {
          return (
            <span key={skill.name}>
              <SkillCard skillName={skill.name} />
            </span>
          );
        })}
      </motion.div>
    </motion.div>
  );
}

export default Skills;
