import React from "react";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="row">
        <h2>About Me</h2>
        <div className="about__content">
          <div className="about__text">
            <p>
              I’m a full-stack software developer. I am compelled to design code
              that is clean, efficient, and readable. Problem-solving sits at
              the center of my drive to work in software engineering. My
              programming journey began with my undergraduate degree in Computer
              Science that gave me strong fundamentals and continued through my
              completion of a Software Engineering bootcamp. With a background
              in education, I love to share my knowledge and skills with others.
              My knowledge and experience in mental health give me the skills to
              work well in teams. I look forward to applying all my skills and
              background to my next project and team.
            </p>
            <a
              href="https://docs.google.com/viewer?url=https://docs.google.com/document/d/1hXFOEohHJPBt_1epZxVALm-Z52m2Ifux/export?format=pdf"
              target="_blank"
              className="btn"
            >
              My Resume
            </a>
          </div>

          <div className="about__photo-container">
            <img
              className="about__photo"
              src="./images/professional_photo.jpg"
              alt="professional_photo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
