import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-top py-5 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center text-md-start">
            <span className="fw-bold">MyFancyStore</span>
            <p className="text-muted small">© 2026 All Rights Reserved.</p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <a href="#" className="text-decoration-none text-muted me-3">
              Terms & Conditions
            </a>
            <a href="#" className="text-decoration-none text-muted me-3">
              Privacy Policy
            </a>
            <a href="#" className="text-decoration-none text-muted">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
