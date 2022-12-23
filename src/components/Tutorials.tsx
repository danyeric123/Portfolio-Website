import React from 'react'

const Tutorials = () => {
  return (
    <section className="work" id="tutorials">
    <div className="row">
      <h2>Tutorials</h2>
      <div className="work__boxes">
        <div className="work__box">
          <div className="work__text">
            <h3>CS Study Group</h3>
           <p>During my time at General Assembly, I ran and taught a CS Fundamental study group where we talked about key concepts and algorithms covered in Computer Science.</p>

            <div className="work__links">
              <a href="https://www.youtube.com/playlist?list=PL_u173li7a2maJv98lb1zIFjaJDmE11lt" target="_blank" className="link__text">
                See Full Playlist <span>&rarr;</span>
              </a>
            </div>
          </div>
          <div className="work__image-box">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/9WhaAbYiMuk" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
            </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Tutorials