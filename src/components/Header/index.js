import React from 'react';
import { Grid } from '@material-ui/core/';

const Header = () => {
    return (
        <header>
            <Grid
                container
                justify="center"
            >
                <h1>Testing Hooks</h1>
            </Grid>
        </header>
    );
}

export default Header;