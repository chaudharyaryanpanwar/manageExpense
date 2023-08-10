import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
<div>
  <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <Link className="navbar-brand" to ="/">EXPENSE</Link>
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</div>

  )
}

export default Header;