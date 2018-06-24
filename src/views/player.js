import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as playerActions from '../action-creators/player';
import styles from '../styles/player';

class Player extends Component {
  componentDidUpdate() {
    if (!!this.audio) {
      const { title, podcastTitle } = this.props;
      this.audio.onended = () => {
        this.props.playEpisodeDone({
          title,
          podcastTitle
        })
      }
    }
  }
  render() {
    const { title, podcastTitle, src } = this.props;
    const audioEl = src ? <audio ref={e => this.audio = e} src={src} controls autoPlay /> : null;
    return (
      <div className={styles.playerContainer}>
        <div className={styles.player}>
          {podcastTitle} - {title}
          {audioEl}
        </div>
      </div>
    );
  }
}
Player.propTypes = {
  title: PropTypes.string,
  podcastTitle: PropTypes.string,
  src: PropTypes.string,
};

const mapStateToProps = ({ player }) => player;
const mapDispatchToProps = (dispatch) => bindActionCreators(playerActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);
