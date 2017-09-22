import React from 'react';

class ShareButtons extends React.Component {
  facebookShare() {
    const { user } = this.props;
    const u = user.imgUrl ? user.imgUrl : user.videoId;
    const t = "My Patagonia Photo";

    window.open(
      `https://www.facebook.com/sharer.php?u=${encodeURIComponent(u)}&t=${encodeURIComponent(t)}`,
      '_blank',
      'sharer',
      'toolbar=0,status=0,width=626,height=436'
    );
  }
  twitterShare() {
    console.log('this is where i would share on twitter if i had more time lol');
  }
  render() {
    const { user } = this.props;

    return (
      <div className="share">
        <p className="share-help">
          Share your result on social media
        </p>
        <div className="share-buttons">
          <div
            className="share-button facebook"
            onClick={() => this.facebookShare()}
          >
            Share on Facebook
          </div>
          <div className="share-button twitter">
            Share on Twitter
          </div>
          {user.imgUrl ? (
            <a
              href={user.imgUrl}
              download="patagonia_photo"
              className="share-button instagram"
            >
              Download for Instagram
            </a>
          ) : (
            <div
              className="share-button instagram disabled"
            >
              Download for Instagram
            </div>
          )}

        </div>
      </div>
    );
  }
}

export default ShareButtons;