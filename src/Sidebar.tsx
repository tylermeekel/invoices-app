//May be unused in future.

import React from "react";
import './Sidebar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGhost } from "@fortawesome/free-solid-svg-icons";

function Sidebar(){
    return (
        <div className="sidebar">
            <div className="sidebar-top"><FontAwesomeIcon icon={faGhost} size="2x"/></div>
            <div className="sidebar-bottom">
                <div className="profile-image"></div>
            </div>
        </div>
    )
}

export default Sidebar;