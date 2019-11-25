import React from 'react'
import { Button, Box, Typography } from '@material-ui/core';
import { useStoreState, useStoreActions } from 'easy-peasy';

const Header = () => {

    const displaySelectedKey = useStoreState(state => state.displaySelectedKey);
    const setKey = useStoreActions(actions => actions.changeCurrentKey);

    const buttonOnClick = (e) => {
        const location = { 0: "", 1: "Left", 2: "Right", 3: "Numpad" };
        const display = `${e.location === 0 ? "" : (location[e.location] + " ")}${e.key}`;
        const key = e.key;
        const keyCode = e.keyCode;
        setKey({ display, key, keyCode });
    }

    return (
        <div>
            <Typography variant='h3' component='div'>
                <Box fontWeight={500} textAlign="center" my={2}>
                    CSGO Bind
                </Box>
            </Typography>

            <Typography component='div'>
                <Box align='center'>
                    <Box component='div'>Currently setting binds for</Box>
                    <Button
                        variant="contained"
                        color="secondary"
                        size='small'
                        onKeyDown={(e) => buttonOnClick(e)}
                    >
                        {displaySelectedKey}
                    </Button>
                </Box>
            </Typography>
        </div>
    )
}

export default Header
