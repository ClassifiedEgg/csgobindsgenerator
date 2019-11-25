import React from 'react'
import { Button, Grid, Box } from '@material-ui/core';

const CustomButton = ({ name }) => {
    return (
        <Box my={1}>
            <Grid item>
                <Button variant="contained" color="primary" component='div'>
                    {name}
                </Button>
            </Grid>
        </Box>
    )
}

export default CustomButton