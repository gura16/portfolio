import "./App.css";
import image1 from "./image/profile-picture.svg";
import image2 from "./image/FB.svg";
import image3 from "./image/Github.svg";
import image4 from "./image/instagram.svg";
import image5 from "./image/TW.svg";
import image6 from "./image/Vector (1).svg";
import image7 from "./image/image7.svg";
import image8 from "./image/image8.svg";
import image10 from "./image/image10.svg";
import image12 from "./image/image12.svg";
import image13 from "./image/image13.svg";
function App() {
  return (
    <div>
      <header>
        <div>
          <h1>ABOUT</h1>
          <h2>SKILLS</h2>
        </div>
        <div>
          <h3>SERVICES</h3>
          <h4>PORTFOLIO</h4>
        </div>
      </header>
      <div className="section1">
        <hr></hr>
        <div className="profilediv">
          <img className="image1" src={image1} />
          <h5>GURAMI KVAKHADZE</h5>
          <p className="developer">Frontend Developer</p>
          <p className="developer-experience">
            High level experience in web design and development knowledge.
          </p>
        </div>
        <div className="icons">
          <img className="icon" src={image2} />
          <img className="icon" src={image3} />
          <img className="icon" src={image4} />
          <img className="icon" src={image5} />
        </div>
        <div className="contactme">Contact Me</div>
      </div>
      <div className="section2">
        <div className="aboutdiv">
          <h6>About</h6>
          <p className="abouttext">
            Web developer, with extensive knowledge and years of experience,
            working in web technologies and UI/UX design, delivering quality
            work.
          </p>
        </div>
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
          number="15"
        />
        <Childcomponent
          years="Companies
      worked"
          image={image8}
          number="0"
        />
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
          />
          <Educationcomponent
            profession="international relations"
            university="GEORGIA-Technical University"
            icon={image13}
            year="2015-2017"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
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
      <p className="university">{props.university}</p>
      <div className="iconyear">
        <img src={props.icon} />
        <p>{props.year}</p>
      </div>
    </div>
  );
}
