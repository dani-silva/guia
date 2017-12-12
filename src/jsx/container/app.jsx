import React from 'react';
import NavGuide from './component/navguide.jsx';
import UserGuide from './component/userguide.jsx';
//import Data from '../../data.json';

class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			selected: {
				title: 'Title',
				content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore ipsum vitae eveniet fugiat cupiditate. Deserunt ad mollitia enim, rerum fugit repudiandae minima, nulla est facere delectus ex voluptate possimus veniam.',
			},
			data: [
				{
				title: 'Title render',
				content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore ipsum vitae eveniet fugiat cupiditate. Deserunt ad mollitia enim, rerum fugit repudiandae minima, nulla est facere delectus ex voluptate possimus veniam.',
				}
			]
		}

		//this.dataGuide = Data;

		this.changeContent = this.changeContent.bind(this);
	}

	componentWillMount() {

		let t = this;
		let jsonResponse

		let http = new XMLHttpRequest();

		http.onreadystatechange = () => {
			if (http.readyState == 4 && http.status == 200) {

				jsonResponse = JSON.parse(http.response);
				//console.log(jsonResponse)

				t.setState({
					selected: jsonResponse[0],
					data: jsonResponse
				});

			}
		}

		http.open('POST', 'guide', false);

		http.send();

	}

	changeContent(e, content) {

		if (e.target.classList.value.indexOf('activeItemNav',0) != -1 || e.target.classList.value.indexOf('desactive',0) != -1) {

			if (e.target.classList.value.indexOf('fatherItem',0) != -1) {
				e.target.classList.toggle('active');
				e.target.classList.toggle('desactive');
			}

		}

		document.querySelector('.activeItemNav').classList.remove('activeItemNav');

		e.target.classList.add('activeItemNav')

		this.setState({
			selected: content
		})
	}

	render() {
		return (
			<main className='containerGuide'>

				<NavGuide functionChangeContent={this.changeContent} nav={this.state.data} />

				<UserGuide content={this.state.selected} />

			</main>
		)
	}
}

export default App;