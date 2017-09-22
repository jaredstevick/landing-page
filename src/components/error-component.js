import React from 'react';

class ErrorComponent extends React.Component {
  restart() {
    const { history } = this.props;
    history.push('/');
  }
  render() {
    return (
      <div className="error">
        <div className="error-message">
          Please accept our most sincere apologies, but unfortunately 
          we were unable to locate your photo. You may click the 
          button to start again.
        </div>
        <div
          className="error-button"
          onClick={() => this.restart()}
        >
          Start Over
        </div>
      </div>
    );
  }
}

export default ErrorComponent;
