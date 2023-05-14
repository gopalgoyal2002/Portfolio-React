import React, { Component } from "react";
import "./Header.css";
import { NavLink, Link } from "react-router-dom";
import Slide from 'react-reveal/Slide';

const onMouseEnter = (event, color) => {
  const el = event.target;
  el.style.backgroundColor = color;
};

const onMouseOut = (event) => {
  const el = event.target;
  el.style.backgroundColor = "transparent";
};

class Header extends Component {
  render() {
    return (
      <>
      <Slide top>
        <div className="main-header">
          <header className="header">
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn">
              <span className="navicon"></span>
            </label>
            <ul className="menu" >
              <li>
                <NavLink className="nav"
                  to="/home"
                  tag={Link}
                  activestyle={{ fontWeight: "bold" ,color:"black"}}
                  
                  onMouseEnter={(event) => onMouseEnter(event)}
                  onMouseOut={(event) => onMouseOut(event)}
                 >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="nav"
                  to="/education"
                  tag={Link}
                  activestyle={{ fontWeight: "bold" }}
                  
                  onMouseEnter={(event) => onMouseEnter(event)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Education And Portfolios
                </NavLink>
              </li>
              <li>
                <NavLink className="nav"
                  to="/experience"
                  tag={Link}
                  activestyle={{ fontWeight: "bold" }}
                  onMouseEnter={(event) => onMouseEnter(event)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Experience
                </NavLink>
              </li>
              <li>
                <NavLink className="nav"
                  to="/projects"
                  tag={Link}
                  activestyle={{ fontWeight: "bold" }}
                  
                  onMouseEnter={(event) => onMouseEnter(event)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Projects
                </NavLink>
              </li>
              {/* <li>
                <NavLink className="nav"
                  to="/blogs"
                  tag={Link}
                  activestyle={{ fontWeight: "bold" }}
                  
                  onMouseEnter={(event) => onMouseEnter(event)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Blogs
                </NavLink>
              </li> */}
               <li>
                <NavLink className="nav"
                  to="/skills"
                  tag={Link}
                  activestyle={{ fontWeight: "bold" }}
                  
                  onMouseEnter={(event) => onMouseEnter(event)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Skills
                </NavLink>
              </li>
              <li>
                <NavLink className="nav"
                  to="/contact"
                  tag={Link}
                  activestyle={{ fontWeight: "bold" }}
                  
                  onMouseEnter={(event) => onMouseEnter(event)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                Contact Me
                </NavLink>
              </li>
            </ul>
          </header>
        </div>
        </Slide>
        </>
    );
  }
}
export default Header;
