/* eslint-disable react/destructuring-assignment */
import React, { useLayoutEffect } from 'react';
import { connect } from 'react-redux';

import { getVideoSource } from '../actions';
import NotFound from './NotFound';

import '../assets/styles/components/Player.scss';

const Player = (props) => {
  const { id } = props.match.params;
  const hasPlaying = Object.keys(props.playing).length > 0;

  useLayoutEffect(() => {
    props.getVideoSource(id);
  }, []);

  return hasPlaying ? (
    <div className="player">
      <video controls autoPlay>
        <source src={props.playing.source} type="video/mp4" />
      </video>
      <div className="player-back">
        <button type="button" onClick={() => props.history.goBack()}>
          Regresar
        </button>
      </div>
    </div>
  ) : <NotFound />;
};

const mapStateToProps = (state) => {
  return {
    playing: state.playing,
  };
};

const mapDispatchToProps = {
  getVideoSource,
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
