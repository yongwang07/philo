import React from 'react';
import { IndexRoute, Route } from 'react-router';

// Views
import App from './views/app';
import PodcastList from './views/podcast-list';
import PodcastEpisodeList from './views/podcast-episode-list';
import PlayListComponent from './views/play-list';

const Routes = (
  <Route path="/" component={App}>
    <Route path="playlist" component={PlayListComponent} />
    <IndexRoute component={PodcastList} />
    <Route path=":podcastId" component={PodcastEpisodeList} />
  </Route>
);

export default Routes;
