import './ObjectCombinatorCockpit.scss'

import { Paper, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'
import React, { useEffect, useRef } from 'react'

import { attr_analyzer } from "combinatory_testing";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	root: {
		width: '100%',
		overflowX: 'auto',
	},
	table: {
		minWidth: 650,
	},
});

const drawRows = (attrs) => {
	return attrs.map(attr => (
	<TableRow key={attr.name} >
		<TableCell component="th" scope="row">
			{attr.name}
		</TableCell>
		<TableCell align="left">{JSON.stringify(attr.defaultValue)}</TableCell>
		<TableCell align="left">{attr.type}</TableCell>
		<TableCell align="left">{attr.required}</TableCell>
	</TableRow>
	))
}

const ObjectCombinatorCockpit = (props) => {
	const classes = useStyles();

	const attrs = useRef([])

	useEffect(() => {
		attrs.current = attr_analyzer(props.selectedObject);
	}, [props.selectedObject])

	return (
		<div className="ObjectCombinatorCockpit">
			<Paper className={classes.root}>
				<Table className={classes.table} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>Attribute name</TableCell>
							<TableCell>Default value</TableCell>
							<TableCell align="left">Type</TableCell>
							<TableCell align="left">Required</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{attrs.current.length > 0 ?
							drawRows(attrs.current) : null}
					</TableBody>
				</Table>
			</Paper>
		</div >
	)
}

ObjectCombinatorCockpit.propTypes = {

}

export default ObjectCombinatorCockpit;