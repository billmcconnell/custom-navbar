import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page"> <Link to="/" style={{
                    color: "white",
               }}>Home</Link></a>
            </li>
            <li className="nav-item">
              <div className="nav-link" aria-current="page"> <Link to="/SignIn" style={{
                    color: "white",
                }}>Sign In</Link></div>
            </li>
            <li className="nav-item">
              <div className="nav-link" aria-current="page"> <Link to="/Mission" style={{
                    color: "white",
                }}>Mission</Link></div>
            </li>
            <li className="nav-item">
              <div className="nav-link" aria-current="page"> <Link to="/About" style={{
                    color: "white",
                }}>About</Link></div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;