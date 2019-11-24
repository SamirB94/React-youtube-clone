import axios from 'axios';

const KEY = 'AIzaSyDsyO-ZDj0r3jnmVTj-9D8LDLm_m3hhbck';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {

		part: 'snippet',
		maxResults: 5,
		key: KEY
	}
});