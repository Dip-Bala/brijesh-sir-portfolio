import React from 'react'

function Descriptions(props) {
    return (
        <li className = "text-lg font-medium list-disc">
            <p>{props.property}</p>
        </li>
    );
}

export default Descriptions;