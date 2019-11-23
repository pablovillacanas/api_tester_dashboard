import AddIcon from '@material-ui/icons/Add';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import React from 'react'
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import SaveIcon from '@material-ui/icons/Save';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
	},
	appBar: {
		width: `calc(100% - ${drawerWidth}px)`,
		marginRight: drawerWidth,
	},
	menutitle: {
		marginTop: '10px',
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		width: drawerWidth,
	},
	toolbar: theme.mixins.toolbar,
	content: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.default,
		padding: theme.spacing(3),
	},
}));

const AsideDrawer = () => {
	const classes = useStyles;

	return (
		<Drawer
			className={classes.drawer}
			variant="permanent"
			classes={{
				paper: classes.drawerPaper,
			}}
			anchor="left"
		>
			<div className={classes.toolbar} />
			<Divider />

			<Typography gutterBottom='true' color="primary" variant='h6'>MENU</Typography>
			<List>
				<ListItem button>
					<ListItemIcon><AddIcon /></ListItemIcon>
					<ListItemText primary="Import Swagger" />
				</ListItem>
				<ListItem button>
					<ListItemIcon><SaveIcon /></ListItemIcon>
					<ListItemText primary="Save for Postman" />
				</ListItem>
			</List>
			<Divider></Divider>
			<List>
				<ListItem button>
					<ListItemIcon><SaveAltIcon /></ListItemIcon>
					<ListItemText primary="Save profile" />
				</ListItem>
				<ListItem button>
					<ListItemIcon><FlashOnIcon /></ListItemIcon>
					<ListItemText primary="Run Profile" />
				</ListItem>
			</List>
		</Drawer>
	)
}

export default AsideDrawer;