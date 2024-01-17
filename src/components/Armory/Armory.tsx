import React from 'react';
import TableComponent from "../Utils/TableComponent/TableComponent";

function Armory() {
    return (
        <div>
            <div>Armory Page</div>
            <TableComponent apiUrl={`${process.env.REACT_APP_FLASK_API_URL}/egos`}/>
        </div>
    );
}

export default Armory;
