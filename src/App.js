import React from 'react';
import { LoginForm } from './components/LoginForm/LoginForm';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <p className="heading">Get started today!</p>
          <LoginForm />
        </div>
      </div>
    );
  }
}

export default App;
