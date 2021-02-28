import React from 'react'
import { Link } from 'react-router-dom';
import { AppBar, Avatar, Button, ButtonBase, Toolbar, Typography } from '@material-ui/core'
import useStyles from './styles'
import memories from '../../images/memories.png';

/**
* @author
* @function Navbar
**/

const Navbar = (props) => {
    const classes = useStyles();
    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">Memories</Typography>
                <img className={classes.image} src={memories} alt="icon" height="60" />
            </div>
            <Toolbar className={classes.toolbar}>
                {user ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt="user.result.name" scr={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                        <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                        <Button className={classes.logout} variant="contained" color="secondary">Logout</Button>
                    </div>
                ) : (
                        <Button component={Link} to="/auth" variant="contained" color="primary">Login</Button>
                    )
                }
            </Toolbar>
        </AppBar>
    )

}

export default Navbar