import React from "react";

export default ({key,children,generate}) => {

    return (
        <li key={key} className="draggable">
            {children}
        </li>
    );  
};