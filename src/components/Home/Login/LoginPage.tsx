import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//import Signup from "./Signup";

//import "./login.css";
// import Account from "../Account";
function LoginPage() {
  const navigate = useNavigate();
  const [email, setName] = useState("");
  const [password, setPassword] = useState("");
  const [wrong,setData] = useState("");

  const handlesubmit = (e: any) => {
    e.preventDefault();
    axios
      .get(
         "http://localhost:1234/login?email=" + email + "&password=" + password
      )
      .then((res) => {
        if (res.data === "success") {
        
        //  navigate("/acc",{state:{email}});
         navigate("/");
         
         console.log(email)
         console.log(res.data)
        } else {
          setPassword("");
          setName("");
          setData("Incorrect Credentials")
          console.log(res.data);
        }
      });
  };

  return (
    <div>
      <div className="video-background">
      <video autoPlay loop muted>
            <source src="img/bgvideo.mp4" type="video/mp4"/>
            
            Your browser does not support the video tag.
        </video>
        
      
        <div className=" py-5 h-95">
          <div className="row d-flex justify-content-center align-items-center h-95">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <form onSubmit={handlesubmit}>
                <div className="content">
                  <div className="card-body p-5 text-center">
                    <div className="mb-md-5 mt-md-4 pb-5">
                      <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                      <p className="text-dark-50 mb-5">
                        Please enter your login and password!
                      </p>

                      <div className="form-outline form-white mb-4">
                        <input
                          type="text"
                          id="typeEmailX"
                          className="form-control form-control-lg"
                          required
                          value={email}
                          onChange={(e) => setName(e.target.value)}
                        />
                        <label className="form-label" htmlFor="typeEmailX">
                          UserName
                        </label>
                      </div>

                      <div className="form-outline form-white mb-4">
                        <input
                          type="password"
                          id="typePasswordX"
                          className="form-control form-control-lg"
                          value={password}
                          required
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <label className="form-label" htmlFor="typePasswordX">
                          Password
                        </label>
                      </div>

                      <p className="small mb-5 pb-lg-2">
                        <a className="text-white-50" href="#!">
                          Forgot password?
                        </a>
                      </p>
                      <p className="error">{wrong}</p>

                      <button
                        className="btn btn-outline-light btn-lg px-5"
                        type="submit"
                      >
                        Login
                      </button>
                      
                      <Link to="/signup"> <button className="btn btn-danger btn-lg px-5 mt-2" 
                      >SignUp</button></Link>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
  
      </div>
    </div>
  );
}
export default LoginPage;
