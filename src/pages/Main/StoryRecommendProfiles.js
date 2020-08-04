import React from "react";

class StoryRecommendProfiles extends React.Component {
  render() {
    return (
      <div className="wrapProfile">
        <img src={this.props.profileImageSrc} alt="profileImg" />
        <div>
          <a>{this.props.iD}</a>
          <p>{this.props.description}</p>
        </div>
      </div>
    );
  }
}

export default StoryRecommendProfiles;
