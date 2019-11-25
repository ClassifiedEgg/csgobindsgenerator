import React from 'react'
import { Button, Grid, Box } from '@material-ui/core';
import { useStoreState, useStoreActions } from 'easy-peasy';

const CustomButton = ({ name, command }) => {

    const currentKey = useStoreState(state => state.currentSelectedKey);
    const currentKeyBinds = useStoreState(state => state.currentSelectedBinds);
    const addBindToCurrent = useStoreActions(actions => actions.addBindToCurrentKey);
    const removeBindFromCurrent = useStoreActions(actions => actions.removeBindFromCurrent);
    const isBindInBinds = useStoreState(state => state.currentSelectedBinds).find(bind => bind === command)

    const buttonOnClick = () => {
        if (currentKey !== "Click to change" && currentKey) {
            isBindInBinds ?
                removeBindFromCurrent(command) : addBindToCurrent(command);
        }
    }

    return (
        <Box my={1}>
            <Grid item>
                <Button variant="contained" color={isBindInBinds ? "primary" : "default"} component='div' onClick={() => buttonOnClick()}>
                    {name}
                </Button>
            </Grid>
        </Box>
    )
}

export default CustomButton