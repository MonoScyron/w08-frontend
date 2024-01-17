import React from 'react';
import TableComponent from "../Utils/TableComponent/TableComponent";

function Abnormalities() {
    return (
        <div>
            <div> Abnormalities Page</div>
            <TableComponent apiUrl={`${process.env.REACT_APP_FLASK_API_URL}/abnormalities`}/>
        </div>
    );
}

export default Abnormalities;
