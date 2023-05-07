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
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
              <span className="navbar-toggler-icon"></span>
            </button>
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
                    <option value="ru">Russia</option>
                    <option value="hk">Hong Kong</option>
                    <option value="gb">United Kingdom</option>
                    <option value="ap">Japan</option>
                    <option value="tw">Taiwan</option>
                    <option value="de">Germany</option>
                    <option value="kr">South Korea</option>
                    <option value="il">Israel</option>
                    <option value="nz">New Zealand</option>
                  </select>
              </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default NavBar
