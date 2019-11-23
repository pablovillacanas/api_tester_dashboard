import { Add, FlashOn, Save, SaveAlt } from '@material-ui/icons';
import { Backdrop, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

import PropTypes from 'prop-types';
import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
	menutitle: {
		margin: '8px 16px'
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
		zIndex: 2,
	},
	drawerPaper: {
		width: drawerWidth,
	},
	toolbar: theme.mixins.toolbar,
}));


const AsideDrawer = (props) => {
	const classes = useStyles();

	return (
		<Backdrop open={props.visible} onClick={props.toggleDrawer}>
			<Drawer
				className={classes.drawer}
				open={props.visible}
				classes={{ paper: classes.drawerPaper }}
				anchor="left">
				<div className={classes.menutitle}>
					<Typography variant='h5'>API tester</Typography>
					<Typography variant='h6'>dev version</Typography>
				</div>
				<div
					className={classes.list}
					role="presentation">
					<List>
						<ListItem button>
							<ListItemIcon><Add /></ListItemIcon>
							<ListItemText primary="Import Swagger" />
						</ListItem>
						<ListItem button>
							<ListItemIcon><Save /></ListItemIcon>
							<ListItemText primary="Save for Postman" />
						</ListItem>
					</List>
					<Divider></Divider>
					<List>
						<ListItem button>
							<ListItemIcon><SaveAlt /></ListItemIcon>
							<ListItemText primary="Save profile" />
						</ListItem>
						<ListItem button>
							<ListItemIcon><FlashOn /></ListItemIcon>
							<ListItemText primary="Run Profile" />
						</ListItem>
					</List>
				</div>
			</Drawer >
		</Backdrop >
	)
}

AsideDrawer.propTypes = {
	visible: PropTypes.bool.isRequired
};

export default AsideDrawer;