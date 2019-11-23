import './ObjectEditor.scss'

import React, { useState } from 'react';

import { Button } from '@material-ui/core';
import JSONInput from 'react-json-editor-ajrm';
import locale from 'react-json-editor-ajrm/locale/en';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	root: {
		borderRadius: '0px'
	}
}));

export const ObjectEditor = (props) => {

	const [invalidJson, setInvalidJson] = useState(false)

	const classes = useStyles();

	const example = {
		name: "Dogo",
		age: 2,
		death: false,
		birthday: "2018-10-17T13:34:15.226Z",
		childs: ['Max', 'Deb'],
		custom: { color: 'black' }
	}

	return (
		<div className='ObjectEditor'>
			<JSONInput
				id='json_editor'
				placeholder={example}
				locale={locale}
				color='darktheme'
				width='100%'
				height='100%'
			/>
			<Button disabled={invalidJson} className={classes.root} variant="contained" color="primary">
				Construct object form
			</Button>
		</div >
	)
}

ObjectEditor.propTypes = {

}

export default ObjectEditor;