import { FaMapMarkedAlt, FaInstagramSquare, FaTwitter,FaTelegram } from "react-icons/fa"

function Footer() {
    return ( <>
      <footer
      
      style={{
        background: "rgb(45, 9, 61)",
        color: "white",
        // height:"30vh",

        bottom: 0,
        width: "100%",

        margin: 0,
        padding: 0,
        // borderSize: "border-box"
      }}
    >
  
      <div>
        <div className="row">
          <div className="col-md-4 col 12" style={{ marginTop: 10 ,paddingTop:"10px"}}>
      

            <span style={{ fontSize:"25px",fontFamily:'Quintessential, cursive',marginLeft:"20px"}}>Nada-English</span>
          </div>
 

          <div className=" col-12" style={{ fontSize: 18, color: "white", marginLeft:"10px" }}>
            &copy; {new Date().getFullYear()} | All Rights Reserved
            <i style={{ padding: 10, color: "white", float: "right",marginRight:"40px", fontSize: "25px", cursor: "pointer" }}>
              {" "}
              <FaMapMarkedAlt />{" "}
            </i>
            <i style={{ padding: 10, color: "white", float: "right", fontSize: "25px", cursor: "pointer" }}>
              {" "}
              <FaInstagramSquare />{" "}
            </i>
            <i style={{ padding: 10, color: "white", float: "right", fontSize: "25px", cursor: "pointer" }}>
              {" "}
              <FaTwitter />{" "}
            </i>
            <i style={{ padding: 10, color: "white", float: "right", fontSize: "25px", cursor: "pointer" }}>
              {" "}
              <FaTelegram />{" "}
            </i>
          </div>
        </div>
      </div>
    </footer>
    </> );
}

export default Footer;