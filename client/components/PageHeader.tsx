import React from 'react'

function PageHeader() {
  return (
    <>
      <header>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <img
              className="logo"
              src="./images/grocode-logo.png"
              alt="Grocode logo"
            />

            <a
              role="button"
              className="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item">Home</a>

              <a className="navbar-item">About</a>

              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">Grospiration</a>

                <div className="navbar-dropdown">
                  <a className="navbar-item">Challenge Ideas</a>
                  <a className="navbar-item is-selected">Success Stories</a>
                  <a className="navbar-item">Contact</a>
                  <hr className="navbar-divider" />
                </div>
              </div>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <a className="button is-primary">
                    <strong>Sign up</strong>
                  </a>
                  <a className="button is-light">Log in</a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default PageHeader
