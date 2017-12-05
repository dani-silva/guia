import React from 'react';

const UserGuide = (props) => (
	<article className='containerContent'>
		<h1 className='titleContent' >{props.content.title}</h1>
	
		<p className='guideContent'>

			{props.content.content}

		</p>

		{
			props.content.subItems ?
				
				props.content.subItems.map((content, index) => {
					return(
						<section key={index}>
							<h2 className='subTitleContent'>{content.title}</h2>

							<p className='guideContent'>

								{content.content}

							</p>
						</section>
					)
				})

			: null
		}

	</article>
)

export default UserGuide;