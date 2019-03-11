import React from "react";
import Draggable from "./Draggable";

export default () => {

   

    return (
        <ul className="draggable-container">
        {
            Array(16).fill(<Draggable />,0)
        }
        </ul>
    );

};