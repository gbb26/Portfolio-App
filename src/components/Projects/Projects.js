import React from "react";
import ProjTemplate from "./ProjTemplate";
import dictionary from "../Logos/projects/dictionary.png";
import CineVerse from "../Logos/projects/cineVerse.png";
import cric from "../Logos/projects/cricScore.png";
import NewsApp from "../Logos/projects/news-app.png";
import Portfolio from "../Logos/projects/port.png";

const Projects = () => {
  return (
    <div className="proj-main">
      <h1 className="heading">A Collection of My Projects</h1>
      <div className="projects">
        <ProjTemplate
          title="Portfolio"
          description="Discover my portfolio app – a simple and easy-to-navigate platform showcasing my profile, skills, projects, education, and social media profiles. Get to know me and explore my work effortlessly."
          src={Portfolio}
          preview="/"
          code="https://github.com/gbb26/user-portfolio"
        />
        <ProjTemplate
          title="CineVerse: movie guide"
          description="Introducing CineVerse– your gateway to cinematic wonders. Explore IMDb's top 100 evergreen movies, trending films, and web series. Discover similar titles, all in a sleek React-powered app featuring hooks, pagination, dark theme, and Material UI integration."
          src={CineVerse}
          preview="https://cine-verse89.netlify.app/"
          code="https://github.com/gbb26/Binge-Watch"
        />
        <ProjTemplate
          title="TAAZA KHABAR: THE NEWS APP"
          description="Stay informed with our innovative news app built on React.js and JavaScript. Discover a seamless multi-page interface utilizing React Router, Infinite Scroll, and React Bootstrap. Access diverse news content across 6+ categories including health, science, and technology"
          src={NewsApp}
          preview="https://github.com/gbb26/News-App-Headlines"
          code="https://github.com/gbb26/News-App-Headlines"
        />
        <ProjTemplate
          description="Get ready to experience cricket like never before with CricScore - your ultimate gateway to the world of live match scores, upcoming schedules, and in-depth match analysis. Stay on top of the game and unlock your cricketing wisdom with this immersive app. Let the cricketing adventure unfold!"
          title="Cric-Score"
          src={cric}
          preview="https://cric-score690.netlify.app"
          code="https://github.com/gbb26/Cric-Score"
        />

        <ProjTemplate
          title="Dictionary app"
          src={dictionary}
          description="Unleash the power of words with my cutting-edge dictionary app powered by React.js! Explore precise meanings, crystal-clear definitions, and immersive audio pronunciations. Tailor your reading experience with a selection of four elegant font families. Elevating language discovery through seamless React.js integration."
          preview="https://gbb26.github.io/Dictionary-updated/"
          code="https://github.com/gbb26/Dictionary"
        />
      </div>
    </div>
  );
};

export default Projects;
