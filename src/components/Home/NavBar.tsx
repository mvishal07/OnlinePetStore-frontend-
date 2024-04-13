import './home1.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShop, faArrowRight } from "@fortawesome/free-solid-svg-icons";
function NavBar(){
    return<div>
        
        <nav className="navbar navbar-expand-lg bg-light navbar-light shadow-sm py-3 py-lg-0 px-3 px-lg-0 sticky-md-top">
        <a href="/" className="navbar-brand ms-lg-5">
          <h1 className="m-0 text-uppercase text-dark">
            <FontAwesomeIcon icon={faShop} className="me-3" />
            Pet Paradise
          </h1>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0">
            <a href="/" className="nav-item nav-link active">
              Home
            </a>
            <a href="" className="nav-item nav-link">
              About
            </a>
            <a href="/puppy" className="nav-item nav-link">
              Puppies
            </a>
            
            <div className="nav-item dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Product</a>
                    <div className="dropdown-menu m-0">
                        <a href="/prd" className="dropdown-item">Food</a>
                        <a href="/supp" className="dropdown-item">Supplements</a>
                        <a href="/treat" className="dropdown-item">Treats</a>
                        <a href="/acce" className="dropdown-item">Accessories</a>
                       
                    </div>
                </div>
            <a href="/sell" className="nav-item nav-link">
              Sell
            </a>
            <a
              href="/login"
              className="nav-item nav-link nav-contact bg-primary text-white px-5 ms-lg-5"
            >
              Account <FontAwesomeIcon icon={faArrowRight} className="me-3" />
            </a>
          </div>
        </div>
      </nav>
    </div>
}
export default NavBar;