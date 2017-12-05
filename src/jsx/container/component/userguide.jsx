import React from 'react';

const UserGuide = (props) => (
	<article className='containerContent'>
		<h1 className='titleContent' >{props.content.title}</h1>
	
		<p className='guideContent'>

			{props.content.content}

		</p>

	</article>
)

export default UserGuide;