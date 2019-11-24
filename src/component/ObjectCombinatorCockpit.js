import './ObjectCombinatorCockpit.scss'

import { Paper, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'

import React from 'react'
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

const ObjectCombinatorCockpit = (props) => {
	const classes = useStyles();

	return (
		<div className="ObjectCombinatorCockpit">
			{/* <Paper className={classes.root}>
				<Table className={classes.table} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>Attribute name</TableCell>
							<TableCell>Default value</TableCell>
							<TableCell align="right">Type</TableCell>
							<TableCell align="right">Required</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{props.object.map(row => (
							<TableRow key={row.name}>
								<TableCell component="th" scope="row">
									{row.name}
								</TableCell>
								<TableCell align="right">{row.calories}</TableCell>
								<TableCell align="right">{row.calories}</TableCell>
								<TableCell align="right">{row.fat}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</Paper> */}
		</div>
	)
}

ObjectCombinatorCockpit.propTypes = {

}

export default ObjectCombinatorCockpit;