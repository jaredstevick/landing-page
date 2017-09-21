import React from 'react';

class MediaComponent extends React.Component {
  render() {
    const { user } = this.props;

    const Video = () => (
      <div className="video-container">
        <iframe
          className="video-frame"
          src={`https://www.youtube.com/embed/${user.videoId}?autoplay=1`}
          allowFullScreen
          title="Your Video"
        />
      </div>
    );

    return (
      <div className="media">
        {user.imgUrl ? (
          <img
            src={user.imgUrl}
            alt="Your Event Photo"
          />
        ) : (
          <Video id={user.video} />
        )}
      </div>
    );
  }
}

export default MediaComponent;