import React from 'react';
import { connect } from 'react-redux';

const SongDetail = (props) => {

  if (!props.selectedSong) {
    return <div className="SongDetail">
      Select a song!
    </div>
  }

  return (
    <div className="SongDetail">
      <h3>Details for:</h3>
      <p>
        Title: {props.selectedSong.title}
        <br />
        Duration: {props.selectedSong.duration}
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return { selectedSong: state.selectedSong }
};

export default connect(mapStateToProps)(SongDetail);