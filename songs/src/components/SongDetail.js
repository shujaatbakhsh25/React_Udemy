import React, { Component } from "react";
import { connect } from "react-redux";

class SongDetail extends Component {
  render() {
    const { song } = this.props;
    if (!song) {
      return <div>Please select a song!</div>;
    }
    return <div>{song.title}</div>;
  }
}

const mapStateToProps = state => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
