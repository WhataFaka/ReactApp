import AppInfo from '../components/app-info/app-info';
import SearchPanel from '../components/search-panel/search-panel';
import AppFilter from '../components/app-filter/app-filter';
import EmployeersList from '../components/employeers-list/employeers-list';
import EmpolyeersAddForm from '../components/employeers-add-form/employeers-add-form';

import './app.css';

function App() {
    return (
        <div className="app">
            <AppInfo/>
            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployeersList/>
            <EmpolyeersAddForm/>
        </div>
    );
}

export default App;