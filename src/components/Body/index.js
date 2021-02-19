import React, { useState } from 'react';
import { Checkbox, Button, Card, Grid, makeStyles, colors } from '@material-ui/core/';

const useStyles = makeStyles({
    cardHeader: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      color: '#fff',
      padding: '10px 30px',
      margin: '0'
    },
  });

const getUserData = () => {
    return {firstName: 'Shad', lastName: 'Holland'};
}

const useName = () => {
    const defaultState = {firstName: '', lastName: ''};
    const [user, getUser] = useState(defaultState);

    const userData = getUserData();

    return [user, () => getUser(userData)];
};

const Body = props => {
    const classes = useStyles();
    const [user, getUser] = useName();
    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
        >
            <Card>
                <Grid
                    container
                    justify="center"
                    alignItems="center"
                >
                    <h3 className={classes.cardHeader}>{props.sectionTitle}</h3>
                </Grid>
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignContent="center"
                >
                    <p>{`${user.firstName} ${user.lastName}`}</p>
                    <Button onClick={getUser}>Add Name</Button>
                    <div>
                        <Checkbox /> Click Me!
                    </div>
                </Grid>
            </Card>
        </Grid>
    );
}

export default Body;