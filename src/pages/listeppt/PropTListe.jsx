import "./proptListe.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import withAdmin from "../../withAdmin";


const PropTListe= () => {

    const clientRows = [
        {
          id: '',
          name: '',
          email: '',
          cin: '',
          tel: '',
          ville: ''
        },]

        const [clients, setClients] = useState(clientRows);
        const url = 'http://localhost:3004/Users/AllUser';

        useEffect(() => {
            fetch(url)
            .then(res => res.json())
            .then(res => setClients([...res].filter((res) =>{
              if (res.role === "Proprtire Terrain"){
                return res;
              }
            })
              .map((users) => ({
                id:users._id,
                name: users.name,
                email:users.email,
                cin:users.cin,
                tel:users.tel,
                ville:users.ville,
                role:users.role,
            }))))
              
              
               
               //!!!!!!!!!!!!!!!!!!!!!!!!!!!
          }, [])
          const columns = [
            { field: "id",
             headerName: "ID",
              width: 100 },
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
              field: "email",
              headerName: "email",
              width: 120,},
           
            {
              field: "cin",
              headerName: "cin",
              width: 160,
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
                field: "role",
                headerName: "role",
                width: 120,
              },
            {
              field: "action",
              headerName: "Action",
              width: 120,
              renderCell: (params) => {
                return (
                  <>
                
                    <Link to={"/client/" + params.row.id} >
                      <button className="productListEdit">View</button>
                    </Link>
                    
                  </>
                );
              },
            },
          ];
          return (
    
            <div className="productList">
               <h1 className="productTitle">Liste Des Client </h1>
               <br></br>
              <DataGrid
                rows={clients}
                disableSelectionOnClick
                columns={columns}
                pageSize={8}
                checkboxSelection
              />
            </div>
          );
        }
        export default withAdmin(PropTListe);