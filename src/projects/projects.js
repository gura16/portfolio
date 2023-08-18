import "./projects.css";
import artgalery from "../image/artgalery.png";
import landingpage from "../image/landingpage.png";
import typemaster from "../image/typemaster.png";
import clipboardpage from "../image/clipboardpage.png";
import podrequest from "../image/podrequest.png";
import timer from "../image/timer.png";
import photosnap from "../image/photosnap.png";
import advice from "../image/advice.png";
import calculator from "../image/calculator.png";
import acordingcard from "../image/acordingcard.png";
import pricing from "../image/pricing.png";
import passwordgen from "../image/passwordgen.png";
import tipcalculator from "../image/tipcalculator.png";
import intractive from "../image/Intractive.png";
import notification from "../image/notification.png";
import order from "../image/order.png";
import todo from "../image/todo.png";
import card from "../image/card.png";
import githubserch from "../image/githubsearch.png";
function Projects() {
  return (
    <div>
      <div>
        <p className="projectstext">PROJECTS</p>
      </div>
      <div className="allcontainer">
        <Projectcard
          foto={order}
          link="https://order-summary-gura16.vercel.app/"
          repo="https://github.com/gura16/order-summary-"
        />
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
        <Projectcard
          foto={photosnap}
          link="https://photosnap-multi-page-website-010-f5oy1clrq-beqa200.vercel.app/index.html"
          repo="https://github.com/beqa200/photosnap-multi-page-website-010"
        />
        <Projectcard
          foto={advice}
          link="https://gura16.github.io/generetot-app/"
          repo="https://github.com/gura16/generetot-app"
        />
        <Projectcard
          foto={calculator}
          link="https://gura16.github.io/calc-app/"
          repo="https://github.com/gura16/calc-app"
        />
        <Projectcard
          foto={acordingcard}
          link="https://gura16.github.io/faq-accordion-card/"
          repo="https://github.com/gura16/faq-accordion-card"
        />
        <Projectcard
          foto={pricing}
          link="https://gura16.github.io/interactive-pricing-component/"
          repo="https://github.com/gura16/interactive-pricing-component"
        />
        <Projectcard
          foto={passwordgen}
          link="https://gura16.github.io/password-generator/"
          repo="https://github.com/gura16/password-generator"
        />
        <Projectcard
          foto={tipcalculator}
          link="https://gura16.github.io/tip-calculator/"
          repo="https://github.com/gura16/tip-calculator"
        />
        <Projectcard
          foto={intractive}
          link="https://gura16.github.io/Intractive-rating-component/"
          repo="https://github.com/gura16/Intractive-rating-component"
        />
        <Projectcard
          foto={notification}
          link="https://notification-page-livid.vercel.app/"
          repo="https://github.com/gura16/notification-page"
        />
        <Projectcard
          foto={todo}
          link="https://to-do-app-gura16.vercel.app/"
          repo="https://github.com/gura16/TO-DO-APP"
        />
        <Projectcard
          repo="https://github.com/gura16/card-details-form"
          link="https://card-details-form-two.vercel.app/"
          foto={card}
        />
        <Projectcard
          foto={githubserch}
          link="https://github-user-search-app-gura16.vercel.app/"
          repo="https://github.com/gura16/github-user-search-app"
        />
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
            REPOSITORY
          </a>
        </div>
      </div>
    </div>
  );
}
