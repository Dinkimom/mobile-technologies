import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute';
import { AccountForm } from './features/account/AccountForm';
import { CreateDateForm } from './features/dates/components/CreateDateForm';
import { Dates } from './features/dates/Dates';
import { Users } from './features/users/Users';
import { AccountControl } from './services/AccountControl';
import { DatesControl } from './services/DatesControl';
import { UsersControl } from './services/UsersControl';

export const accountControl = new AccountControl();
export const usersControl = new UsersControl();
export const datesControl = new DatesControl();

const App: React.FC = () => {
  return (
    <>
      {/* <Router>
        <Switch>
          <Route path="/account/form" component={AccountForm} />
          <PrivateRoute exact path="/">
            <Users />
          </PrivateRoute>
          <PrivateRoute exact path="/dates">
            <Dates />
          </PrivateRoute>
        </Switch>
      </Router>
      <CreateDateForm /> */}
    </>
  );
};

export default App;
