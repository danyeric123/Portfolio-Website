import React from "react";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="row">
        <h2>About Me</h2>
        <div className="about__content">
          <div className="about__text">
            <p>
              Results-driven Software Engineer with expertise in distributed
              systems, microservices architecture, and cloud infrastructure.
              Demonstrated success in improving system performance, reducing
              latency, and implementing robust observability solutions with a
              strong track record of mentoring teams and driving
              cross-functional collaboration. I build scalable solutions using
              Python, Golang, and cloud technologies.
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
