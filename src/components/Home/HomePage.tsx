import "./home1.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


import Products from "./Products";
import { Link } from "react-router-dom";
import Supp from "./Supp";
function HomePage() {
  return (
    <div>
      
<div>
      <div
        id="carouselExampleRide"
        className="carousel slide a1"
        data-bs-ride="true"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="img\img1.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img
              src="https://qph.cf2.quoracdn.net/main-qimg-604cf6261dd89518e6c5fec3d0e7c1d7-lq"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img src="https://cdn.shopify.com/s/files/1/0565/8021/0861/files/Frame_106723010-min_6711885e-5c42-4153-b317-de02593d2232.png?v=1712902848" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleRide"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleRide"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>

    <div className="container2 text-center mt-2">
      <h1>Category</h1>
    </div>

      <div className="d-flex flex-row justify-content-around overflow-auto mt-2 mb-3" >
       
      
        <div className="card1">
          <Link to='/prd'>
          <img
            src="https://www.pngplay.com/wp-content/uploads/6/Drools-Dog-Food-Transparent-PNG.png"
            className="cardimage"
            alt=".."
          />
          <p className="text">FOOD</p></Link>
        </div>

        <div className="card1">
        <Link to="/supp">
          <img
            src="https://th.bing.com/th/id/R.fb8723c46b955846f234c46f68793744?rik=mei0S6OxxwHVuw&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2017%2f11%2fVitamin-PNG-Picture.png&ehk=X3WjHhaBFH%2bmkVTBzNJVPrekpDb30sfvol13W5DwgOA%3d&risl=&pid=ImgRaw&r=0"
            className="cardimage"
            alt=".."
          />
          <p className="text">Supplements</p>
          </Link>
        </div>

        <div className="card1">
        <Link to="/treat">
          <img
            src="https://clipground.com/images/dog-treats-png-5.png"
            className="cardimage"
            alt=".."
          />
          <p className="text">Treat</p>
          </Link>
        </div>

        <div className="card1">
          <Link to="/acce">
          <img
            src="https://top-n-tails.co.uk/wp-content/uploads/2020/08/pet-accessories-on-a-floor.png"
            className="cardimage"
            alt=".."
          />
          <p className="text">Accessories</p>
          </Link>
        </div>
      </div>

      <Products/>
      <Supp/>
    </div>
  );
}
export default HomePage;
