import React from 'react';
import UserForm from '../components/user-form-component';

class Home extends React.Component {
  render() {
    return (
      <div className="page home">
        <div className="mountains"></div>
        <div className="content">
          <div className="logo"></div>
          <UserForm {...this.props} />
        </div>
      </div>
    );
  }
}

export default Home;
