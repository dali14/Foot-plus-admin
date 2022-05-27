import "./sidebar.css"

import { LineStyle ,PersonOutline ,GroupAdd ,DoneOutline ,RemoveCircleOutline ,ArtTrack ,LiveHelp } from "@material-ui/icons";
import { Link } from "react-router-dom";
export default function Sidebar() {
  return (
    <div className="sidebar"> 
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">

                    <Link to="/dash" className="link">
                    <li className="sidebarListItem active">
                    <LineStyle className="sidebarIcon"/>
                        Home
                    </li>
                    </Link>

                    <Link to="/clients" className="link">
                    <li className="sidebarListItem">
                        <LiveHelp className="sidebarIcon"/>
                         Clients
                    </li>
                    </Link>
                    <Link to="/propterrain" className="link">
                    <li className="sidebarListItem">
                        <LiveHelp className="sidebarIcon"/>
                        Proprtaire Terrain
                    </li>
                    </Link>
                    
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Terrains</h3>
                <ul className="sidebarList">
                <Link to="/AllTerrains" className="link">
                    <li className="sidebarListItem active">
                        <LineStyle className="sidebarIcon"/>
                          Terrains

                    </li>
                    </Link>
                    <Link to="/valideTerrain" className="link">
                    <li className="sidebarListItem">
                        <DoneOutline className="sidebarIcon"/>
                        Valide Terrains

                    </li>
                    </Link>
                    <Link to="/NonValideTerrain" className="link">
                    <li className="sidebarListItem">
                        <RemoveCircleOutline/>
                         Non Valide Terrains

                    </li>
                    </Link>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Staff</h3>
                <ul className="sidebarList">
                <Link to="/Myaccount" className="link">
                    <li className="sidebarListItem active">
                        <PersonOutline className="sidebarIcon"/>
                        Users

                    </li>
                    </Link>
                    <Link to="/addAdmin" className="link">
                    <li className="sidebarListItem">
                    <GroupAdd className="sidebarIcon"/>
                        Add Admin

                    </li>
                    </Link>
                </ul>
            </div>
        </div>
  
    </div>
  )
}
