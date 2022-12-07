import axios from 'axios';
import { useState, useEffect } from 'react'
// import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

function Read() {

    useEffect(() => {
        apiCall();
    }, []);

    const [gateData, setData] = useState([]);

    const apiCall = () => {
      axios.get("https://638f110a9cbdb0dbe31c107f.mockapi.io/crud-app").then((response) => {
            
            setData(response.data);
            console.log(response);
        })               
    }

    const deleteitem = (id)=>{
        console.log("delete")
        axios.delete(`https://638f110a9cbdb0dbe31c107f.mockapi.io/crud-app/${id}`).then((respa)=>{
           apiCall();
        });
        
    }

    const updatedata = (ids)=>{
       let index = gateData.map((item)=> item.id).indexOf(ids);
        console.log();
       localStorage.setItem("id", ids);
       localStorage.setItem("name", gateData[index].takedata.name);
       localStorage.setItem("email", gateData[index].takedata.email);
       localStorage.setItem("city", gateData[index].takedata.city);       
    }

    const tablbody = () => {
        let trtd = gateData.map((item, i) => {
            return (
                <tr key={i}>
                    <td>{item.id}</td>
                    <td>{item.takedata.name}</td>
                    <td>{item.takedata.email}</td>
                    <td>{item.takedata.city}</td>
                    <td><Link to="/update"><button className="btn btn-primary" onClick={()=> updatedata(item.id)}>Edit</button></Link>
                        <button className="btn btn-danger mx-2" onClick={()=> deleteitem(item.id)}>Dalete</button>
                    </td>
                </tr>
            );
        })
        return trtd;
    }




    return (
        <div className="container mt-4">
            <Link to="/"><button className="btn btn-primary">Add Data</button></Link>
            <table className="table">
                <thead>
                    <tr>
                        <th>#id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>City</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {tablbody()}
                </tbody>
            </table>
        </div>
    )
}
export default Read;