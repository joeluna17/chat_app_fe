import React from 'react';
import { Link , Route , Switch } from 'react-router-dom';
import Join from './components/join/Join';
import Chat from './components/chat/Chat';

const App = () => {
    return (
        <>
            <Switch>
                <Route path='/' exact component={Join} />
                <Route path='/chat' component={Chat} />
            </Switch>

        </>
    )
};


export default App;