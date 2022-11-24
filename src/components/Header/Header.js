import React from "react";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div className="">
      <nav class="navbar navbar-expand-lg bg-success px-5 py-3    ">
        <a href=" " class="navbar-brand  ">
          <img
            src={logo}
            className=" "
            alt=""
            style={{ width: "100px", height: "100px" }}
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span class="fa fa-bars"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <div class="navbar-nav ms-auto py-5">
            <a href="index.html" class="nav-item text-white nav-link active">
              Home
            </a>
            <a href="about.html" class="nav-item  text-white nav-link">
              About
            </a>
            <a href="service.html" class="nav-item text-white nav-link">
              Services
            </a>
            <div class="nav-item dropdown">
              <a
                href="#"
                class="nav-link dropdown-toggle text-white"
                data-bs-toggle="dropdown"
              >
                Blog
              </a>
              <div class="dropdown-menu m-0">
                <a href="blog.html" class="dropdown-item">
                  Blog Grid
                </a>
                <a href="detail.html" class="dropdown-item">
                  Blog Detail
                </a>
              </div>
            </div>
            <div class="nav-item dropdown">
              <a
                href="#"
                class="nav-link dropdown-toggle text-white"
                data-bs-toggle="dropdown"
              >
                Pages
              </a>
              <div class="dropdown-menu m-0">
                <a href="price.html" class="dropdown-item">
                  Pricing Plan
                </a>
                <a href="feature.html" class="dropdown-item">
                  Our features
                </a>
                <a href="team.html" class="dropdown-item">
                  Team Members
                </a>
                <a href="testimonial.html" class="dropdown-item">
                  Testimonial
                </a>
                <a href="quote.html" class="dropdown-item">
                  Free Quote
                </a>
              </div>
            </div>
            <a href="contact.html" class="nav-item nav-link text-white">
              Contact
            </a>
          </div>
          {/* <butaton type="button" class="btn text-primary ms-3" data-bs-toggle="modal" data-bs-target="#searchModal"><i class="fa fa-search"></i></butaton> */}
          {/* <a href="https://htmlcodex.com/startup-company-website-template" class="btn btn-primary py-2 px-4 ms-3">Download Pro Version</a> */}
        </div>
      </nav>
    </div>
  );
};

export default Header;
