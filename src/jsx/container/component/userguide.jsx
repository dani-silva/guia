import React from 'react';
import ReactMarkdown from 'react-markdown';

const UserGuide = (props) => (
	<article className='containerContent'>
		<h1 className='titleContent' >{props.title}</h1>
	
		<ReactMarkdown source={props.content} />
		
	</article>
)

export default UserGuide;