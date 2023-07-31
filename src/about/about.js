import "./about.css";
import image6 from "../image/Vector (1).svg";
import image7 from "../image/image7.svg";
import image8 from "../image/image8.svg";
import image10 from "../image/image10.svg";
import image12 from "../image/image12.svg";
import image13 from "../image/image13.svg";
function About() {
  return (
    <div className="section2">
      <div className="container1">
        <div className="aboutdiv">
          <h6>About</h6>
          <p className="abouttext">
            Web developer, with extensive knowledge and years of experience,
            working in web technologies and UI/UX design, delivering quality
            work.
          </p>
        </div>
        <div className="childcomponentdiv">
          <Childcomponent
            years="Years
experience"
            image={image6}
            number="1"
          />
          <Childcomponent
            years="Completed
  projects"
            image={image7}
            number="17"
          />
          <Childcomponent
            years="Companies
worked"
            image={image8}
            number="0"
          />
        </div>
      </div>
      <div className="Qualificationdiv">
        <p className="Qualification">Qualification</p>
        <p className="journey">My personal journey</p>
      </div>
      <div className="educationdiv">
        <div>
          <img src={image10} />
          <p className="Education">Education</p>
        </div>
        <div>
          <img src={image12} />
          <p className="work">work</p>
        </div>
      </div>
      <div className="componentdiv">
        <Educationcomponent
          profession="sociology"
          university="GEORGIA-ilia state university"
          icon={image13}
          year="2011-2015"
          site="https://iliauni.edu.ge/ge"
        />
        <Educationcomponent
          profession="international relations"
          university="GEORGIA-Technical University"
          icon={image13}
          year="2015-2017"
          site="https://gtu.ge/"
        />
        <Educationcomponent
          profession="Frontend Developer"
          university="Bitcamp"
          icon={image13}
          year="2022-2023"
          site="https://www.bitcamp.ge/"
        />
      </div>
    </div>
  );
}

export default About;
function Childcomponent(props) {
  return (
    <div className="yearsandcompany">
      <img className="image" src={props.image} />
      <p className="Yearsexperience">{props.years}</p>
      <p className="numberofyear">{props.number}</p>
    </div>
  );
}
function Educationcomponent(props) {
  return (
    <div className="educationcomp">
      <p className="profession">{props.profession}</p>

      <a href={props.site} className="university">
        {props.university}
      </a>

      <div className="iconyear">
        <img src={props.icon} />
        <p>{props.year}</p>
      </div>
    </div>
  );
}
