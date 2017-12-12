import React from 'react';

class NavGuide extends React.Component {
	constructor(props){
		super(props);

		this.data = this.props.nav;
		this.listNav = this.listNav.bind(this);
		
	}

	componentDidMount() {
		document.querySelector('.itemNav').classList.add('activeItemNav')
	}

	listNav(arrayData, subStyle) {

		return(
			<ul className={`${subStyle} containerListNav`}>
				{
					arrayData.map((item, index) => {

						if (item.subItems) {

							let subList = this.listNav(item.subItems, 'subListNav');

							return(

								<li key={index} link={item.link} title={item.title} >

									<a onClick={(e) => this.props.functionChangeContent(e, item)} className='itemNav fatherItem active' to={item.link}> { item.title } </a>

									{subList}

								</li>
								
							)

						} else {

							return(
								<li key={index}>

									<a onClick={(e) => this.props.functionChangeContent(e, item)} className='itemNav' to={item.link}> { item.title } </a>

								</li>
							)

						}
					})
				}
			</ul>
		)

	}

	render() {

		let list = this.listNav(this.data)

		return (
			<nav className='containerNavGuide'>

				<h2 className='titleNav'>USER GUIDE</h2>

				{list}

			</nav>

		)
	}

}

export default NavGuide;