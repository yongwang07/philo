import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as addPlayListActions from '../action-creators/playlist';
import * as podcastActions from '../action-creators/podcasts';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import styles from '../styles/playlist';

const SortableItem = SortableElement(({ value }) =>
  <div key={value.title} className={styles.playListItem} alt={value.title}>
    <div>{value.title}</div>
  </div>
);

const SortableList = SortableContainer(({ items, onDelete, playEpsiode }) => {
  return (
    <div className={styles.list}>
      <ReactCSSTransitionGroup transitionName="remove" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
      {items.map((ep, index) => (
        <div key={ep.title} className={styles.outItem} onClick={() => playEpsiode(ep)}>
          <div className={styles.episodeOp} onClick={(e) => { e.stopPropagation(); onDelete(ep); }}>&times;</div>
          <SortableItem key={ep.title} index={index} value={ep} onDelete={onDelete} className={styles.playListItem} />
        </div>
      ))}
      </ReactCSSTransitionGroup>
    </div>
  );
});


function PlayListComponent(props) {
  return props.playlist.length ? <SortableList items={props.playlist} onDelete={props.removePlayList} playEpsiode={props.loadPodcastEpisode} onSortEnd={props.reorderPlayList} /> : <div>Playlist Empty</div>; 
}
const mapStateToProps = (state) =>  ({ playlist: state.playlist })
const mapDispatchToProps = (dispatch) => bindActionCreators({ ...addPlayListActions, ...podcastActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayListComponent);