/* eslint-disable react/prop-types */
import { useRef } from "react";
import "./projects.css";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Dev. Portfolio",
    img: "https://images.pexels.com/photos/14936128/pexels-photo-14936128.jpeg",
    desc: "Single-page application developer portfolio showcasing technical skills, projects, and social media profiles. Includes a contact section for easy messaging.",
    codeUrl: "/portfolio",
    appLink: "/",
  },
  {
    id: 2,
    title: "Full Stack Blog App",
    img: "https://images.pexels.com/photos/768474/pexels-photo-768474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1&lazy=load",
    desc: "A blogging platform empowering users to create, publish, and browse content. Features user authentication, CRUD operations, and responsive design.",
    codeUrl: "/blog-app",
    appLink: "https://noteme-share-your-thoughts.netlify.app/",
  },
  {
    id: 3,
    title: "Movie Guide",
    img: "/movie-guide.png",
    desc: "A frontend movie guide app with trending movies, detailed descriptions, and recommendations. Includes a search feature and an infinite scroll component for continuous browsing..",
    codeUrl: "/Binge-Watch",
    appLink: "https://cine-verse89.netlify.app/",
  },
  {
    id: 4,
    title: "News App",
    img: "https://images.pexels.com/photos/14083751/pexels-photo-14083751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "A multi-page React.js news app offering the latest news from over 6 categories.",
    codeUrl: "/News-App-Headlines",
    appLink: "https://github.com/gbb26/News-App-Headlines",
  },
  {
    id: 5,
    title: "REST Countries",
    img: "https://images.pexels.com/photos/8828346/pexels-photo-8828346.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Explore countries with the REST Countries app. Filter out info by continent or search for specific countries. You can even switch between light and dark themes for a personalized experience.",
    codeUrl: "/REST-Countries",
    appLink: "https://silly-daifuku-ed8c1d.netlify.app/",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt={item.title} />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <span
              style={{
                display: "flex",
                justifyContent: "flex-start",
                flexWrap: "wrap",
              }}
            >
              <a href={item.appLink} target="_blank" rel="noopener noreferrer">
                <button>Demo</button>
              </a>{" "}
              <a
                href={`https://github.com/gbb26${item.codeUrl}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Code</button>
              </a>
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref} id="Projects">
      <div className="progress">
        <h1>Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Projects;
