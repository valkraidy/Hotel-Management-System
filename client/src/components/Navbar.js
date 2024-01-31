import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar">
        <a class="navbar-brand" href="google.com">
          myRooms
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="/Register">
                Register
              </a>
            </li>
            
            {/* <li class="nav-item">
              <a class="nav-link" href="/">
                Pricing
              </a>
            </li> */}
            <li class="nav-item">
              <a className="nav-link" href="Login">
                Login
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
