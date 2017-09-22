import React from 'react';
import { generateId } from '../util/id-util';
// import { postData } from '../util/api-util';

class UserForm extends React.Component {
  constructor() {
    super();

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
    };
  }
  handleEnterKey(e) {
    if (e.charCode === 13) {
      this.handleSubmit();
    }
  }
  handleSubmit() {
    const { history } = this.props;
    const {
      firstName,
    } = this.state;

    // // post data here
    // postData(body, () => {
    //   // success stuff
    //   // go to results page
    // },
    // (err) => {
    //   // handle errors
    // });

    // instead, make a fake id that would come back from a successful submit
    const autoId = generateId(firstName);

    history.push({
      pathname: 'photo/',
      search: `?id=${autoId}`,
    });
  }
  render() {
    const {
      firstName,
      lastName,
      email,
    } = this.state;

    const submitDisabled = firstName.length < 1 || lastName.length < 1 || email.length < 1;

    return (
      <div
        className="user-form"
        onSubmit={() => this.handleSubmit()}
      >
        <div className="instructions">
          Please enter your information to begin.
        </div>
        <div className="input-field">
          <input
            type="text"
            placeholder="First Name"
            onChange={(e) => this.setState({ firstName: e.target.value})}
          />
        </div>
        <div className="input-field">
          <input
            type="text"
            placeholder="Last Name"
            onChange={(e) => this.setState({ lastName: e.target.value})}
          />
        </div>
        <div className="input-field">
          <input
            type="text"
            placeholder="Email Address"
            onChange={(e) => this.setState({ email: e.target.value})}
            onKeyPress={e => this.handleEnterKey(e)}
          />
        </div>
        <div className="input-field">
          {!submitDisabled ? (
            <div
              className="submit-button"
              type="button"
              onClick={() => this.handleSubmit()}
              disabled={submitDisabled}
            >
              Submit
            </div>
          ) : (
            <div
              className="submit-button disabled"
            >
              Submit
            </div>
          )}

        </div>
      </div>
    );
  }
}

export default UserForm;
