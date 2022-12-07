import {useState, } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router";
// import { Link } from "react-router-dom";


function Create(){

const [takedata, setTakedaata] = useState([]);

const history = useNavigate();

const takeValue = (e)=>{
    let name = e.target.name;
    let value = e.target.value;
    setTakedaata({...takedata, [name]:value});
}

const submit = (e)=>{
    e.preventDefault();
    axios.post("https://638f110a9cbdb0dbe31c107f.mockapi.io/crud-app",{takedata}).then((respo)=>{
       //console.log(takedata);
        history("/read");
    });
}

return(
    <form>
    <div className="container mt-3">    
    <div className="row mb-3">
      <label className="col-sm-2 col-form-label">Name</label>
      <div className="col-sm-10">
        <input onChange={takeValue} name="name" type="email" className="form-control" />
      </div>
    </div>
    <div className="row mb-3">
      <label className="col-sm-2 col-form-label">Email</label>
      <div className="col-sm-10">
        <input onChange={takeValue} name="email" type="text" className="form-control" />
      </div>
    </div>
    <div className="row mb-3">
      <label className="col-sm-2 col-form-label">City</label>
      <div className="col-sm-10">
        <input onChange={takeValue} name="city" type="text" className="form-control" />
      </div>
    </div>
    
    <button onClick={submit} type="submit" className="btn btn-primary">Submit</button>
    </div>
  </form>
);
}
export default Create;