import React from 'react'

const Footer = () => {
  return (
    <><footer role="contentinfo" className="footer">
    <div className="row">
      <ul className="footer__social-links">
        <li className="footer__social-link-item">
          <a href="https://github.com/danyeric123" title="Link to Github Profile">
            <img src="./images/github.svg" className="footer__social-image" alt="Github" />
          </a>
        </li>
        <li className="footer__social-link-item">
          <a href="https://www.linkedin.com/in/david-nagarpowers/">
            <img src="./images/linkedin.svg" title="Link to Linkedin Profile" className="footer__social-image" alt="Linkedin" />
          </a>
        </li>
      </ul>

      <p>
        &copy; 2020 - Template styling by <a href="https://nisar.dev" className="link">Nisar</a>.
      </p>
      
    </div>
  </footer>

  <a href="#top" className="back-to-top" title="Back to Top">
    <img src="./images/arrow-up.svg" alt="Back to Top" className="back-to-top__image"/>
  </a>
  </>
  )
}

export default Footer