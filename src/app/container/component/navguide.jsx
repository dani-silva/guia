import React from 'react';

import {List, ListItem} from 'material-ui/List';

class NavGuide extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			open: true,
		}

		this.data = this.props.nav;
		this.listNav = this.listNav.bind(this);
		
	}

	listNav(arrayData) {

		return(
		
			arrayData.map((item, index) => {

				if (item.subItems) {

					let subList = this.listNav(item.subItems);

					return(

						<ListItem
							key={index}
				        	primaryText={item.title}
				        	initiallyOpen={this.state.open}
				        	nestedItems={subList}
				        	onClick={() => this.props.functionChangeContent(item.title)}
						/>
					)

				} else {

					return(

						<ListItem
							key={index}
				        	primaryText={item.title}
				        	initiallyOpen={this.state.open}
				        	onClick={() => this.props.functionChangeContent(item.title)}
						/>
					)
				}
			})
		)
	}

	render() {

		let list = this.listNav(this.data)

		return (
			<nav className='containerNavGuide'>

				<h2 className='titleNav'>USER GUIDE</h2>
				
				<List>
					{list}
				</List>

			</nav>

		)
	}

}

export default NavGuide;