import React from 'react'
import { Grid, Box, Button } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import DescriptionIcon from '@material-ui/icons/Description';
import AssignmentIcon from '@material-ui/icons/Assignment';

const Utility = () => {
    return (
        <Grid item xs align='center'>
            <Box mr={3}>
                <Box my={3}>
                    <Button
                        variant="contained"
                        color="primary"
                        size='medium'
                        startIcon={<AssignmentIcon />}
                    >
                        Copy to Clipboard
                </Button>
                </Box>

                <Box my={3}>
                    <Button
                        variant="contained"
                        color="primary"
                        size='medium'
                        startIcon={<DescriptionIcon />}
                    >
                        Download as txt file
                </Button>
                </Box>

                <Box my={3}>
                    <Button
                        variant="contained"
                        color="primary"
                        size='medium'
                        startIcon={<GitHubIcon />}
                    >
                        Github
                </Button>
                </Box>
            </Box>
        </Grid>
    )
}

export default Utility;
