import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import './sellpage.css'
function Sellpage() {
  const [name, setName] = useState("");
  const [cont, setcont] = useState("");
  const [add, setadd] = useState("");
  const [bread, setbread] = useState("");
  const [gen, setgen] = useState("");
  const [age, setage] = useState("");
  const [url, seturl] = useState("");
  const [price,setprice] = useState(""); 


  const handelSubmit = (e:any)=>{
    e.preventDefault();
    const userData = {
        
            number: cont,
            name: name,
            address: add,
            bread: bread,
            gender: gen,
            age: age,
            imgurl: url,
            price: price
        
       
    };
    axios.post("http://localhost:1234/cust",userData)
    .then((res)=>{
      if(res.data != null){
        setName("");
        setadd("");
        setage('');
        setbread('');
        setcont('');
        setgen('');
        seturl('');
        setprice('');
        alert("success");

      }
       else{
        console.log("failure")
       }
    })
 }

  return (
    <div className="background">
    <div className="container bg-container">
      <form className="" onSubmit={handelSubmit} >
        <h3 className="text-center">Customer Details</h3>
        <label htmlFor="customer_name">Name:</label>
        <br />
        <input type="text" id="customer_name" name="customer_name" required 
        className="form-control"
        onChange={(e)=>setName(e.target.value)}
        />
        <br />

        <label htmlFor="contact">Contact:</label>
        <br />
        <input type="text" id="contact" name="contact" required 
        onChange={(e)=>setcont(e.target.value)} className="form-control"
        />
        <br />

        <label htmlFor="address">Address:</label>
        <br />
        <textarea id="address" name="address" className="form-control" required onChange={(e)=>setadd(e.target.value)}></textarea>
        <br />

        <h3 className="text-center">Puppy Details</h3>
        <label htmlFor="breed">Bread:</label>
        <br />
        <input type="text" id="breed" name="breed"className="form-control" required onChange={(e)=>setbread(e.target.value)} />
        <br />

        <label>Gender:</label>
        <br />
        <label htmlFor="gender" >Male</label>
        <input type="radio" name="gender" id="gender" value="male"  onChange={(e)=>setgen(e.target.value)} />
        <br></br>
        <label htmlFor="gender">Female</label>
        <input type="radio" name="gender" id="gender" value="female"  onChange={(e)=>setgen(e.target.value)}/>
        <br />

        <label htmlFor="puppy_age">Age (months):</label>
        <br />
        <input type="number" id="puppy_age" name="puppy_age" min="0" className="form-control" required onChange={(e)=>setage(e.target.value)}/>
        <br />
        <label htmlFor="url">Image Url</label>
        <input type="text" id="url" className="form-control" required onChange={(e)=>seturl(e.target.value)}/>
        <label htmlFor="puppy_name">Price:</label>
        <br />
        <input type="text" id="puppy_name" className="form-control" name="puppy_name" required onChange={(e)=>setprice(e.target.value)}/>
        <br />
        <div className="text-center">
        <input type="submit" className="btn btn-success w-25" value="Submit" /></div>
      </form>
    </div>
    </div>
  );
}
export default Sellpage;
