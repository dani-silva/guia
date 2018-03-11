import React from 'react';
import NavGuide from './component/navguide.jsx';
import UserGuide from './component/userguide.jsx';

class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			selected: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore ipsum vitae eveniet fugiat cupiditate. Deserunt ad mollitia enim, rerum fugit repudiandae minima, nulla est facere delectus ex voluptate possimus veniam.',
			title: 'Default Title',

		}

		this.changeContent = this.changeContent.bind(this);
	}

	componentWillMount() {

		let t = this;
		let jsonResponse;

		let http = new XMLHttpRequest();

		http.onreadystatechange = () => {
			if (http.readyState == 4 && http.status == 200) {

				jsonResponse = JSON.parse(http.response);

				//console.log(jsonResponse);

				t.setState({
					content: jsonResponse
				});

				t.changeContent(jsonResponse[0].title)

			}
		}

		http.open('GET', 'navguide', false);

		http.send();

	}

	changeContent(content) {

		let t = this;
		let jsonSearch;

		let http = new XMLHttpRequest();

		http.onreadystatechange = () => {
			if (http.readyState == 4 && http.status == 200) {

				jsonSearch = JSON.parse(http.response);

				//console.log(jsonSearch)

				t.setState({
					selected: jsonSearch.content,
					title: content
				});

			}
		}

		http.open('GET', `searchcontent/${content}`, false);

		http.send();
		/*
		this.setState({
			selected: content
		})*/
	}

	render() {
		return (
			<main className='containerGuide'>

				<NavGuide functionChangeContent={this.changeContent} selectedItem={this.state.title} nav={this.state.content} />

				<UserGuide title={this.state.title} content={this.state.selected} />

			</main>
		)
	}
}

export default App;