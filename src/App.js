import { Provider } from 'react-redux';

import './App.css';
import Content from './components/Content/Content';
import Sidebar from './components/Sidebar/Sidebar';
import store from './redux/store';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Sidebar/>
                <Content/>
            </div>
        </Provider>
    );
}

export default App;
