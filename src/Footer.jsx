import React from "react";

function Footer() {



    const startYear = 2021
    const currentYear = new Date().getFullYear()

    return(
    // <!-- footer start -->


    <footer className="page-footer font-small footer">
    <div className="footer-copyright text-center py-3">{currentYear} Copyright:
      <a href="#" className="footer1"> Supriti.com</a>
    </div>
  </footer>
//   <!-- footer end -->
    );
}
export default Footer;