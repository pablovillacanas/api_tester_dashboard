import './ObjectEditor.scss'

import React, { useEffect, useState } from 'react';

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

	const example = {
		name: "Dogo",
		age: 2,
		death: false,
		birthday: "2018-10-17T13:34:15.226Z",
		childs: ['Max', 'Deb'],
		custom: { color: 'black' }
	}

	var jsonObj;

	useEffect(() => {
		chargeEditor();
	}, [])

	//Trigger the load of JsonObject in the editors prop
	const chargeEditor = () => {
		let element = document.getElementById('json_editor');
		element.focus()
	}

	const classes = useStyles();

	return (
		<div className='ObjectEditor'>
			<JSONInput
				id='json_editor'
				placeholder={example}
				locale={locale}
				color='darktheme'
				width='100%'
				height='100%'
				onChange={(obj) => jsonObj = (obj.jsObject)}
			/>
			<Button
				onClick={() => {
					props.analyze(jsonObj);
					chargeEditor();
				}}
				className={classes.root} variant="contained" color="primary">
				Construct object form
			</Button>
		</div >

	)
}

ObjectEditor.propTypes = {

}

export default ObjectEditor;