import EmpolyeersListItem from "../employeers-list-item/employeers-list-item";

import './employeers-list.css';

const   EmployeersList = () => {
    return (
        <ul className="app-list list-group">
            <EmpolyeersListItem/>
            <EmpolyeersListItem/>
            <EmpolyeersListItem/>
        </ul>
    );
}

export default EmployeersList;