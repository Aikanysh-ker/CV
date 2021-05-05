import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, NavItem, NavLink } from "reactstrap";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <div className="content">
        <div className="main">
          <Router>
            <Nav vertical className='nav'>
              <NavItem>
                <NavLink>
                  <Link className="title" to="/">
                    Home
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link className="title" to="/about">
                    About
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link className="title" to="/resume">
                    Resume
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link className="title" to="/portfolio">
                    Portfolio
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link className="title" to="/contact">
                    Contact
                  </Link>
                </NavLink>
              </NavItem>
            </Nav>
            <Switch className='content'>
              <Route  path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/resume" component={Resume} />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </Router>
        </div>
      </div>
    </>
  );
}

export default App;
