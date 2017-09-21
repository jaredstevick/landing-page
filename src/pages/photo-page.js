import React from 'react';
import ErrorComponent from '../components/error-component';
import LoadingComponent from '../components/loading-component';
import MediaComponent from '../components/media-component';
import { getData } from '../util/api-util';

class PhotoPage extends React.Component {
  constructor() {
    super();
    this.state = {
      error: false,
      loading: true,
    };
  }
  componentWillMount() {
    const {
      location: { search },
    } = this.props;

    const params = new URLSearchParams(search);
    const id = params.get('id');

    getData(id, (data) => {
      this.setState({
        user: data,
        loading: false,
      });
    },
    (err) => {
      this.setState({
        loading: false,
        error: true,
      });
    });
  }
  render() {
    const {
      user,
      error,
      loading,
    } = this.state;

    if (loading) {
      return <LoadingComponent />
    }

    return (
      <div className=" page -photo">
        <h1>Photo Page</h1>
          {!error ? (
            <div>
              <p>{this.state.id}</p>
              <p>{user.first}, here is your {user.imgUrl ? 'photo' : 'video'}</p>
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
