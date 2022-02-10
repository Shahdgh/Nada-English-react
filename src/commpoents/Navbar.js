import { Container, Navbar,Nav } from "react-bootstrap";
import { GiDirectionSign } from "react-icons/gi";
import { GoSignIn,GoSignOut } from "react-icons/go";
import { MdAssignmentInd} from "react-icons/md";
import { FaAssistiveListeningSystems } from "react-icons/fa"
import { Link } from "react-router-dom"
import { useContext } from "react";
import EnglishContext from "../utils/EnglishContext";
import { GiSpeaker } from "react-icons/gi"



function NavbarItem () {
  const { logout } =useContext(EnglishContext)
    return ( 
     <Navbar    style={{ backgroundColor: "rgb(45, 9, 61)",color:"white" }}  bg="" expand="lg">
    <Navbar.Brand style={{ fontSize: "15px", color: "white", textDecoration: "none" }}><Link style={{ fontSize: "25px", color: "white", textDecoration: "none" ,marginLeft:"10px",fontFamily:'Quintessential, cursive', }} to="/">Nada-English</Link></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ms justify-content-spece-bt">
        <Nav.Link ><Link style={{ fontSize: "15px", color: "white", textDecoration: "none",fontWeight:"600" }} to="/aboutme">About Me</Link></Nav.Link>

        </Nav>
    {localStorage.tokenUser ? (
      <Nav className="ms justify-content-spece-bt">
        {/* <Nav.Link ><Link style={{ fontSize: "15px", color: "white", textDecoration: "none" }} to="/aboutme">About Me</Link></Nav.Link> */}
        <Nav.Link> <Link style={{ fontSize: "15px", color: "white", textDecoration: "none",fontWeight:"600" }} to="/words">Words</Link></Nav.Link>
        <Nav.Link> <Link style={{ fontSize: "15px", color: "white", textDecoration: "none" ,fontWeight:"600"}} to="/reading">Reading</Link></Nav.Link>

        <Nav.Link ><Link style={{ fontSize: "15px", color: "white", textDecoration: "none",fontWeight:"600" }} to="/listening">
        Listening  <FaAssistiveListeningSystems style={{fontSize:"15px",fontWeight:"800"}}/></Link></Nav.Link>
        <Nav.Link ><Link style={{ fontSize: "15px", color: "white", textDecoration: "none",fontWeight:"600" }} to="/speaking">Let's Speaking <GiSpeaker style={{fontSize:"20px",fontWeight:"800"}}/></Link></Nav.Link>

        </Nav>
        ):null}
        {localStorage.tokenUser ? (
         <Nav className="ms-auto">
         <Nav.Link ><Link style={{ fontSize: "15px", color: "white", textDecoration: "none",fontWeight:"600" }} to="/myfav">My Favourite </Link></Nav.Link>  
         <Nav.Link ><Link style={{ fontSize: "15px", color: "white", textDecoration: "none",fontWeight:"600" }} to="/profile">Profile <MdAssignmentInd/></Link></Nav.Link>  
         <Nav.Link ><Link style={{ fontSize: "15px", color: "white", textDecoration: "none",marginLeft:"5px",fontWeight:"600" }} to="/"onClick={logout} >Logout <GoSignOut/></Link></Nav.Link>
          </Nav>
         ):(
          <Nav  className="ms-auto">
      <Nav.Link ><Link style={{ fontSize: "15px", color: "white", textDecoration: "none" ,display:"flex",fontWeight:"600" ,marginLeft:"5px" }} to="/login" >Login   <GiDirectionSign style={{fontSize:"15px",fontWeight:"800",marginLeft:"5px"}}/></Link></Nav.Link>  
      <Nav.Link ><Link style={{ fontSize: "15px", color: "white", textDecoration: "none",marginLeft:"5px" ,fontWeight:"600"}} to="/signup">Sign Up <GoSignIn/></Link> </Nav.Link>  
         </Nav>
       )}
    </Navbar.Collapse>
</Navbar>
     );
}

export default NavbarItem;