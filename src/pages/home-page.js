import React from 'react';
import { generateId } from '../util/id-util';
// import { postData } from '../util/api-util';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
    };
  }
  handleSubmit() {
    const { history } = this.props;
    const {
      firstName,
      // lastName,
      // email,
    } = this.state;

    // const body = {
    //   firstName,
    //   lastName,
    //   email,
    //   id: autoId,
    // };

    // // post data here
    // postData(body, () => {
    //   // success stuff
    //   // maybe go to the new page
    // },
    // (err) => {
    //   // handle errors
    // });

    // get a fake id that would be generated on submit
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
      <div className="page -home">
        <h1>Home Page</h1>
        <form
          onSubmit={() => this.handleSubmit()}
        >
          <input
            type="text"
            placeholder="First Name"
            onChange={(e) => this.setState({ firstName: e.target.value})}
          />
          <input
            type="text"
            placeholder="Last Name"
            onChange={(e) => this.setState({ lastName: e.target.value})}
          />
          <input
            type="text"
            placeholder="Email Address"
            onChange={(e) => this.setState({ email: e.target.value})}
          />
          <button
            type="button"
            onClick={() => this.handleSubmit()}
            disabled={submitDisabled}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Home;
