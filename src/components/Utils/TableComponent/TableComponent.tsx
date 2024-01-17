import React, { useState, useEffect } from 'react';
import './TableComponents.css';

// @ts-ignore
function TableComponent({apiUrl}) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(apiUrl)
            .then(response => {
                return response.json();
            })
            .then(data => setData(data))
            .then(() => null)
            .catch(error => console.error('Error fetching data:', error));
    }, [apiUrl, data]);

    if(!data || data.length === 0) {
        console.log(data);
        return <p>No data available</p>;
    }

    const headers = Object.keys(data[0]);

    return (
        <table className="data-table">
            <thead>
            <tr>
                {headers.map(header => (
                    <th key={header}>{header}</th>
                ))}
            </tr>
            </thead>
            <tbody>
            {data.map((row, index) => (
                <tr key={index}>
                    {headers.map(header => (
                        <td key={header}>{typeof row[header] !== 'object' ? row[header] : header}</td>
                    ))}
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default TableComponent;
