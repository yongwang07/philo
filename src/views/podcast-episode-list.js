import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as podcastActions from '../action-creators/podcasts';
import * as addPlayListActions from '../action-creators/playlist';
import styles from '../styles/podcast-episode-list';
import FlashMessage from './flash-message';


function PodcastEpisodeList(props) {
  const { title: [podcastTitle = ''] = [], item: episodes = [], routeParams } = props;

  const formattedEps = episodes.map(({ enclosure, title: [title] }) => ({
    podcastTitle,
    title,
    src: enclosure[0].$.url,
    podcastId: routeParams.podcastId,
  }));

  return (
    <div className={styles.episodeListContainer}>
      <FlashMessage />
      <h1>{podcastTitle}</h1>
      <ul className={styles.episodeList}>
        {
          formattedEps.map((ep) => (
            <li
              key={ep.title} className={styles.episodeListItem} alt={ep.title}
              onClick={() => props.loadPodcastEpisode(ep)}
            >
              <div className={styles.episodeOp} onClick={(e) => { e.stopPropagation(); props.addPlayList(ep); }}>✎</div>
              <div>
                {ep.title}
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  );
}
PodcastEpisodeList.propTypes = {
  loadPodcastEpisode: PropTypes.func.isRequired,
  addPlayList: PropTypes.func.isRequired,
};

const mapStateToProps = (state, { routeParams }) => state.podcasts[routeParams.podcastId] || {};
const mapDispatchToProps = (dispatch) => bindActionCreators({ ...podcastActions, ...addPlayListActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PodcastEpisodeList);
