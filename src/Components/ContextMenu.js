import React from "react";

const ContextMenu = ({links}) => {

    return(
        <div id="contextMenu">
            <ul>
            {links.map ((link,ind) => (
                 <li key={`link${ind}`} >{link}</li>
                )
            )}
            </ul>
        </div>
    )
}


export default ContextMenu;