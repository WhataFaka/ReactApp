import AppInfo from '../components/app-info/app-info';
import SearchPanel from '../components/search-panel/search-panel';
import AppFilter from '../components/app-filter/app-filter';
import EmployeersList from '../components/employeers-list/employeers-list';
import EmpolyeersAddForm from '../components/employeers-add-form/employeers-add-form';

import './app.css';

function App() {

    const data = [
        {name: 'Nik K.', salary: 800, increase: false},
        {name: 'Anna T.', salary: 4250, increase: true},
        {name: 'Alya K.', salary: 1550, increase: false},
    ];

    return (
        <div className="app">
            <AppInfo/>
            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployeersList data={data}/>
            <EmpolyeersAddForm/>
        </div>
    );
}

export default App;