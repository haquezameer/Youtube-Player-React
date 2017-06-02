import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchbar';
import VideoList from './components/video_list';
import YTsearch from 'youtube-api-search';
import VideoDetail from './components/video_detail';
import _ from 'lodash';

const API_KEY = 'AIzaSyA27wkBL00MkQdFEBw308d7I7C0SnA54I0';

class App extends Component {
	
	constructor(props){
		super(props);

		this.state = { 
			videos : [],
			selectedVideo : null
		};
	
	this.videoSearch('surfboards');

}

	videoSearch(term){
		YTsearch({key : API_KEY, term : term},(videos) => {
			this.setState({
				videos : videos,
				selectedVideo : videos[0]
				});
		});
	}

	render() {
		const videoSearch = _.debounce((term) => {this.videoSearch(term)},300);
	return (<div>
		<SearchBar onVideoSearch = {videoSearch} />
		<VideoDetail video={this.state.selectedVideo} />
		<VideoList onVideoSelect = {selectedVideo => this.setState({selectedVideo})} 
		videos={this.state.videos} />
	</div>
	); 
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));