import AgentsList from "./AgentList";
import AgentDetail from "./AgentDetail";

function Agents() {

    return (
        <div>
            <div>
                {window.location.search === '' && <AgentsList/>}
                {window.location.search !== '' && <AgentDetail/>}
            </div>
        </div>
    );
}

export default Agents;
