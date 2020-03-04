import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

const SongList = (props) => {

  function onButtonClick(song) {
    props.selectSong(song);
  };

  // map over list, return
  function renderList() {
    return props.songs.map((song) => { // set key equal to title, because it's unique enough.. I tried to do i++ in todolist..
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button className="ui button primary" onClick={() => onButtonClick(song)}>
              Select
            </button>
          </div>

          <div className="content">{song.title}</div>
        </div>
      )
    });
  };

  return (
    <div className="SongList ui divided list">
      {renderList()}
    </div>
  );
};

const mapStateToProps = (state) => { // state gets ALL state data from redux store
  return ({ songs: state.songs });
};

export default connect(mapStateToProps, { selectSong: selectSong })(SongList);