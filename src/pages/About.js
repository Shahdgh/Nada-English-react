import { Col, Row } from "react-bootstrap";
// import { SiGoogleclassroom } from "react-icons/si"
import { FaSchool ,FaRestroom} from "react-icons/fa"
import "./About.css";
function About() {
    return ( <>
       <div className="about-container">
      <div className="image-container">
        <div className="image"></div>
      </div>
      <div className="text-container">
        <div className="about-title" style={{fontSize:"30px",fontWeight:600,}}>  Nada AlGhamdi</div>
      
        <ul style={{fontSize:"20px",fontWeight:600,listStyle:"none",marginTop:"30px"}} className="">
         
          <li>
          <FaSchool/>School:Rehana Bint Zaid in Beidan
          </li>
          <li style={{marginTop:"30px"}}>
          <FaRestroom/> Stage: Middle And High School
          </li>
        </ul>
      </div>
    </div>
    
    </> );
}

export default About;