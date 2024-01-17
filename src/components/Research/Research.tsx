import React from 'react';
import TableComponent from "../Utils/TableComponent/TableComponent";

function Research() {
    return (
        <div>
            <div>Research Page</div>
            <TableComponent apiUrl={`${process.env.REACT_APP_FLASK_API_URL}/clocks`}/>
        </div>
    );
}

export default Research;
