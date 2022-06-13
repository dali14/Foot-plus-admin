import { Link } from "react-router-dom";
import "./terrain.css";
import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import withAdmin from "../../withAdmin";


const  Terrain= () => {

    const params = useParams();
    const [terrain, setTerrain] = useState(null);
    const [valide,setValide] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
    
    
        fetch(`http://62.210.130.244:3004/terrain/UpdateTerrain/${params.id}`, {
          method: 'put', headers: { "Content-Type": "application/json", 'Access-Control-Allow-Origin': '*' },
          body: JSON.stringify({
            valide  ,
          }
          )
        }
        )
          .then(res => res.json())
          .then(res => {
            
            
            
          });
    
    
    
      }

      useEffect(() => {
        fetch(`http://62.210.130.244:3004/terrain/OneTerrain/${params.id}`)
        .then(res => res.json())
        .then(res => setTerrain(res))
    },[params.id])

    return (
        <div className="product">
          <div className="productTitleContainer">
            <h1 className="productTitle">Terrain</h1> 
            </div>


            <div className="productBottom">
     
      
          <form className="productForm">
          
                <div className="productFormLeft">
                  <label>Name</label>
                  <input type="text" placeholder="name" value={terrain?.nameTerrain} />
                  
                  <label>email</label>
                  <input type="text" placeholder="Hard@hard.com" value={terrain?.email} />

                  <label>area</label>
                  <input type="text" placeholder="time with sec" value={terrain?.area} />

                  <label>id user</label>
                  <input type="text" placeholder="text" value={terrain?.id_user} />

                  <label>ville</label>
                  <input type="text" placeholder="text" value={terrain?.ville} />
                  
                 </div>
                </form>
                <div className="userUpdateRight">
                <h1 className="productTitle">Update Etat ({terrain?.valide})</h1>
                <div className="productBottom">
                    <form className="productForm" onSubmit={handleSubmit}>

                        <div className="productFormLeft">

                            <label>Etats</label>
                            <select name="active" id="active" value={valide} onChange={(e) => setValide(e.target.value)}>
                                <option value="open">Open</option>
                                <option value="closed">Closed</option>
                                
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
export default withAdmin(Terrain);