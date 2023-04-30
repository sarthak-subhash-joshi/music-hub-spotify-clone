import React from "react";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();
  return (
  <>
     
      <div className="footer">  
       
          <p style={{margin:'0'}}> Copyright &copy; {year} Made By Sarthak Joshi</p>

      </div>
  
  </>
  );
} 

export default Footer;
