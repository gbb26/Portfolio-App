import React from "react";
import user from './Logos/user-image.JPG'

function About() {
  return (
    <div className="intro">
      <div className="user-image">
        <img
          src={user}
          alt="user-profile-visual"
        />
      </div>
      <p>
        Welcome to my portfolio! I'm a passionate and experienced web developer
        with a deep love for open-source projects. With a track record of
        numerous contributions, I believe in the power of collaboration and
        community-driven development. My problem-solving skills are reflected in
        my 5-star ratings on HackerRank, where I excel in Java. I have also
        completed two one-month virtual internships, honing my skills further.
        Additionally, I have tackled over 100 problems on LeetCode and continue
        to expand my problem-solving abilities. As a perpetual learner, I'm
        always excited to explore and adapt to the latest technologies. Let's
        create something amazing together!
      </p>
    </div>
  );
}

export default About;
