import React, { useEffect, useState } from 'react';
import { Agent } from "../Utils/Types";

const AgentDetail = () => {
    const apiUrl = `${process.env.REACT_APP_FLASK_API_URL}/agents`
    const [agent, setAgentData] = useState<Agent | null>(null);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const agentId = urlParams.get('id');

        if(!agent) {
            fetch(`${apiUrl}/${agentId}`)
                .then(response => {
                    console.log('AgentDetail data found');
                    return response.json();
                })
                .then(data => setAgentData(data))
                .then(() => null)
                .catch(error => console.error('Error fetching data:', error));
        }
    }, [agent, apiUrl]);

    if(!agent) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Agent Detail</h2>
            <ul>
                {Object.entries(agent).map(([key, value]) => (
                    <li key={key}>
                        <strong>{key}:</strong> {!value || typeof value !== 'object' ? value : value.id}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AgentDetail;
