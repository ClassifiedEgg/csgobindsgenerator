import React from 'react'
import { Button, Box, Typography } from '@material-ui/core';
import { useStoreState, useStoreActions } from 'easy-peasy';
import { makeStyles } from '@material-ui/core/styles';
import { green } from "@material-ui/core/colors";
import { keylist } from '../static/keylist';

const Header = () => {

    const useStyles = makeStyles(theme => ({
        showKey: {
            color: theme.palette.getContrastText(green[700]),
            backgroundColor: green[500],
            "&:hover": {
                backgroundColor: green[700]
            }
        }
    }));

    const classes = useStyles();

    const displaySelectedKey = useStoreState(state => state.currentSelectedKey);
    const setCurrentKey = useStoreActions(actions => actions.changeCurrentKey);

    const buttonOnClick = (e) => {
        const location = { 0: "", 1: "Left", 2: "Right", 3: "Numpad" };
        let key =
            `${e.location === 0 ? "" : (location[e.location] + " ")}${e.location === 0 ? (e.key.toUpperCase()) : (e.key)}`;
        key = key === " " ? "Space" : key;
        let keyCode = keylist.find(({ keyName }) => keyName.includes(e.code)).key;
        setCurrentKey({ key, keyCode });
    }

    return (
        <div>
            <Typography variant='h3' component='div'>
                <Box fontWeight={700} textAlign="center" mt={2} mb={1}>
                    CS:GO Buy Bind Generator
                </Box>
            </Typography>

            <Typography component='div'>
                <Box align='center'>
                    <Box component='div' my={1}>Currently setting binds for</Box>
                    <Button
                        variant="contained"
                        color="secondary"
                        size='small'
                        onKeyDown={(e) => buttonOnClick(e.nativeEvent)}
                        className={classes.showKey}
                    >
                        {displaySelectedKey}
                    </Button>
                </Box>
            </Typography>
        </div>
    )
}

export default Header
