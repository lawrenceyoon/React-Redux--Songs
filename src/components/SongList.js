import React from 'react';
import { connect } from 'react-redux';

const SongList = () => {
  return (
    <div className="SongList">
      SongList
    </div>
  );
};

const mapStateToProps = (state) => { // state gets ALL state data from redux store
  console.log(state);
  return state;
};

export default connect(mapStateToProps)(SongList);