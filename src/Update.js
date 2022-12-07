import {useState, useEffect, } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";


function Update(){

const [takedata, setTakedaata] = useState([]);

const history = useNavigate();

const takeValue = (e)=>{
    let name = e.target.name;
    let value = e.target.value;
    setTakedaata({...takedata, [name]:value});
    console.log(takedata);
}
const currentid = localStorage.getItem("id");
const savedata = (e)=>{
    e.preventDefault();
    axios.put(`https://638f110a9cbdb0dbe31c107f.mockapi.io/crud-app/${currentid}`,{takedata}).then((respo)=>{
       //console.log(takedata);
        history("/read");
    });
}

useEffect(()=>{
    setTakedaata({ 
            name:localStorage.getItem("name"),
            email:localStorage.getItem("email"),
            city:localStorage.getItem("city")
      
    })
},[])

return(
    <form>
    <div className="container mt-3">    
    <div className="row mb-3">
      <label className="col-sm-2 col-form-label">Name</label>
      <div className="col-sm-10">
        <input onChange={takeValue} name="name" value={takedata.name} type="email" className="form-control" />
      </div>
    </div>
    <div className="row mb-3">
      <label className="col-sm-2 col-form-label">Email</label>
      <div className="col-sm-10">
        <input onChange={takeValue} name="email" value={takedata.email} type="text" className="form-control" />
      </div>
    </div>
    <div className="row mb-3">
      <label className="col-sm-2 col-form-label">City</label>
      <div className="col-sm-10">
        <input onChange={takeValue} name="city" value={takedata.city} type="text" className="form-control" />
      </div>
    </div>
    
    <Link to="/read"><button onClick={savedata} type="submit" className="btn btn-primary">Save Data</button></Link>
    </div>
  </form>
);
}
export default Update;