import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { NotFound } from './components/NotFound/NotFound';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import { AccountForm } from './features/account/AccountForm';
import { Chat } from './features/chat/Chat';
import { Chats } from './features/chat/Chats';
import { CreateDateForm } from './features/dates/components/CreateDateForm';
import { Dates } from './features/dates/Dates';
import { Users } from './features/users/Users';
import { AccountControl } from './services/AccountControl';
import { ChatsControl } from './services/ChatsControl';
import { DatesControl } from './services/DatesControl';
import { ImageControl } from './services/ImageControl';
import { UsersControl } from './services/UsersControl';

export const accountControl = new AccountControl();
export const usersControl = new UsersControl();
export const datesControl = new DatesControl();
export const imageControl = new ImageControl();
export const chatsControl = new ChatsControl();

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/account/form" component={AccountForm} />

          <PrivateRoute exact path="/">
            <Users />
          </PrivateRoute>
          <PrivateRoute exact path="/dates">
            <Dates />
          </PrivateRoute>
          <PrivateRoute exact path="/chats">
            <Chats />
          </PrivateRoute>
          <PrivateRoute exact path="/chats/:receiver">
            <Chat />
          </PrivateRoute>

          <Route component={NotFound} />
        </Switch>
      </Router>
      <CreateDateForm />
    </div>
  );
};

export default App;
