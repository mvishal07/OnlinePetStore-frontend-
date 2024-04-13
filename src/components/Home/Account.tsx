import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";


function Account(){
    const location  = useLocation();
    const {email} = location.state ||{};
    const [name,setName] = useState("");
    console.log(email)
    useEffect(()=>{
        if(email){
            axios.get('http://localhost:1234/nm?email='+email)
        .then(response=>{
            setName(response.data.name);
        })
        .catch(error=>{
            console.log(error)
        });
        }
        
    },[email]);
    return<div>
        <div>
            <h1>hello <span>{name}</span></h1>
        </div>
    </div>
}
export default Account;