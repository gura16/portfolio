import "./skills.css";
import logo1 from "../image/html.jpeg";
import logo2 from "../image/css.jpeg";
import logo3 from "../image/js.jpeg";
import logo4 from "../image/react.png";
function Skills() {
  return (
    <div>
      <p className="title">SKILLS</p>
      <div className="cards">
        <Cards logo={logo1} />
        <Cards logo={logo2} />
        <Cards logo={logo3} />
        <Cards logo={logo4} />
      </div>
    </div>
  );
}

export default Skills;

function Cards(props) {
  return (
    <div className="skillscard">
      <div className="smallcards">
        <img className="logo" src={props.logo} />
      </div>
    </div>
  );
}
