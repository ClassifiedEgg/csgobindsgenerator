import React from 'react'
import { Grid, Box, TextField } from '@material-ui/core';
import { useStoreState } from 'easy-peasy';

const DisplayBinds = () => {

    return (
        <Grid item xs={10}>
            <Box mx={5} my={2}>

                <TextField
                    placeholder="Your binds will be displayed here"
                    multiline={true}
                    disabled
                    rows={12}
                    rowsMax={12}
                    variant="outlined"
                    fullWidth
                    value={
                        useStoreState(state => state.allBinds)
                            .map(({ keyCode, binds }) => {
                                return `bind "${keyCode}" "${binds.join(' ')}"`
                            }).join("\n")
                    }

                />
            </Box>
        </Grid>
    )
}

export default DisplayBinds;
