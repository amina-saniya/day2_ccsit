import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <AppBar>
                <Toolbar>
                    <Typography variant="h6">my App</Typography>
                    <Link to='/'>
                        <Button variant="contained" color="secondary"> SIGNUP</Button>
                    </Link>
                    &nbsp;
                    <Link to='/login'>
                        <Button variant="contained" color="secondary"> LOGIN</Button>
                    </Link>
                    &nbsp;
                    <Link to='/s'>
                        <Button variant="contained" color="secondary"> STATE</Button>
                    </Link>
                    &nbsp;
                    <Link to='/c'>
                        <Button variant="contained" color="secondary">COUNT</Button>
                    </Link>
                    &nbsp;
                    <Link to='/h'>
                        <Button variant="contained" color="secondary">WELCOME</Button>
                    </Link>
                    &nbsp;

                    <Link to='/a'>
                        <Button variant="contained" color="secondary">API</Button>
                    </Link>
                    &nbsp;
                    <Link to='/p'>
                        <Button variant="contained" color="secondary">POKEMON</Button>
                    </Link>
                    &nbsp;
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar