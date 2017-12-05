import React from 'react';
import NavGuide from './component/navguide.jsx';
import UserGuide from './component/userguide.jsx';
import Data from '../../data.json';

class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			selected: {
				title: 'Title',
				content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore ipsum vitae eveniet fugiat cupiditate. Deserunt ad mollitia enim, rerum fugit repudiandae minima, nulla est facere delectus ex voluptate possimus veniam.',
			}
		}

		this.dataGuide = Data;

		this.changeContent = this.changeContent.bind(this);
	}

	componentDidMount() {
		
		this.setState({
			selected: this.dataGuide.guide[0]
		});

	}

	changeContent(e, content) {

		document.querySelector('.activeItemNav').classList.remove('activeItemNav');

		e.target.classList.add('activeItemNav')

		this.setState({
			selected: content
		})
	}

	render() {
		return (
			<section className='containerGuide'>

				<NavGuide functionChangeContent={this.changeContent} nav={this.dataGuide} />

				<UserGuide content={this.state.selected} />

			</section>
		)
	}
}

export default App;