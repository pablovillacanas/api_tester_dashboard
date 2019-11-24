import { Divider, ListItem, ListItemText, Typography } from '@material-ui/core';

import { FixedSizeList } from 'react-window';
import PropTypes from 'prop-types'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	root: {
		width: '260px',
		height: '100%',
		maxWidth: '360px',
		backgroundColor: theme.palette.background.paper,
	},
	menutitle: {
		margin: '8px 16px'
	}
}));

const ObjectRepository = props => {
	const classes = useStyles();

	const renderRow = () => {
		let objectsArray = props.objects;

		return (
			objectsArray.forEach((object, index) => {
				return <ListItem button key={index}>
					<ListItemText primary={object} />
				</ListItem>
			})
		);
	}

	return (
		<div className={classes.root}>
			<div className={classes.menutitle}>
				<Typography variant='h6'>Object Repository</Typography>
			</div>
			<Divider />
			<FixedSizeList height={100} itemSize={props.objects.length} itemCount={props.objects.length}>
				{renderRow}
			</FixedSizeList>
		</div>
	)
}

ObjectRepository.propTypes = {
	objects: PropTypes.array.isRequired
}

export default ObjectRepository
