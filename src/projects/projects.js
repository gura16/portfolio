import "./projects.css";
import artgalery from "../image/artgalery.png";
import landingpage from "../image/landingpage.png";
import typemaster from "../image/typemaster.png";
import clipboardpage from "../image/clipboardpage.png";
import podrequest from "../image/podrequest.png";
import timer from "../image/timer.png";

function Projects() {
  return (
    <div>
      <div>
        <p className="projectstext">PROJECTS</p>
      </div>
      <div className="allcontainer">
        <Projectcard />
        <Projectcard />
        <Projectcard />
        <Projectcard
          foto={landingpage}
          link="https://gura16.github.io/skilled-elearning-landing-page/"
          repo="https://github.com/gura16/skilled-elearning-landing-page"
        />
        <Projectcard
          foto={artgalery}
          link="https://gura16.github.io/art-gallery-website/"
          repo="https://github.com/gura16/art-gallery-website"
        />
        <Projectcard
          foto={typemaster}
          link="https://gura16.github.io/typemaster-pre-launch-landing/"
          repo="https://github.com/gura16/typemaster-pre-launch-landing"
        />
        <Projectcard
          foto={clipboardpage}
          link="https://gura16.github.io/clipboard-landing-page/"
          repo="https://github.com/gura16/clipboard-landing-page"
        />
        <Projectcard
          foto={podrequest}
          link="https://gura16.github.io/pod-request-access-landing-page/"
          repo="https://github.com/gura16/pod-request-access-landing-page"
        />
        <Projectcard
          foto={timer}
          link="https://gura16.github.io/launch-countdown-timer/"
          repo="https://github.com/gura16/launch-countdown-timer"
        />
        <Projectcard />
        <Projectcard />
        <Projectcard />
      </div>
    </div>
  );
}

export default Projects;
function Projectcard(props) {
  return (
    <div>
      <div className="container">
        <img className="foto" src={props.foto} />
        <div className="liverepo">
          <a className="live" href={props.link}>
            LIVE
          </a>
          <a className="repo" href={props.repo}>
            REPOZITORY
          </a>
        </div>
      </div>
    </div>
  );
}
