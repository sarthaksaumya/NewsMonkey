import React, { Component} from 'react'
import { Link } from 'react-router-dom';

export class NavBar extends Component {
  handleOnChange=(event)=>{
    this.props.onCountryChange(event.target.value);
    // event.preventDefault();
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">NEWS</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item"><Link className="nav-link" to="/general">General</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
              </ul>
            </div>
            <div className="d-flex">
                <select className="dropdown-menu-dark" onChange={this.handleOnChange}>
                  <option value="in">India</option>
                  <option value="us">USA</option>
                </select>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default NavBar
