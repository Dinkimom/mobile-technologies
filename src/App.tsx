import { SocketProvider } from 'features/socketProvider/SocketProvider';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { socketReducers } from 'socket';
import { PATHS } from 'utils/route-helpers';
import './App.css';
import { NotFound } from './components/NotFound/NotFound';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import { AccountForm } from './features/account/AccountForm';
import { Chat } from './features/chat/Chat';
import { Chats } from './features/chat/Chats';
import { CreateDateForm } from './features/dates/components/CreateDateForm';
import { Dates } from './features/dates/Dates';
import { Users } from './features/users/Users';

const App: React.FC = () => {
    return (
        <div className="App">
            <Router>
                <SocketProvider reducers={socketReducers}>
                    <Switch>
                        <Route path={PATHS.LOGIN} component={AccountForm} />

                        <PrivateRoute exact path={PATHS.HOME}>
                            <Users />
                        </PrivateRoute>
                        <PrivateRoute exact path={PATHS.DATES}>
                            <Dates />
                        </PrivateRoute>
                        <PrivateRoute exact path={PATHS.CHATS}>
                            <Chats />
                        </PrivateRoute>
                        <PrivateRoute exact path={PATHS.CHAT}>
                            <Chat />
                        </PrivateRoute>

                        <Route component={NotFound} />
                    </Switch>
                </SocketProvider>
            </Router>
            <CreateDateForm />
        </div>
    );
};

export default App;
