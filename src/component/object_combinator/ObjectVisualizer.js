import './ObjectVisualizer.scss'

import JSONInput from 'react-json-editor-ajrm';
import React from 'react'
import locale from 'react-json-editor-ajrm/locale/en';

export const ObjectVisualizer = (props) => {

	const example = {
		name: "Dogo",
		age: 2,
		death: false,
		birthday: "2018-10-17T13:34:15.226Z",
		childs: ['Max', 'Deb'],
		custom: { color: 'black' }
	}

	return (
		<div className='ObjectVisualizer'>
			<JSONInput
				id='json_editor'
				placeholder={example}
				locale={locale}
				color='darktheme'
				width='100%'
				height='100%'
			/>
		</div >
	)
}

ObjectVisualizer.propTypes = {

}

export default ObjectVisualizer;