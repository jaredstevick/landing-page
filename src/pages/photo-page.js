import React from 'react';
import find from 'lodash/find';
import data from '../data';
import ErrorComponent from '../components/error-component';
import MediaComponent from '../components/media-component';
// import { getData } from '../util/api-util';

class PhotoPage extends React.Component {
  constructor() {
    super();
    this.state = {
      error: false,
    };
  }
  componentWillMount() {
    const {
      location: { search },
    } = this.props;

    const params = new URLSearchParams(search);
    const id = params.get('id');

    // // probably get some data here
    // getData(id, (res) => {
    //   // do stuff with the response
    //   this.setState({
    //     user: res,
    //     loading: false,
    //   });
    // },
    // (err) => {
    //   this.setState({
    //     loading: false,
    //     error: true,
    //   });
    // });

    // fake getting the data instead
    const user = find(data, { 'id': id });
    this.setState({ user });
    if (!user) {
      this.setState({ error: true });
    }
  }
  render() {
    const {
      user,
      error,
    } = this.state;

    return (
      <div className=" page -photo">
        {!error ? (
          <div>
            <h1>Photo Page</h1>
            <p>{this.state.id}</p>
            <p>{`${user.first}, here is your ${user.imgUrl ? 'photo' : 'video'}`}</p>
            <MediaComponent user={user} />
          </div>
        ) : (
          <ErrorComponent />
        )}

      </div>
    );
  }
}

export default PhotoPage;
