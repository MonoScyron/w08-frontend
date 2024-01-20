import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const AgentsList = () => {
    const navigate = useNavigate()
    const apiUrl = `${process.env.REACT_APP_FLASK_API_URL}/agents`
    const [agentsData, setAgentsData] = useState<any[]>([]);

    useEffect(() => {
        if(agentsData.length === 0) {
            fetch(apiUrl)
                .then(response => {
                    console.log('AgentsList data found');
                    return response.json();
                })
                .then(data => setAgentsData(data))
                .then(() => null)
                .catch(error => console.error('Error fetching data:', error));
        }
    }, [apiUrl, agentsData]);

    if(agentsData.length === 0) {
        console.log('No agents data found');
    }

    const handleAgentClick = (agentId: Number) => {
        navigate(`/agents?id=${agentId}`);
    };

    return (
        <div>
            <h2>Agents List</h2>
            <ul>
                {agentsData.map((agent) => (
                    <li key={agent.id} onClick={() => handleAgentClick(agent.id)}>
                        {agent.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AgentsList;