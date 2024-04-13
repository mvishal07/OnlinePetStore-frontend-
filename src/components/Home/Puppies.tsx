import axios from "axios";
import { useEffect, useState } from "react";
import './puppies.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faContactCard} from "@fortawesome/free-solid-svg-icons";

function Puppies(){
    interface Details{
            number:number;
            name: String;
            address: String;
            bread: String;
            gender: String;
            age: number;
            imgurl: string;
            price: String;

    }
const [puppy,setPuppy] = useState<Details[]>([]);
useEffect(()=>{
    axios.get<Details[]>("http://localhost:1234/puppy")
    .then((res)=>{
        setPuppy(res.data);
    });
},[]);
    return<div className="d-flex overflow-auto justify-content-around container7">
        {puppy.map((i, index) => (
    <div key={index} className="container1 card-container">
        <div className="card" style={{ overflow: "hidden" }}>
            <img src={i.imgurl} alt="img" className="card-image" />
        </div>
        <div className="details">
            <h2 className="heading">{i.bread}</h2>
            <p><strong>Gender:</strong> {i.gender}</p>
            <p><strong>Age:</strong> {i.age} Months</p>
            <p><strong>Price:</strong> {i.price}</p>
        </div>
        <div className="contact">
            <h3> <FontAwesomeIcon icon={faContactCard}/> Contact Details</h3>
            <p><strong>Name:</strong> {i.name}</p>
            <p><strong>Phone:</strong> {i.number}</p>
            <p><strong>Address:</strong> {i.address}</p>
        </div>
    </div>
))};
      </div>
}

export default Puppies;