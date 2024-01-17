import React from 'react';
import TableComponent from "../Utils/TableComponent/TableComponent";

function Players() {
    return (
        <div>
            <div>Players Page</div>
            <TableComponent apiUrl={`${process.env.REACT_APP_FLASK_API_URL}/agents`}/>
        </div>
    );
}

export default Players;
