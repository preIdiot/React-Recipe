import React from "react";
import "../css/Footer.scss";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="page-footer font-small footer">
      <div className="footer-copyright text-center py-3">
         © {currentYear} SUPRITI SPICES INDIA. ALL RIGHT RESERVED        
      </div>
    </footer>
  );
}
