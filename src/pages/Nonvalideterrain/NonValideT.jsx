import "./NonValideT.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import withAdmin from "../../withAdmin";


const TerrainNonValide= () => {

    const terrainRows = [
        {
          id: '',
          nameTerrain: '',
          area: '',
          ville: '',
          id_user: '',
          email: '',
          valide: '',
          address: '',
          tel: '',
        },]

        const [terrains, setTerrains] = useState(terrainRows);
        const url = 'http://localhost:3004/terrain/AllTerrain';

        useEffect(() => {
            fetch(url)
            .then(res => res.json())
            .then(res => setTerrains([...res].filter((res) =>{
                if (res.valide === "closed"){
                  return res;
                }
              })
              
              .map((terrain) => ({
                id:terrain._id,
                name: terrain.nameTerrain,
                area:terrain.area,
                id_user:terrain.id_user,
                tel:terrain.tel,
                ville:terrain.ville,
                email:terrain.email,
                valide:terrain.valide,
            }))))
              
              
               
               //!!!!!!!!!!!!!!!!!!!!!!!!!!!
          }, [])
          const columns = [
            { field: "id",
             headerName: "ID",
              width: 90 },
            {
              field: "name",
              headerName: "name",
              width: 160,
              renderCell: (params) => {
                return (
                  <div className="productListItem">
                    
                    {params.row.name}
                  </div>
                );
              },
            },
            { 
              field: "area",
              headerName: "area",
              width: 120,},
            {
              field: "id_user",
              headerName: "id_user",
              width: 160,
            },
            {
              field: "tel",
              headerName: "tel",
              width: 120,
            },
            {
                field: "tel",
                headerName: "tel",
                width: 120,
              },
              {
                field: "ville",
                headerName: "ville",
                width: 120,
              },
              {
                field: "email",
                headerName: "email",
                width: 120,
              },
              {
                field: "valide",
                headerName: "Etat",
                width: 120,
              },
            {
              field: "action",
              headerName: "Action",
              width: 120,
              renderCell: (params) => {
                return (
                  <>
                
                    <Link to={"/terrain/" + params.row.id} >
                      <button className="productListEdit">View</button>
                    </Link>
                  </>
                );
              },
            },
          ];
          return (
    
            <div className="productList">
               <h1 className="productTitle">Liste Des Terrain  </h1>
               <br></br>
              <DataGrid
                rows={terrains}
                disableSelectionOnClick
                columns={columns}
                pageSize={8}
                checkboxSelection
              />
            </div>
          );
        }
        export default withAdmin(TerrainNonValide);