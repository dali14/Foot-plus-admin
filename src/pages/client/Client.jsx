import { Link } from "react-router-dom";
import "./client.css";
import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import withAdmin from "../../withAdmin";


const  Client= () => {

    const params = useParams();
    const [client, setClient] = useState(null);
    const [role,setRole] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
    
    
        fetch(`http://localhost:3004/Users/UpdateUser/${params.id}`, {
          method: 'put', headers: { "Content-Type": "application/json", 'Access-Control-Allow-Origin': '*' },
          body: JSON.stringify({
            role ,
          }
          )
        }
        )
          .then(res => res.json())
          .then(res => {
            
            role("")
            
          });
    
    
    
      }

      useEffect(() => {
        fetch(`http://localhost:3004/Users/OneUser/${params.id}`)
        .then(res => res.json())
        .then(res => setClient(res))
    },[params.id])

    return (
        <div className="product">
          <div className="productTitleContainer">
            <h1 className="productTitle">Client</h1> 
            </div>


            <div className="productBottom">
     
      
          <form className="productForm">
          
                <div className="productFormLeft">
                  <label>Name</label>
                  <input type="text" placeholder="name" value={client?.name} />
                  
                  <label>email</label>
                  <input type="text" placeholder="Hard" value={client?.email} />

                  <label>cin</label>
                  <input type="text" placeholder="time with sec" value={client?.cin} />

                  <label>tel</label>
                  <input type="text" placeholder="text" value={client?.tel} />

                  <label>ville</label>
                  <input type="text" placeholder="text" value={client?.ville} />
                  
                 </div>
                </form>
                <div className="userUpdateRight">
                <h1 className="productTitle">Update Role ({client?.role})</h1>
                <div className="productBottom">
                    <form className="productForm" onSubmit={handleSubmit}>

                        <div className="productFormLeft">

                            <label>Role</label>
                            <select name="active" id="active" value={role} onChange={(e) => setRole(e.target.value)}>
                                <option value="Admin">Admin</option>
                                <option value="Client">Client</option>
                                <option value="Proprtire Terrain">Proprtire Terrain</option>
                            </select>
                        </div>
                        <div className="productFormRight">
                            <button className="productButton" type="submit">Update</button>
                        </div>
                    </form>
                </div>

                </div>
                </div>
                
      </div>
);
}
export default withAdmin(Client);