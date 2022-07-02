import { useState } from 'react';
import { Provider } from 'react-redux';

import './App.css';
import Content from './components/Content/Content';
import Sidebar from './components/Sidebar/Sidebar';
import store from './redux/store';

function App() {
    const [category, setCategory] = useState("");
    const [count, setCount] = useState(1);

    return (
        <Provider store={store}>
            <div className="App">
                <Sidebar category={category} setCategory={setCategory}/>
                <Content category={category} setCategory={setCategory} count={count} setCount={setCount}/>
            </div>
        </Provider>
    );
}

export default App;
