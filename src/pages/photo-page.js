import React from 'react';
import ErrorComponent from '../components/error-component';
import LoadingComponent from '../components/loading-component';
import MediaComponent from '../components/media-component';
import ShareButtons from '../components/share-buttons';
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
      <div className="page photo">
        <div className="mountains"></div>
        <div className="content">
          {!error ? (
            <div>
              <p className="photo-text">
                Thanks {user.first}! Enjoy your {user.imgUrl ? 'photo' : 'video'}.
              </p>
              <MediaComponent user={user} />
              <ShareButtons user={user} />
            </div>
          ) : (
            <ErrorComponent {...this.props} />
          )}
        </div>
      </div>
    );
  }
}

export default PhotoPage;
