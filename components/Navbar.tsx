import React from 'react';

class Navbar extends React.Component {
  handleHomeClick = () => {
    // Add your functionality for the Home link here
    alert('Home link clicked!');
    // You can navigate to another page or perform any other action
  };

  render() {
    return (
      <nav
        className="navbar"
        role="navigation"
        aria-label="main navigation"
        style={{
          marginTop: "10px",
          marginLeft: "10px",
          marginRight: "10px",
          borderRadius: "10px",
        }}
      >
        <div className="navbar-brand">
          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbar"
          ></a>
        </div>

        <div id="navbar" className="navbar-menu">
          <div className="navbar-start">
            <a
              className="navbar-item"
              style={{ marginLeft: "10px" }}
              onClick={this.handleHomeClick}
            >
              Home
            </a>
          </div>

          <div className="navbar-end">
            <a className="navbar-item">Documentation</a>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">More</a>

              <div className="navbar-dropdown">
                <a className="navbar-item">About</a>
                <a className="navbar-item">Jobs</a>
                <a className="navbar-item">Contact</a>
                <hr className="navbar-divider" />
                <a className="navbar-item">Report an issue</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;